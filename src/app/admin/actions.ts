"use server";

import { cookies } from 'next/headers';
import { supabase } from '@/lib/supabase'; // Make sure you can import supabase server-side
import bcrypt from 'bcrypt';

// Define the cookie name consistently
const AUTH_COOKIE_NAME = 'admin-auth-session'; // Changed name slightly

// Login Action
export async function handleLogin(username: string, plainPasswordAttempt: string): Promise<{ success: boolean; error?: string }> {
  if (!username || !plainPasswordAttempt) {
    return { success: false, error: 'Username and password are required.' };
  }

  try {
    // 1. Fetch user from your custom table
    const { data: adminUser, error: queryError } = await supabase
      .from('admin_users')
      .select('password') // Select the HASHED password column (RENAME IT!)
      .eq('username', username)
      .single(); // Expect only one user

    if (queryError || !adminUser) {
      console.error("DB Query Error or User not found:", queryError);
      return { success: false, error: 'Invalid username or password.' }; // Generic error
    }

    const storedHash = adminUser.password; // Use the correct column name

    // 2. Compare the provided password with the stored hash
    const match = await bcrypt.compare(plainPasswordAttempt, storedHash);

    if (match) {
      // 3. Passwords match - Set a simple session cookie
      const sessionValue = JSON.stringify({ username: username, loggedInAt: Date.now() }); // Example session value
      (await cookies()).set(AUTH_COOKIE_NAME, sessionValue, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day expiry
        sameSite: 'strict', // Recommended for security
      });
      return { success: true };
    } else {
      // Passwords don't match
      return { success: false, error: 'Invalid username or password.' }; // Generic error
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
