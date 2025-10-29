"use client"; // Or wherever your login form component is

import { useState } from "react";
import { handleLogin } from "@/app/admin/actions"; // Adjust import path
import { Eye, EyeOff } from "lucide-react"; // Changed EyeClosed icon

export default function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			const result = await handleLogin(username, password);

			if (result.success) {
				// Login successful, reload the page
				// The parent server component will now see the auth cookie
				window.location.reload();
			} else {
				setError(
					result.error || "Login failed. Please check your credentials."
				);
			}
		} catch (err) {
			setError("An unexpected error occurred. Please try again.");
			console.error("Login Error:", err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
			<form
				onSubmit={handleSubmit}
				className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6" // Added space-y-6
			>
				<h1 className="text-2xl font-bold text-center">Admin Login</h1>

				{/* Username Field */}
				<div>
					<label
						htmlFor="username"
						className="block text-sm font-medium mb-2">
						Username:
					</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						autoComplete="username"
						className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Password Field */}
				<div>
					<label
						htmlFor="password"
						className="block text-sm font-medium mb-2">
						Password:
					</label>
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							autoComplete="current-password"
							className="w-full px-3 py-2 pr-10 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" // Added pr-10 for icon space
						/>
						<button
							type="button" // Prevent form submission
							className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-200"
							onClick={() => setShowPassword(!showPassword)}
							aria-label={
								showPassword ? "Hide password" : "Show password"
							}>
							{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
						</button>
					</div>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					disabled={isLoading}
					className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded-md transition duration-300">
					{isLoading ? "Verifying..." : "Login"}
				</button>

				{/* Error Message */}
				{error && (
					<p className="text-center text-sm text-red-500">{error}</p>
				)}
			</form>
		</div>
	);
}
