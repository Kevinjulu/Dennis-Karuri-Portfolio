import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import Setting from '@/lib/models/setting';

// Get all settings with optional category filter
export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    
    const query: any = {};
    
    if (category) {
      query.category = category;
    }
    
    const settings = await Setting.find(query).sort({ category: 1, key: 1 }).lean();
    
    // Transform array to key-value object for easier consumption
    const settingsObject = settings.reduce((acc: any, setting: any) => {
      if (!acc[setting.category]) {
        acc[setting.category] = {};
      }
      acc[setting.category][setting.key] = setting.value;
      return acc;
    }, {});
    
    return NextResponse.json(settingsObject);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// Create a new setting
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const data = await req.json();
    
    // Check if required fields are present
    if (!data.key || !data.category) {
      return NextResponse.json(
        { error: 'Key and category are required' },
        { status: 400 }
      );
    }
    
    // Check if setting already exists
    const existingSetting = await Setting.findOne({ 
      key: data.key,
      category: data.category 
    });
    
    if (existingSetting) {
      return NextResponse.json(
        { error: 'Setting already exists' },
        { status: 409 }
      );
    }
    
    const newSetting = new Setting(data);
    const savedSetting = await newSetting.save();
    
    return NextResponse.json(savedSetting, { status: 201 });
  } catch (error) {
    console.error('Error creating setting:', error);
    return NextResponse.json(
      { error: 'Failed to create setting' },
      { status: 500 }
    );
  }
}
