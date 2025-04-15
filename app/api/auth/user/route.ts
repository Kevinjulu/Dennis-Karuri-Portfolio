import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import dbConnect from '@/lib/models';
import User from '@/lib/models/user';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get the authenticated user from the token
    const authUser = await getAuthUser(req);
    
    if (!authUser) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }
    
    // Get user details from database (excluding password)
    const user = await User.findById(authUser.userId)
      .select('-password')
      .lean();
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}
