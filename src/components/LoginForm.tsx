"use client";

import { useState } from "react";
import { setAuthCookie } from "@/app/new-blog/actions";
import { Eye, EyeClosed } from "lucide-react";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export default function LoginForm() {
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [passwordType, setPasswordType] = useState("password");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);
		console.log(ADMIN_PASSWORD);
		console.log(password);
		if (password === ADMIN_PASSWORD) {
			try {
				// Call server action to set the cookie
				await setAuthCookie(password);
				// No need to redirect here, the parent page will re-render
				// due to the cookie change and show the NewBlogClient.
				// You might want to force a refresh if it doesn't happen automatically:
				window.location.reload();
			} catch (err) {
				setError("Failed to set authentication. Please try again.");
				console.error(err);
			}
		} else {
			setError("Incorrect password.");
		}
		setIsLoading(false);
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
			<form
				onSubmit={handleSubmit}
				className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
				<h1 className="text-2xl font-bold mb-6 text-center">
					Admin Access Required
				</h1>
				<div className="mb-4 relative">
					<label
						htmlFor="password"
						className="block text-sm font-medium mb-2">
						Password:
					</label>
					<div className="relative">
						<input
							type={passwordType}
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className="w-full relative px-3 py-2 pr-[3em] bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<span
							className="absolute right-[8px] top-[10px]"
							onClick={(e) => {
								if (passwordType === "password") {
									setPasswordType("text");
								} else {
									setPasswordType("password");
								}
							}}>
							{passwordType==="password" ? <EyeClosed height={20} /> :<Eye height={20} />}
						</span>
					</div>
				</div>
				<button
					type="submit"
					disabled={isLoading}
					className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded-md transition duration-300">
					{isLoading ? "Verifying..." : "Login"}
				</button>
				{error && (
					<p className="mt-4 text-center text-sm text-red-500">{error}</p>
				)}
			</form>
		</div>
	);
}
