// Protect all routes except public routes
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']) // add public routes here
const isPublicRoute = createRouteMatcher(['/(.*)','/sign-in(.*)', '/sign-up(.*)']) // add public routes here

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


// // protect only those routes that require specific permissions

// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isProtectedRoute = createRouteMatcher(['/admin(.*)']) // Protect all routes under /admin you ca add more routes here

// export default clerkMiddleware(async (auth, req) => {
//   // Restrict admin routes to users with specific permissions
//   if (isProtectedRoute(req)) {
//     await auth.protect((has) => {
//       return has({ permission: 'org:admin:example1' }) || has({ permission: 'org:admin:example2' })
//     })
//   }
// })
// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }

