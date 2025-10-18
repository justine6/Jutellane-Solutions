import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // If the browser is requesting HTML, prevent caching of the page shell/doc
  const accept = req.headers.get('accept') || '';
  if (accept.includes('text/html')) {
    res.headers.set('Cache-Control', 'no-store');
  }

  return res;
}

// Run this for all routes (you could narrow it if needed)
export const config = {
  matcher: ['/:path*'],
};
