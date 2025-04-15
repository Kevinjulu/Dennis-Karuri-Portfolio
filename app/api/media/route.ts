import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import Media from '@/lib/models/media';

// Get all media items with optional type filter
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    
    let query: any = {};
    
    if (type) {
      query.type = type;
    }
    
    const mediaItems = await Media.find(query)
      .sort({ createdAt: -1 })
      .lean();
      
    return NextResponse.json(mediaItems);
  } catch (error) {
    console.error('Error fetching media items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media items' },
      { status: 500 }
    );
  }
}

// Create a new media item
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const data = await req.json();
    const newMedia = new Media(data);
    const savedMedia = await newMedia.save();
    
    return NextResponse.json(savedMedia, { status: 201 });
  } catch (error) {
    console.error('Error creating media item:', error);
    return NextResponse.json(
      { error: 'Failed to create media item' },
      { status: 500 }
    );
  }
}
