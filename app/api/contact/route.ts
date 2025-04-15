import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import ContactSubmission from '@/lib/models/contact';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const data = await req.json();
    const newSubmission = new ContactSubmission(data);
    const savedSubmission = await newSubmission.save();
    
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // This endpoint should be protected for admin access only
    // We'll implement authentication middleware later
    
    const submissions = await ContactSubmission.find({})
      .sort({ createdAt: -1 })
      .lean();
      
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact submissions' },
      { status: 500 }
    );
  }
}
