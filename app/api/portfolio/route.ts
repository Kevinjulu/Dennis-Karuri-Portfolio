import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import PortfolioItem from '@/lib/models/portfolio';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured') === 'true';
    
    const query: any = {};
    
    if (category) {
      query.category = category;
    }
    
    if (featured) {
      query.featured = true;
    }
    
    const portfolioItems = await PortfolioItem.find(query)
      .sort({ order: 1, date: -1 })
      .lean();
      
    return NextResponse.json(portfolioItems);
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio items' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const data = await req.json();
    const newItem = new PortfolioItem(data);
    const savedItem = await newItem.save();
    
    return NextResponse.json(savedItem, { status: 201 });
  } catch (error) {
    console.error('Error creating portfolio item:', error);
    return NextResponse.json(
      { error: 'Failed to create portfolio item' },
      { status: 500 }
    );
  }
}
