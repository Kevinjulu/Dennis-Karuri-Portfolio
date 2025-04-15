import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import User from '@/lib/models/user';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const { email, password } = await req.json();
    
    // Find the user
    const user = await User.findOne({ email });
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Check password
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Update last login
    user.lastLogin = new Date();
    await user.save();
    
    // Create JWT token
    const token = sign(
      { 
        userId: user._id,
        email: user.email,
        role: user.role,
        name: user.name
      },
      process.env.JWT_SECRET || 'fallback-secret-key-change-in-production',
      { expiresIn: '7d' }
    );
    
    // Set cookie
    cookies().set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    
    return NextResponse.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
