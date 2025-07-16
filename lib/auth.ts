import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import * as jose from 'jose';

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
    
    // Create a secret key from the JWT secret
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'fallback-secret-key-change-in-production'
    );
    
    // Verify the token
    const { payload } = await jose.jwtVerify(token, secret);
    
    // Validate the payload has the required fields
    if (
      typeof payload.userId !== 'string' ||
      typeof payload.email !== 'string' ||
      typeof payload.name !== 'string' ||
      typeof payload.role !== 'string'
    ) {
      return null;
    }

    return {
      userId: payload.userId,
      email: payload.email,
      name: payload.name,
      role: payload.role
    };
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
