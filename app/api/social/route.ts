import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import SocialStats from '@/lib/models/social';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    const socialStats = await SocialStats.find({})
      .sort({ followers: -1 })
      .lean();
      
    return NextResponse.json(socialStats);
  } catch (error) {
    console.error('Error fetching social stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social stats' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const data = await req.json();
    const newStat = new SocialStats(data);
    const savedStat = await newStat.save();
    
    return NextResponse.json(savedStat, { status: 201 });
  } catch (error) {
    console.error('Error creating social stat:', error);
    return NextResponse.json(
      { error: 'Failed to create social stat' },
      { status: 500 }
    );
  }
}
