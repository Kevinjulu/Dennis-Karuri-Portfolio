import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import Media from '@/lib/models/media';
import { isValidObjectId } from 'mongoose';

// Get a single media item by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    
    const { id } = params;
    
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { error: 'Invalid media item ID' },
        { status: 400 }
      );
    }
    
    const mediaItem = await Media.findById(id).lean();
    
    if (!mediaItem) {
      return NextResponse.json(
        { error: 'Media item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(mediaItem);
  } catch (error) {
    console.error('Error fetching media item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media item' },
      { status: 500 }
    );
  }
}

// Update a media item by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    
    const { id } = params;
    
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { error: 'Invalid media item ID' },
        { status: 400 }
      );
    }
    
    const data = await req.json();
    
    const updatedMedia = await Media.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    ).lean();
    
    if (!updatedMedia) {
      return NextResponse.json(
        { error: 'Media item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedMedia);
  } catch (error) {
    console.error('Error updating media item:', error);
    return NextResponse.json(
      { error: 'Failed to update media item' },
      { status: 500 }
    );
  }
}

// Delete a media item by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    
    const { id } = params;
    
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { error: 'Invalid media item ID' },
        { status: 400 }
      );
    }
    
    const deletedMedia = await Media.findByIdAndDelete(id).lean();
    
    if (!deletedMedia) {
      return NextResponse.json(
        { error: 'Media item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Media item deleted successfully' });
  } catch (error) {
    console.error('Error deleting media item:', error);
    return NextResponse.json(
      { error: 'Failed to delete media item' },
      { status: 500 }
    );
  }
}
