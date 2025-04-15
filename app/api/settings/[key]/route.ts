import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import Setting from '@/lib/models/setting';

// Get a single setting by key
export async function GET(
  req: NextRequest,
  { params }: { params: { key: string } }
) {
  try {
    await dbConnect();
    
    const { key } = params;
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    
    if (!category) {
      return NextResponse.json(
        { error: 'Category is required to get a setting' },
        { status: 400 }
      );
    }
    
    const setting = await Setting.findOne({ key, category }).lean();
    
    if (!setting) {
      return NextResponse.json(
        { error: 'Setting not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(setting);
  } catch (error) {
    console.error('Error fetching setting:', error);
    return NextResponse.json(
      { error: 'Failed to fetch setting' },
      { status: 500 }
    );
  }
}

// Update a setting by key
export async function PUT(
  req: NextRequest,
  { params }: { params: { key: string } }
) {
  try {
    await dbConnect();
    
    const { key } = params;
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    
    if (!category) {
      return NextResponse.json(
        { error: 'Category is required to update a setting' },
        { status: 400 }
      );
    }
    
    const data = await req.json();
    
    // Find and update the setting
    const updatedSetting = await Setting.findOneAndUpdate(
      { key, category },
      { $set: { value: data.value } },
      { new: true, runValidators: true, upsert: true }
    ).lean();
    
    return NextResponse.json(updatedSetting);
  } catch (error) {
    console.error('Error updating setting:', error);
    return NextResponse.json(
      { error: 'Failed to update setting' },
      { status: 500 }
    );
  }
}

// Delete a setting by key
export async function DELETE(
  req: NextRequest,
  { params }: { params: { key: string } }
) {
  try {
    await dbConnect();
    
    const { key } = params;
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    
    if (!category) {
      return NextResponse.json(
        { error: 'Category is required to delete a setting' },
        { status: 400 }
      );
    }
    
    const deletedSetting = await Setting.findOneAndDelete({ key, category }).lean();
    
    if (!deletedSetting) {
      return NextResponse.json(
        { error: 'Setting not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Setting deleted successfully' });
  } catch (error) {
    console.error('Error deleting setting:', error);
    return NextResponse.json(
      { error: 'Failed to delete setting' },
      { status: 500 }
    );
  }
}
