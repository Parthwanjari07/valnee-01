"use client";

import React from "react";
import {
	useState,
	useRef,
	ChangeEvent,
	DragEvent,
	useEffect,
} from "react";
import Image from "next/image";
import { UploadCloud, X, Eye, Trash2 } from "lucide-react"; // Added Trash icon
import { supabase } from "@/lib/supabase"; // Adjust import path
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlogCard from "./BlogCard";
import BlogsSlugClient from "./BlogSlugClient";
import { useRouter } from "next/navigation"; // For navigation

// Use the existing Blog type from supabase lib
import { type Blog } from "@/lib/supabase";
import Link from "next/link";

// Type specifically for the form state, making imageFile optional
// Ensure this Omit<> excludes all DB-generated fields correctly
type BlogFormData = Omit<Blog, "id" | "created_at"> & {
	imageFile?: File | null;
};

// Type for the props received from the server component
type EditBlogClientProps = {
	initialBlogData: Blog; // The blog data fetched on the server
};

export default function EditBlogClient({
	initialBlogData,
}: EditBlogClientProps) {
	const router = useRouter(); // For navigation after delete/update
	// Initialize state with all fields from initialBlogData or defaults
	const [formData, setFormData] = useState<Partial<BlogFormData>>({
		imageFile: null,
		imageStored: initialBlogData?.imageStored || "",
		blogAboveTitle: initialBlogData?.blogAboveTitle || "",
		blogTitle: initialBlogData?.blogTitle || "",
		blogDescription: initialBlogData?.blogDescription || "",
		slug: initialBlogData?.slug || "",
		blogSlugTitle: initialBlogData?.blogSlugTitle || "",
		markdowncontent: initialBlogData?.markdowncontent || "",
		blogSlugPublicationDate:
			initialBlogData?.blogSlugPublicationDate ||
			new Date().toISOString().split("T")[0],
		blogSlugCategory: initialBlogData?.blogSlugCategory || "",
		blogSlugReadingTime: initialBlogData?.blogSlugReadingTime || "",
		blogSlugAuthorName: initialBlogData?.blogSlugAuthorName || "",
		is_active: initialBlogData?.is_active ?? true, // Use ?? for boolean default
		tags: initialBlogData?.tags || [],
	});

	const [tagsInput, setTagsInput] = useState("");
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [isUploadingImage, setIsUploadingImage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [isPreviewing, setIsPreviewing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false); // State for delete operation

	// --- Populate Form on Initial Load ---
	useEffect(() => {
		if (initialBlogData) {
			// Update state with initial data
			setFormData({
				...initialBlogData,
				imageFile: null,
			});
			setImagePreview(initialBlogData.imageStored || null);
			setTagsInput((initialBlogData.tags || []).join(", "));
		}
	}, [initialBlogData]);

	// --- Handlers ---
	const handleInputChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value, type } = e.target;
		
			setFormData((prev) => ({ ...prev, [name]: value }));

		// Auto-update slug and slug title ONLY IF title is changed AND slug was based on old title
		if (name === "blogTitle") {
			const oldSlug = initialBlogData?.slug;
			const generatedOldSlug = initialBlogData?.blogTitle
				?.toLowerCase()
				.replace(/\s+/g, "-")
				.replace(/[^\w-]+/g, "");
			const currentSlug = formData.slug;

			const generatedNewSlug = value
				.toLowerCase()
				.replace(/\s+/g, "-")
				.replace(/[^\w-]+/g, "");

			// Only update slug if it hasn't been manually changed or matches the old auto-generated one
			if (
				!currentSlug ||
				currentSlug === oldSlug ||
				currentSlug === generatedOldSlug
			) {
				setFormData((prev) => ({
					...prev,
					slug: generatedNewSlug,
					blogSlugTitle: value, // Update slug title too
				}));
			} else {
				// Only update slug title if slug was manually set and title changes
					setFormData((prev) => ({ ...prev, blogTitle: value })); // Only update blog title
			}
		}
	};

	// --- Image Handlers (Refined logic) ---
	const handleImageChange = (file: File | null) => {
		setImagePreview(null); // Clear previous preview immediately
		setFormData((prev) => ({ ...prev, imageFile: null })); // Clear previous file selection

		if (file && file.type.startsWith("image/")) {
			if (file.size > 5 * 1024 * 1024) {
				alert("File size exceeds 5MB limit.");
				return;
			} // Simplified return

			setFormData((prev) => ({ ...prev, imageFile: file })); // Set the new file
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		} else {
			// If file is explicitly null (remove button) or invalid type
			setImagePreview(initialBlogData?.imageStored || null); // Revert preview to original
			if (file !== null) {
				// Only alert if an invalid file was attempted
				alert("Please select a valid image file.");
			}
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			} // Reset file input regardless
		}
	};
	// --- Other image handlers remain the same ---
	const onFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
		handleImageChange(e.target.files ? e.target.files[0] : null);
	};
	const onDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(true);
	};
	const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(false);
	};
	const onDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(false);
		handleImageChange(
			e.dataTransfer.files ? e.dataTransfer.files[0] : null
		);
	};
	const triggerFileInput = () => {
		fileInputRef.current?.click();
	};
	const removeImage = () => {
		handleImageChange(null);
	};

	// --- Submit Handler (UPDATED FOR UPDATE LOGIC) ---
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setIsUploadingImage(false);
		setStatusMessage("");
		setIsError(false);

		// --- Basic Validation ---
		if (!formData.markdowncontent?.trim()) {
			setStatusMessage("Error: Blog content cannot be empty.");
			setIsError(true);
			setIsLoading(false);
			return;
		}
		if (!formData.blogTitle?.trim()) {
			setStatusMessage("Error: Blog title cannot be empty.");
			setIsError(true);
			setIsLoading(false);
			return;
		}
		// Add other required field checks...

		// Use initial image URL unless a new file is uploaded
		let finalImageStoredUrl = initialBlogData.imageStored || "";
		let newImagePath = ""; // To track if we need to delete the old one

		try {
			// --- Upload NEW Image (if selected) ---
			if (formData.imageFile) {
				setIsUploadingImage(true);
				setStatusMessage("Uploading new image...");
				const file = formData.imageFile;
				const fileExt = file.name.split(".").pop();
				const slugForFile =
					formData.slug || initialBlogData.slug || "blog";
				const uniqueFileName = `${slugForFile}-${Date.now()}.${fileExt}`;
				const filePath = `public/${uniqueFileName}`;

				const { data: uploadData, error: uploadError } =
					await supabase.storage
						.from("blog-images") // YOUR BUCKET NAME
						.upload(filePath, file, {
							cacheControl: "3600",
							upsert: false,
						});

				if (uploadError)
					throw new Error(`Image Upload Failed: ${uploadError.message}`);
				newImagePath = uploadData.path; // Store the path of the newly uploaded image

				// --- Get Public URL for the NEW image ---
				const { data: urlData } = supabase.storage
					.from("blog-images")
					.getPublicUrl(newImagePath); // Use the new path

				finalImageStoredUrl = urlData?.publicUrl || newImagePath; // Update the URL to save
				setIsUploadingImage(false);
				setStatusMessage("Image updated, saving changes...");
			} else {
				setStatusMessage("Saving changes...");
			}

			// --- Prepare Blog Data for UPDATE ---
			const blogDataToUpdate = {
				imageStored: finalImageStoredUrl, // Use final URL
				blogAboveTitle: formData.blogAboveTitle || "",
				blogTitle: formData.blogTitle || "",
				blogDescription: formData.blogDescription || "",
				slug: formData.slug || initialBlogData.slug,
				blogSlugTitle: formData.blogSlugTitle || "",
				markdowncontent: formData.markdowncontent || "",
				blogSlugPublicationDate: formData.blogSlugPublicationDate || "",
				blogSlugCategory: formData.blogSlugCategory || "",
				blogSlugReadingTime: formData.blogSlugReadingTime || "",
				blogSlugAuthorName: formData.blogSlugAuthorName || "",
				is_active: !!formData.is_active,
				tags: tagsInput
					.split(",")
					.map((s) => s.trim())
					.filter((s) => s),
			};

			// --- Update Blog Data in Supabase Table ---
			const { data: updateData, error: updateError } = await supabase
				.from("blogs")
				.update(blogDataToUpdate)
				.eq("id", initialBlogData.id) // Use the original blog's ID
				.select();

			if (updateError) throw updateError;

			// --- Delete OLD image if a new one was successfully uploaded AND saved ---
			if (
				newImagePath &&
				initialBlogData.imageStored &&
				finalImageStoredUrl !== initialBlogData.imageStored
			) {
				try {
					const oldUrlParts = initialBlogData.imageStored.split("/");
					const oldFilePath = oldUrlParts
						.slice(oldUrlParts.indexOf("public"))
						.join("/");
					if (oldFilePath) {
						console.log("Attempting to delete old image:", oldFilePath);
						await supabase.storage
							.from("blog-images")
							.remove([oldFilePath]);
					}
				} catch (deleteError) {
					console.warn(
						"Failed to delete old image from storage:",
						deleteError
					);
				}
			}

			setStatusMessage("Blog updated successfully!");
			setIsError(false);
			// Update formData state with the newly saved data (especially imageStored)
			setFormData((prev) => ({
				...prev,
				...blogDataToUpdate, // Update with saved data
				imageFile: null, // Clear the file input state
				imageStored: finalImageStoredUrl, // Ensure imageStored is updated
			}));
			setImagePreview(finalImageStoredUrl); // Update preview to saved image
			if (fileInputRef.current) fileInputRef.current.value = ""; // Clear file input element
		} catch (error) {
			console.error("Error during blog update:", error);
			setStatusMessage(
				`Error: ${"Failed to update blog."}`
			);
			setIsError(true);
			// Revert image preview if upload failed but DB update was attempted
			if (!newImagePath && formData.imageFile) {
				setImagePreview(initialBlogData.imageStored || null);
			}
		} finally {
			setIsLoading(false);
			setIsUploadingImage(false);
		}
	};

	// --- Delete Handler (Refined Image Path Extraction) ---
	const handleDelete = async () => {
		if (
			!window.confirm(
				`Are you sure you want to delete the blog post "${
					initialBlogData?.blogTitle || "this post"
				}"? This cannot be undone.`
			)
		) {
			return;
		}
		setIsDeleting(true);
		setStatusMessage("Deleting blog post...");
		setIsError(false);

		try {
			// 1. Delete DB row
			const { error: deleteDbError } = await supabase
				.from("blogs")
				.delete()
				.eq("id", initialBlogData.id);
			if (deleteDbError) throw deleteDbError;

			// 2. Delete image from storage
			if (initialBlogData?.imageStored) {
				const urlString = initialBlogData.imageStored;
				// Try to extract path after bucket name + '/public/'
				const pathPrefix = `/public/`;
				const pathIndex = urlString.indexOf(pathPrefix);
				if (pathIndex !== -1) {
					const filePath = urlString.substring(pathIndex + 1); // Get 'public/...'
					if (filePath) {
						console.log(
							"Attempting to delete image from storage:",
							filePath
						);
						const { error: deleteStorageError } = await supabase.storage
							.from("blog-images") // YOUR BUCKET NAME
							.remove([filePath]);
						if (deleteStorageError) {
							console.warn(
								"Failed to delete image from storage:",
								deleteStorageError.message
							);
						}
					}
				} else {
					console.warn(
						"Could not extract file path from imageStored URL:",
						urlString
					);
				}
			}

			setStatusMessage("Blog post deleted successfully.");
			setIsError(false);
			router.push("/admin"); // Redirect
		} catch (error) {
			console.error("Error deleting blog post:", error);
			setStatusMessage(
				`Error: ${"Failed to delete blog post."}`
			);
			setIsError(true);
		} finally {
			setIsDeleting(false);
		}
	};
	// --- Prepare Data for Preview (Remains largely the same) ---
	const blogDataForPreview = {
		/* ... as before ... */
		imageStored:
			imagePreview || initialBlogData.imageStored || "/placeholder.png",
		blogAboveTitle:
			formData.blogAboveTitle ?? initialBlogData.blogAboveTitle ?? "",
		blogTitle:
			formData.blogTitle ?? initialBlogData.blogTitle ?? "Sample Title",
		blogDescription:
			formData.blogDescription ??
			initialBlogData.blogDescription ??
			"Sample description...",
		slug: formData.slug ?? initialBlogData.slug ?? "sample-slug",
		blogSlugTitle:
			formData.blogSlugTitle ??
			initialBlogData.blogSlugTitle ??
			"Sample Full Title",
		markdowncontent:
			formData.markdowncontent ??
			initialBlogData.markdowncontent ??
			"*No content.*",
		blogSlugPublicationDate:
			formData.blogSlugPublicationDate ??
			initialBlogData.blogSlugPublicationDate ??
			"",
		blogSlugCategory:
			formData.blogSlugCategory ??
			initialBlogData.blogSlugCategory ??
			"Category",
		blogSlugReadingTime:
			formData.blogSlugReadingTime ??
			initialBlogData.blogSlugReadingTime ??
			"X Min",
		blogSlugAuthorName:
			formData.blogSlugAuthorName ??
			initialBlogData.blogSlugAuthorName ??
			"Author",
		is_active: formData.is_active ?? initialBlogData.is_active ?? true,
		tags:
			tagsInput
				.split(",")
				.map((s) => s.trim())
				.filter((s) => s).length > 0
				? tagsInput
						.split(",")
						.map((s) => s.trim())
						.filter((s) => s)
				: initialBlogData.tags || [],
	};
	const moreBlogsForPreview: [] = [];

	// --- JSX ---
	return (
		<div className="text-white relative min-h-screen pt-32 pb-16 px-4 md:px-8 lg:px-16">
			<h1 className="text-4xl font-bold mb-10 text-center font-[lora]">
				Edit Blog Post
			</h1>

			{/* --- Preview Button --- */}
			<div className="max-w-5xl mx-auto mb-6 flex justify-between">
        <Link href={"/admin"}>
				<button
					type="button"
					className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 hover:cursor-pointer text-white text-sm rounded-md transition duration-200">
					Back To Admin Dashboard
				</button></Link>
				<button
					type="button"
					onClick={() => setIsPreviewing(true)}
					className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition duration-200">
					<Eye size={16} /> Preview
				</button>
			</div>

			<form
				onSubmit={handleSubmit}
				className="max-w-5xl mx-auto bg-gray-800/60 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl space-y-8 border border-gray-700">
				{/* --- Image Upload --- */}
				<div>
					<label className="block text-lg font-semibold mb-3 text-gray-200">
						Blog Header Image
					</label>
					<div
						className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ease-in-out cursor-pointer ${
							isDragging
								? "border-blue-500 bg-gray-700/50"
								: "border-gray-600 hover:border-gray-500 bg-gray-700/30"
						}`}
						onDragOver={onDragOver}
						onDragLeave={onDragLeave}
						onDrop={onDrop}
						onClick={triggerFileInput}>
						<input
							type="file"
							ref={fileInputRef}
							onChange={onFileSelect}
							accept="image/*"
							className="hidden"
							aria-label="Change Blog Header Image"
						/>
						{imagePreview ? ( // Show preview (new or original)
							<div className="relative group">
								<Image
									src={imagePreview}
									alt="Current/Preview"
									width={500}
									height={300}
									style={{
										objectFit: "contain",
										maxHeight: "15rem",
										width: "auto",
										margin: "0 auto",
									}}
									className="rounded-md"
								/>
								{/* Button now reverts/clears new selection */}
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										removeImage();
									}}
									className="absolute top-2 right-2 bg-yellow-600/80 hover:bg-yellow-700 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800"
									aria-label="Clear selection / Revert image">
									<X size={18} />
								</button>
								<p className="text-xs text-gray-400 mt-2">
									Click or drag/drop to change image
								</p>
							</div>
						) : (
							// Show placeholder only if NO image exists
							<div className="flex flex-col items-center justify-center space-y-3 text-gray-400 pointer-events-none">
								<UploadCloud size={48} className="text-gray-500" />
								<p className="font-semibold">Drag & drop an image here</p>
								<p className="text-sm">or click to select file</p>
								<p className="text-xs">(Max file size: 5MB)</p>
							</div>
						)}
					</div>
					{/* Show current stored image path if no preview */}
					{!imagePreview && initialBlogData?.imageStored && (
						<p className="text-xs text-gray-400 mt-2">
							Current image: {initialBlogData.imageStored.split("/").pop()}
						</p>
					)}
				</div>

				{/* --- Card Details --- */}
				<fieldset className="border border-gray-700 rounded-lg p-6 pt-3">
					<legend className="px-2 text-lg font-semibold text-gray-300">
						Card Preview Details
					</legend>
					<div className="space-y-5 mt-2">
						<InputField
							label="Card Above Title"
							name="blogAboveTitle"
							value={formData.blogAboveTitle ?? ""}
							onChange={handleInputChange}
						/>
						<InputField
							label="Card Title (Main Blog Title)*"
							name="blogTitle"
							value={formData.blogTitle ?? ""}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Card Description (Short Summary)*"
							name="blogDescription"
							value={formData.blogDescription ?? ""}
							onChange={handleInputChange}
							required
						/>
					</div>
				</fieldset>

				{/* --- Full Page Details --- */}
				<fieldset className="border border-gray-700 rounded-lg p-6 pt-3">
					<legend className="px-2 text-lg font-semibold text-gray-300">
						Full Blog Post Details
					</legend>
					<div className="space-y-5 mt-2">
						{/* Allow slug editing, but maybe add a warning? */}
						<InputField
							label="Slug (URL Path, auto-updated)"
							name="slug"
							value={formData.slug ?? ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Full Blog Title (SEO Title)*"
							name="blogSlugTitle"
							value={formData.blogSlugTitle ?? ""}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Blog Content (Markdown)*"
							name="markdowncontent"
							value={formData.markdowncontent ?? ""}
							onChange={handleInputChange}
							required
							rows={20}
							placeholder="Write Markdown..."
						/>
						<InputField
							label="Publication Date*"
							name="blogSlugPublicationDate"
							type="date"
							value={formData.blogSlugPublicationDate ?? ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Category*"
							name="blogSlugCategory"
							value={formData.blogSlugCategory ?? ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Reading Time (e.g., 5 Min)*"
							name="blogSlugReadingTime"
							value={formData.blogSlugReadingTime ?? ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Author Name*"
							name="blogSlugAuthorName"
							value={formData.blogSlugAuthorName ?? ""}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Tags (comma-separated)*"
							name="tags"
							value={tagsInput}
							onChange={(e) => setTagsInput(e.target.value)}
							required
							placeholder="AI, Startups"
							rows={2}
						/>
					</div>
				</fieldset>

				{/* --- Status Message --- */}
				{/* FIX: Correctly render the status message */}
				{statusMessage && (
					<p
						className={`text-center text-sm ${
							isError ? "text-red-500" : "text-green-500"
						}`}>
						{statusMessage}
					</p>
				)}

				{/* --- Action Buttons --- */}
				<div className="pt-6 flex flex-col sm:flex-row gap-4">
					{/* Update Button */}
					<button
						type="submit"
						disabled={isLoading || isUploadingImage || isDeleting}
						className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800">
						{isUploadingImage
							? "Uploading Image..."
							: isLoading
							? "Saving Changes..."
							: "Update Blog Post"}
					</button>
					{/* Delete Button */}
					<button
						type="button"
						onClick={handleDelete}
						disabled={isLoading || isUploadingImage || isDeleting}
						className="flex-none bg-red-600 hover:bg-red-700 disabled:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center gap-2">
						<Trash2 size={18} /> {isDeleting ? "Deleting..." : "Delete"}
					</button>
				</div>
			</form>

			{/* --- Preview Modal --- */}
			{isPreviewing && (
				<div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto">
					<div className="bg-gray-950 border border-gray-700 rounded-lg shadow-xl w-full max-w-6xl max-h-[95vh] overflow-y-auto relative my-8">
						<button
							onClick={() => setIsPreviewing(false)}
							className="sticky top-4 right-4 ml-auto mr-4 mt-4 text-gray-400 hover:text-white bg-gray-800 rounded-full p-1.5 z-[101]"
							aria-label="Close preview">
							{" "}
							<X size={24} />{" "}
						</button>
						<div className="pt-0">
							<BlogsSlugClient
								blog={blogDataForPreview}
								moreBlogs={moreBlogsForPreview}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

// --- Reusable Input Field Component ---
interface InputFieldProps {
	label: string;
	name: string;
	type?: string;
	value: string | number | readonly string[] | undefined;
	onChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	required?: boolean;
	readOnly?: boolean;
	placeholder?: string;
}

// Corrected: Use function declaration
function InputField({
	label,
	name,
	type = "text",
	value,
	onChange,
	required = false,
	readOnly = false,
	placeholder,
}: InputFieldProps) {
	return (
		<div>
			<label
				htmlFor={name}
				className="block text-sm font-medium mb-1.5 text-gray-300">
				{label}:
			</label>
			<input
				type={type}
				id={name}
				name={name}
				value={value ?? ""} // Ensure value is not undefined
				onChange={onChange}
				required={required}
				readOnly={readOnly}
				placeholder={placeholder}
				className={`w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
					readOnly ? "bg-gray-600 cursor-not-allowed opacity-70" : ""
				}`}
			/>
		</div>
	);
}

// --- Reusable Text Area Field Component ---
interface TextAreaFieldProps {
	label: string;
	name: string;
	value: string | number | readonly string[] | undefined;
	onChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	required?: boolean;
	rows?: number;
	placeholder?: string;
}

// Corrected: Use function declaration
function TextAreaField({
	label,
	name,
	value,
	onChange,
	required = true,
	rows = 4,
	placeholder = "",
}: TextAreaFieldProps) {
	return (
		<div>
			<label
				htmlFor={name}
				className="block text-sm font-medium mb-1.5 text-gray-300">
				{label}:
			</label>
			<textarea
				id={name}
				name={name}
				value={value ?? ""} // Ensure value is not undefined
				onChange={onChange}
				required={required}
				rows={rows}
				className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
				placeholder={placeholder}
			/>
		</div>
	);
}
