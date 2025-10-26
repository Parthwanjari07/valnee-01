// src/app/admin/upload-blog/actions.ts
"use server"; // Mark this as a server action

import { cookies } from 'next/headers';

const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME;

export async function setAuthCookie(password: string) {
  (await cookies()).set(AUTH_COOKIE_NAME||"", password, {
    httpOnly: true, // Makes cookie inaccessible to client-side JS (more secure)
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    path: '/', // Cookie available on all paths
    maxAge: 60 * 60 * 24, // Cookie expires in 1 day (adjust as needed)
    // sameSite: 'strict', // Consider adding SameSite attribute
  });
}

// Optional: Action to log out (clear the cookie)
export async function clearAuthCookie() {
    // Add await here
    (await cookies()).delete(AUTH_COOKIE_NAME||""); 
}