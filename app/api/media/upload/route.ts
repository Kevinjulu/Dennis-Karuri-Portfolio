import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import Media from '@/lib/models/media';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    // Process the form data
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }
    
    // Get file metadata
    const title = formData.get('title') as string || file.name;
    const type = formData.get('type') as string || getFileType(file.type);
    const description = formData.get('description') as string || '';
    
    // Create unique filename
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Generate a unique filename with UUID
    const uniqueId = uuidv4();
    const fileExt = file.name.split('.').pop();
    const fileName = `${uniqueId}.${fileExt}`;
    
    // Define path to save file
    const publicDir = join(process.cwd(), 'public');
    const mediaDir = join(publicDir, 'media');
    const filePath = join(mediaDir, fileName);
    const publicPath = `/media/${fileName}`;
    
    // Save file to disk
    await writeFile(filePath, buffer);
    
    // Create media record in database
    const newMedia = new Media({
      title,
      description,
      type,
      url: publicPath,
      fileName,
      fileSize: file.size,
      mimeType: file.type,
    });
    
    const savedMedia = await newMedia.save();
    
    return NextResponse.json(savedMedia, { status: 201 });
  } catch (error) {
    console.error('Error uploading media:', error);
    return NextResponse.json(
      { error: 'Failed to upload media' },
      { status: 500 }
    );
  }
}

// Helper function to determine file type from MIME type
function getFileType(mimeType: string): string {
  if (mimeType.startsWith('image/')) {
    return 'image';
  } else if (mimeType.startsWith('video/')) {
    return 'video';
  } else if (mimeType.startsWith('audio/')) {
    return 'audio';
  } else {
    return 'document';
  }
}
