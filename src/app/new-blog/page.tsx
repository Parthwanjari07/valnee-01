import { cookies } from "next/headers";
import NewBlogClient from "@/components/NewBlogClient";
import LoginForm from "@/components/LoginForm"; 

// Simple hardcoded password (CHANGE THIS!) - Must match LoginForm
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME;

export default async function ProtectedUploadPage() {
	const cookieStore =await cookies();
	const authCookie =  cookieStore.get(AUTH_COOKIE_NAME||"");

	// Check if the cookie value matches the password
	const isAuthenticated = authCookie?.value === ADMIN_PASSWORD;

	return (
		<>
			{isAuthenticated ? (
				// If authenticated, render the actual upload form client component
				<NewBlogClient />
			) : (
				// If not authenticated, render the login form
				<LoginForm />
			)}
		</>
	);
}
