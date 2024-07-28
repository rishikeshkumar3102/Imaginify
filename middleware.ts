import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// Custom handler to manage public routes
const handler = (req: NextRequest, event: NextFetchEvent) => {
  const publicRoutes = ['/api/webhooks/clerk'];
  
  // If the request matches a public route, continue without Clerk auth
  if (publicRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Otherwise, use Clerk middleware
  return clerkMiddleware()(req, event);
};

export default handler;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

