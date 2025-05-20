import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './app/utils/jwt';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === '/signin' || path === '/cadastro' || path === '/';

  // Get the token from the cookies
  const token = request.cookies.get('token')?.value || '';

  // Verify the token
  const verifiedToken = token && verifyToken(token);

  // Redirect logic
  if (isPublicPath && verifiedToken) {
    // If user is logged in and tries to access public path, redirect to dashboard
    return NextResponse.redirect(new URL('/logado', request.url));
  }

  if (!isPublicPath && !verifiedToken) {
    // If user is not logged in and tries to access protected path, redirect to login
    return NextResponse.redirect(new URL('/signin', request.url));
  }
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/',
    '/signin',
    '/cadastro',
    '/logado/:path*',
    '/sell/:path*',
    '/browse/:path*'
  ]
}; 