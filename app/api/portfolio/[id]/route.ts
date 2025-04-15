import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/models';
import PortfolioItem from '@/lib/models/portfolio';
import { isValidObjectId } from 'mongoose';

// Get a single portfolio item by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    
    const { id } = params;
    
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { error: 'Invalid portfolio item ID' },
        { status: 400 }
      );
    }
    
    const portfolioItem = await PortfolioItem.findById(id).lean();
    
    if (!portfolioItem) {
      return NextResponse.json(
        { error: 'Portfolio item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(portfolioItem);
  } catch (error) {
    console.error('Error fetching portfolio item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio item' },
      { status: 500 }
    );
  }
}

// Update a portfolio item by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    
    const { id } = params;
    
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { error: 'Invalid portfolio item ID' },
        { status: 400 }
      );
    }
    
    const data = await req.json();
    
    const updatedItem = await PortfolioItem.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    ).lean();
    
    if (!updatedItem) {
      return NextResponse.json(
        { error: 'Portfolio item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating portfolio item:', error);
    return NextResponse.json(
      { error: 'Failed to update portfolio item' },
      { status: 500 }
    );
  }
}

// Delete a portfolio item by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    
    const { id } = params;
    
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { error: 'Invalid portfolio item ID' },
        { status: 400 }
      );
    }
    
    const deletedItem = await PortfolioItem.findByIdAndDelete(id).lean();
    
    if (!deletedItem) {
      return NextResponse.json(
        { error: 'Portfolio item not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Portfolio item deleted successfully' });
  } catch (error) {
    console.error('Error deleting portfolio item:', error);
    return NextResponse.json(
      { error: 'Failed to delete portfolio item' },
      { status: 500 }
    );
  }
}
