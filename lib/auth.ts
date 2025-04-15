import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

export interface AuthUser {
  userId: string;
  email: string;
  name: string;
  role: string;
}

export async function getAuthUser(req?: NextRequest): Promise<AuthUser | null> {
  try {
    // Get the token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token')?.value;
    
    if (!token) {
      return null;
    }
    
    // Verify the token
    const decoded = verify(
      token, 
      process.env.JWT_SECRET || 'fallback-secret-key-change-in-production'
    ) as AuthUser;
    
    return decoded;
  } catch (error) {
    console.error('Auth verification error:', error);
    return null;
  }
}

export function isAdmin(user: AuthUser | null): boolean {
  return user?.role === 'admin';
}

// Middleware function to check if user is authenticated
export async function requireAuth(req: NextRequest) {
  const user = await getAuthUser(req);
  return !!user;
}

// Middleware function to check if user is an admin
export async function requireAdmin(req: NextRequest) {
  const user = await getAuthUser(req);
  return isAdmin(user);
}
