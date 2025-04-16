import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth';
import dbConnect from '@/lib/models';
import User from '@/lib/models/user';

// Define interface for user document
interface UserDocument {
  _id: any;
  email: string;
  name: string;
  role: string;
}

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
      
    // Make sure we have a single document, not an array
    if (!user || Array.isArray(user)) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    

    
    // Use type assertion with our interface
    const userDoc = user as unknown as UserDocument;
    
    return NextResponse.json({
      id: userDoc._id ? userDoc._id.toString() : '',
      email: userDoc.email,
      name: userDoc.name,
      role: userDoc.role
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}
