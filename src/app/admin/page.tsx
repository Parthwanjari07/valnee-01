import { cookies } from "next/headers";
import {
	getAllBlogs,
	type Blog,
	getAllCaseStudies,
	type CaseStudy,
} from "@/lib/supabase"; // Adjust import
import AdminClient from "@/components/AdminClient";
import LoginForm from "@/components/LoginForm"; // Adjust import path if needed

// Cookie Name (MUST MATCH actions.ts)
const AUTH_COOKIE_NAME = "admin-auth-session";

export default async function AdminDashboardPage() {
	const cookieStore = await cookies();
	const authCookie = cookieStore.get(AUTH_COOKIE_NAME);

	// Check if the authentication cookie exists (basic check)
	// More robust checks could involve validating the cookie content/expiry
	const isAuthenticated = !!authCookie;

	if (!isAuthenticated) {
		return <LoginForm />;
	}

	// --- Fetch data only if authenticated ---
	let allBlogs: Blog[] = [];
	let allCaseStudies: CaseStudy[] = [];
	let fetchError = false;

	try {
		[allBlogs, allCaseStudies] = await Promise.all([
			getAllBlogs(),
			getAllCaseStudies(),
		]);
	} catch (error) {
		console.error("Failed to fetch admin data:", error);
		fetchError = true;
	}

	return (
		<AdminClient
			initialBlogs={allBlogs}
			initialCaseStudies={allCaseStudies}
			fetchError={fetchError}
		/>
	);
}
