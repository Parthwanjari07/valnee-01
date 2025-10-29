// src/app/admin/edit-blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getBlogBySlug, type Blog } from "@/lib/supabase"; // Adjust import
import LoginForm from "@/components/LoginForm"; // Assuming login form is reusable
import EditBlogClient from "@/components/EditBlogClient";

// Cookie Name (MUST MATCH Authentication Setup)
const AUTH_COOKIE_NAME = 'admin-auth-session'; // Use the session cookie name

// --- Correct Props Definition ---
export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>// params IS an object, NOT a Promise
}) {
  // --- Access params directly (NO await) ---
  const { slug } = await params;

  // --- Authentication Check ---
  const cookieStore = await cookies(); // Await cookies() itself
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME);
  const isAuthenticated = !!authCookie; // Check if session cookie exists

  if (!isAuthenticated) {
    return <LoginForm />;
  }
  // --- End Authentication Check ---

  // --- Data Fetching ---
  let blogData: Blog | null = null;
  let fetchError = false;

  try {
    blogData = await getBlogBySlug(slug); // Use the correctly accessed slug
  } catch (error) {
    console.error(`Failed to fetch blog with slug "${slug}":`, error);
    fetchError = true;
  }

  // Handle blog not found
  if (!blogData && !fetchError) {
    notFound();
  }
  // --- End Data Fetching ---

  // --- Render Client Component ---
  return (
    <>
      {fetchError && (
        <div className="pt-32 text-center text-red-500">
          Error loading blog data.
        </div>
      )}
      {blogData && <EditBlogClient initialBlogData={blogData} />}
      {/* If using notFound(), this part below might not be needed */}
      {/* {!blogData && !fetchError && ( ... )} */}
    </>
  );
}