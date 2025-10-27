"use client";

import React from "react"; // Import React explicitly
import {
	useState,
	useRef,
	ChangeEvent,
	DragEvent,
	useEffect,
} from "react";
import Image from "next/image";
import { UploadCloud, X, Eye } from "lucide-react";
import { supabase } from "@/lib/supabase"; // Adjust import path
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlogCard from "./BlogCard"; // For Card preview
import BlogsSlugClient from "./BlogSlugClient"; // Import BlogSlugClient for Page preview

// --- 1. Updated Blog Input Type ---
// Matches the structure needed for both the form and BlogSlugClient preview
export type BlogInput = {
	imageFile?: File | null;
	imageStored: string;
	blogAboveTitle: string;
	blogTitle: string;
	blogDescription: string;
	slug: string;
	blogSlugTitle: string;
	markdowncontent: string; // Changed from optional arrays
	blogSlugPublicationDate: string;
	blogSlugCategory: string;
	blogSlugReadingTime: string;
	blogSlugAuthorName: string;
	is_active: boolean;
	tags: string[];
};

// Type for the data structure BlogSlugClient expects for its 'blog' prop
type BlogSlugData = Omit<BlogInput, "imageFile">;

export default function NewBlogClient() {
	const [formData, setFormData] = useState<Partial<BlogInput>>({
		imageFile: null,
		imageStored: "", // Will be set after upload for preview if needed
		blogAboveTitle: "",
		blogTitle: "",
		blogDescription: "",
		slug: "",
		blogSlugTitle: "",
		markdowncontent: "",
		blogSlugPublicationDate: new Date().toISOString().split("T")[0],
		blogSlugCategory: "",
		blogSlugReadingTime: "",
		blogSlugAuthorName: "",
		is_active: true,
		tags: [],
	});
	const [tagsInput, setTagsInput] = useState("");
	const [imagePreview, setImagePreview] = useState<string | null>(null); // For local preview
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [isUploadingImage, setIsUploadingImage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [isPreviewing, setIsPreviewing] = useState(false);

	// --- Handlers ---

	const handleInputChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value, type } = e.target;

		
			setFormData((prev) => ({ ...prev, [name]: value }));
		

		if (name === "blogTitle") {
			const generatedSlug = value
				.toLowerCase()
				.replace(/\s+/g, "-")
				.replace(/[^\w-]+/g, "");
			setFormData((prev) => ({
				...prev,
				slug: generatedSlug,
				blogSlugTitle: value, // Default full title to card title
			}));
		}
	};

	// --- Image Handlers (Keep as before) ---
	const handleImageChange = (file: File | null) => {
		if (file && file.type.startsWith("image/")) {
			if (file.size > 5 * 1024 * 1024) {
				// 5MB limit example
				alert("File size exceeds 5MB limit.");
				handleImageChange(null); // Reset
				return;
			}
			setFormData((prev) => ({
				...prev,
				imageFile: file,
				imageStored: "",
			})); // Reset stored path on new file
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		} else {
			// Clear if file is null or invalid
			setFormData((prev) => ({
				...prev,
				imageFile: null,
				imageStored: "",
			}));
			setImagePreview(null);
			if (file !== null) {
				// Only alert if an invalid file was selected/dropped
				alert("Please select a valid image file.");
			}
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
		}
	};
	// ... other image handlers (onFileSelect, onDragOver, etc. remain the same) ...
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
		if (!imagePreview) fileInputRef.current?.click();
	};
	const removeImage = () => {
		handleImageChange(null);
	};

	// --- Submit Handler (Updated) ---
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setIsUploadingImage(false);
		setStatusMessage("");
		setIsError(false);

		// --- Validation ---
		if (!formData.imageFile) {
			setStatusMessage("Error: Please select an image to upload.");
			setIsError(true);
			setIsLoading(false);
			return;
		}
		if (!formData.markdowncontent?.trim()) {
			setStatusMessage("Error: Blog content cannot be empty.");
			setIsError(true);
			setIsLoading(false);
			return;
		}
		// Add other required field checks if needed

		let uploadedImagePath = "";
		let publicUrl = "";

		try {
			// --- Upload Image ---
			setIsUploadingImage(true);
			setStatusMessage("Uploading image...");
			const file = formData.imageFile; // Already checked it exists
			const fileExt = file.name.split(".").pop();
			const uniqueFileName = `${
				formData.slug || "blog"
			}-${Date.now()}.${fileExt}`;
			const filePath = `public/${uniqueFileName}`;

			const { data: uploadData, error: uploadError } =
				await supabase.storage
					.from("blog-images") // YOUR BUCKET NAME
					.upload(filePath, file, { cacheControl: "3600", upsert: false });

			if (uploadError)
				throw new Error(`Image Upload Failed: ${uploadError.message}`);
			uploadedImagePath = uploadData.path;
			setIsUploadingImage(false);
			setStatusMessage("Image uploaded, getting URL...");

			// --- Get Public URL ---
			const { data: urlData } = supabase.storage
				.from("blog-images") // YOUR BUCKET NAME
				.getPublicUrl(uploadedImagePath);
			publicUrl = urlData?.publicUrl || uploadedImagePath; // Use path as fallback
			if (!urlData?.publicUrl)
				console.warn("Could not get public URL for image.");

			// --- Prepare Blog Data for DB (using BlogSlugData structure) ---
			// Define the type for the data being inserted, excluding optional/client-side fields
			type BlogInsertData = Omit<BlogInput, "imageFile">;

			const blogDataToInsert: BlogInsertData = {
				imageStored: publicUrl,
				blogAboveTitle: formData.blogAboveTitle || "",
				blogTitle: formData.blogTitle || "",
				blogDescription: formData.blogDescription || "",
				slug: formData.slug || "",
				blogSlugTitle: formData.blogSlugTitle || "",
				markdowncontent: formData.markdowncontent || "",
				blogSlugPublicationDate:
					formData.blogSlugPublicationDate ||
					new Date().toISOString().split("T")[0],
				blogSlugCategory: formData.blogSlugCategory || "",
				blogSlugReadingTime: formData.blogSlugReadingTime || "",
				blogSlugAuthorName: formData.blogSlugAuthorName || "",
				is_active: !!formData.is_active,
				tags: tagsInput
					.split(",")
					.map((s) => s.trim())
					.filter((s) => s),
			};

			// --- Insert Blog Data ---
			setStatusMessage("Saving blog post data...");
			const { data: insertData, error: insertError } = await supabase
				.from("blogs") // YOUR TABLE NAME
				.insert([blogDataToInsert])
				.select();

			if (insertError) throw insertError;

			setStatusMessage("Blog uploaded successfully!");
			setIsError(false);
			// --- Reset Form ---
			setFormData({
				imageFile: null,
				imageStored: "",
				blogAboveTitle: "",
				blogTitle: "",
				blogDescription: "",
				slug: "",
				blogSlugTitle: "",
				markdowncontent: "",
				blogSlugPublicationDate: new Date().toISOString().split("T")[0],
				blogSlugCategory: "",
				blogSlugReadingTime: "",
				blogSlugAuthorName: "",
				is_active: true,
				tags: [],
			});
			setImagePreview(null);
			if (fileInputRef.current) fileInputRef.current.value = "";
			setTagsInput("");
		} catch (error: any) {
			console.error("Error during blog upload:", error);
			setStatusMessage(
				`Error: ${error.message || "Failed to upload blog."}`
			);
			setIsError(true);
		} finally {
			setIsLoading(false);
			setIsUploadingImage(false);
		}
	};

	// --- Prepare Data for Preview Components ---
	// Ensure all properties expected by BlogSlugData are present
	const blogDataForPreview: BlogSlugData = {
		imageStored: imagePreview || "/placeholder.png", // Use preview or placeholder
		blogAboveTitle: formData.blogAboveTitle || "",
		blogTitle: formData.blogTitle || "Sample Title",
		blogDescription: formData.blogDescription || "Sample description...",
		slug: formData.slug || "sample-slug",
		blogSlugTitle:
			formData.blogSlugTitle || formData.blogTitle || "Sample Full Title",
		markdowncontent:
			formData.markdowncontent || "*No content entered yet.*",
		blogSlugPublicationDate:
			formData.blogSlugPublicationDate ||
			new Date().toISOString().split("T")[0],
		blogSlugCategory: formData.blogSlugCategory || "Category",
		blogSlugReadingTime: formData.blogSlugReadingTime || "X Min",
		blogSlugAuthorName: formData.blogSlugAuthorName || "Author",
		is_active: !!formData.is_active,
		tags: tagsInput
			.split(",")
			.map((s) => s.trim())
			.filter((s) => s),
	};

	const moreBlogsForPreview: any[] = []; // Empty array for preview context

	// --- JSX ---
	return (
		<div className="text-white relative min-h-screen pt-32 pb-16 px-4 md:px-8 lg:px-16">
			{/* ... H1 Title ... */}
			<h1 className="text-4xl font-bold mb-10 text-center font-[lora]">
				Create New Blog Post
			</h1>

			{/* --- Preview Button --- */}
			<div className="max-w-5xl mx-auto mb-6 flex justify-end">
				<button
					type="button"
					onClick={() => setIsPreviewing(true)}
					disabled={
						!formData.blogTitle &&
						!formData.markdowncontent &&
						!imagePreview
					}
					className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500 text-white text-sm rounded-md transition duration-200">
					<Eye size={16} /> Preview
				</button>
			</div>

			<form
				onSubmit={handleSubmit}
				className="max-w-5xl mx-auto bg-gray-800/60 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl space-y-8 border border-gray-700">
				{/* --- Image Upload --- */}
				<div>
					<label className="block text-lg font-semibold mb-3 text-gray-200">
						Blog Header Image*
					</label>
					<div
						className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ease-in-out ${
							isDragging
								? "border-blue-500 bg-gray-700/50"
								: "border-gray-600 hover:border-gray-500 bg-gray-700/30"
						} ${!imagePreview ? "cursor-pointer" : ""}`}
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
							aria-label="Blog Header Image Upload"
						/>
						{imagePreview ? (
							<div className="relative group">
								<Image
									src={imagePreview}
									alt="Preview"
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
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										removeImage();
									}}
									className="absolute top-2 right-2 bg-red-600/80 hover:bg-red-700 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
									aria-label="Remove image">
									<X size={18} />
								</button>
							</div>
						) : (
							<div className="flex flex-col items-center justify-center space-y-3 text-gray-400 pointer-events-none">
								<UploadCloud size={48} className="text-gray-500" />
								<p className="font-semibold">Drag & drop an image here</p>
								<p className="text-sm">or click to select file</p>
								<p className="text-xs">(Max file size: 5MB)</p>
							</div>
						)}
					</div>
					{!formData.imageFile && (
						<p className="text-red-500 text-xs mt-1">
							Header image is required.
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
							value={formData.blogAboveTitle || ""}
							onChange={handleInputChange}
						/>
						<InputField
							label="Card Title (Main Blog Title)*"
							name="blogTitle"
							value={formData.blogTitle || ""}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Card Description (Short Summary)*"
							name="blogDescription"
							value={formData.blogDescription || ""}
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
						<InputField
							label="Slug (URL Path, auto-generated)"
							name="slug"
							value={formData.slug || ""}
							onChange={handleInputChange}
							required
							readOnly
						/>
						<InputField
							label="Full Blog Title (SEO Title)*"
							name="blogSlugTitle"
							value={formData.blogSlugTitle || ""}
							onChange={handleInputChange}
							required
						/>
						{/* --- Markdown Content Input --- */}
						<TextAreaField
							label="Blog Content (Markdown)*"
							name="markdowncontent"
							value={formData.markdowncontent || ""}
							onChange={handleInputChange}
							required
							rows={20}
							placeholder="Write your blog post here using Markdown..."
						/>
						{/* --- Other Fields --- */}
						<InputField
							label="Publication Date*"
							name="blogSlugPublicationDate"
							type="date"
							value={formData.blogSlugPublicationDate || ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Category*"
							name="blogSlugCategory"
							value={formData.blogSlugCategory || ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Reading Time (e.g., 5 Min)*"
							name="blogSlugReadingTime"
							value={formData.blogSlugReadingTime || ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Author Name*"
							name="blogSlugAuthorName"
							value={formData.blogSlugAuthorName || ""}
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

				{/* --- Submit Button --- */}
				<div className="pt-6">
					<button
						type="submit"
						disabled={isLoading || isUploadingImage}
						className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
						{isUploadingImage
							? "Uploading Image..."
							: isLoading
							? "Saving Post..."
							: "Create Blog Post"}
					</button>
				</div>
			</form>

			{/* --- Preview Modal --- */}
			{isPreviewing && (
				<div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto">
					{" "}
					{/* Adjusted padding-top */}
					<div className="bg-gray-950 border border-gray-700 rounded-lg shadow-xl w-full max-w-6xl max-h-[95vh] overflow-y-auto relative my-8">
						{" "}
						{/* Added margin-y */}
						{/* Close Button */}
						<button
							onClick={() => setIsPreviewing(false)}
							className="sticky top-4 right-0 flex flex-end justify-end mx-4  text-gray-400 hover:text-white border border-white bg-gray-800 rounded-full p-1.5 z-[101]" // Made sticky
							aria-label="Close preview">
							<X size={24} className="text-white" />
						</button>
						{/* Use BlogSlugClient for the main preview */}
						{/* Ensure the 'blog' prop structure matches what BlogSlugClient expects */}
						<div className="pt-0">
							{" "}
							{/* Removed padding-top from inner div */}
							{/* --- 6. Pass Prepared Data to BlogSlugClient --- */}
							<BlogsSlugClient
								blog={blogDataForPreview}
								moreBlogs={moreBlogsForPreview} // Pass empty array or sample data
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
