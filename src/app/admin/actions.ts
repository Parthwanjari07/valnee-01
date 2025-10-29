"use server";

import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // This must be set in .env
);

// Define the cookie name consistently
const AUTH_COOKIE_NAME = 'admin-auth-session'; // Changed name slightly

// Login Action
export async function handleLogin(username: string, plainPasswordAttempt: string): Promise<{ success: boolean; error?: string }> {
  if (!username || !plainPasswordAttempt) {
    return { success: false, error: 'Username and password are required.' };
  }

  try {
    // 1. Fetch user from your custom table using SERVICE ROLE KEY
    const { data: adminUser, error: queryError } = await supabaseAdmin
      .from('admin_users')
      .select('password')
      .eq('username', username)
      .single();

    if (queryError || !adminUser) {
      console.error("DB Query Error or User not found:", queryError);
      return { success: false, error: 'Invalid username or password.' }; // Generic error
    }

    const storedHash = adminUser.password;

    // 2. Compare the provided password with the stored hash
    const match = await bcrypt.compare(plainPasswordAttempt, storedHash);

    if (match) {
      // 3. Passwords match - Set a simple session cookie
      const sessionValue = JSON.stringify({ username: username, loggedInAt: Date.now() });
      (await cookies()).set(AUTH_COOKIE_NAME, sessionValue, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day expiry
        sameSite: 'strict',
      });
      return { success: true };
    } else {
      // Passwords don't match
      return { success: false, error: 'Invalid username or password.' };
    }

  } catch (error) {
    console.error("Login Server Action Error:", error);
    return { success: false, error: 'An internal server error occurred.' };
  }
}

// Logout Action
export async function handleLogout() {
  try {
    (await cookies()).delete(AUTH_COOKIE_NAME);
    return { success: true };
  } catch (error) {
     console.error("Logout Error:", error);
     return { success: false, error: 'Failed to logout.' };
  }
}
