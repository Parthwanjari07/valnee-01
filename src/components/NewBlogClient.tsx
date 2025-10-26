"use client";

import React from 'react'; // Import React explicitly
import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import Image from "next/image"; // Corrected import for Next.js Image component
import { UploadCloud, X } from 'lucide-react'; // Import icons
import { supabase } from '@/lib/supabase';

// Define the Blog type (adjust if necessary)
export type BlogInput = {
  imageFile?: File | null; // For the uploaded file
  imageStored: string; // Will store the Supabase path/URL after upload
  blogAboveTitle: string;
  blogTitle: string;
  blogDescription: string;
  slug: string;
  blogSlugTitle: string;
  blogSlugHeadings: string[];
  blogSlugContent: string[];
  blogSlugPublicationDate: string;
  blogSlugCategory: string;
  blogSlugReadingTime: string;
  blogSlugAuthorName: string;
  tags: string[];
};

export default function NewBlogClient() {
  const [formData, setFormData] = useState<Partial<BlogInput>>({
    imageFile: null,
    imageStored: "", // Initially empty
    blogAboveTitle: "",
    blogTitle: "",
    blogDescription: "",
    slug: "",
    blogSlugTitle: "",
    blogSlugHeadings: [],
    blogSlugContent: [],
    blogSlugPublicationDate: new Date().toISOString().split('T')[0], // Default to today
    blogSlugCategory: "",
    blogSlugReadingTime: "",
    blogSlugAuthorName: "",
    tags: [],
  });
  const [headingsInput, setHeadingsInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Handlers ---

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
       setFormData((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug and slug title from blog title
    if (name === "blogTitle") {
      const generatedSlug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      setFormData((prev) => ({
        ...prev,
        slug: generatedSlug,
        blogSlugTitle: value // Default slug title to blog title
      }));
    }
  };

  const handleImageChange = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      setFormData((prev) => ({ ...prev, imageFile: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      // Handle invalid file type if needed
      setFormData((prev) => ({ ...prev, imageFile: null }));
      setImagePreview(null);
      if (file !== null) { // Only alert if a file was actually selected/dropped
        alert("Please select a valid image file.");
      }
    }
  };

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
    handleImageChange(e.dataTransfer.files ? e.dataTransfer.files[0] : null);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

   const removeImage = () => {
    setFormData((prev) => ({ ...prev, imageFile: null }));
    setImagePreview(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  };

  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", {
        ...formData,
        blogSlugHeadings: headingsInput.split('@@').map(s => s.trim()).filter(s => s),
        blogSlugContent: contentInput.split('@@').map(s => s.trim()).filter(s => s), // Simple split for now
        tags: tagsInput.split('@@').map(s => s.trim()).filter(s => s),
    });
    // --- TODO: Add Supabase Upload Logic Here ---
    // 1. Upload formData.imageFile to Supabase Storage, get the public URL/path.
    // 2. Update formData.imageStored with the URL/path.
    // 3. Prepare the final blog object (parsing arrays as needed).
    // 4. Insert the blog object into your Supabase 'blogs' table.
    // 5. Handle loading states and success/error messages.

    e.preventDefault();
		setIsLoading(true); // General loading state
		setIsUploadingImage(false);

		// --- 1. Check if an image file was selected ---
		if (!formData.imageFile) {
			alert("Error: Please select an image to upload.");
			return;
		}

		let uploadedImagePath = ""; // Variable to store the path in Supabase

		try {
			// --- 2. Upload Image to Supabase Storage ---
			setIsUploadingImage(true);
			console.log("Uploading image...");

			const file = formData.imageFile;
			// Create a unique file path (e.g., using slug and timestamp)
			const fileExt = file.name.split(".").pop();
			const uniqueFileName = `${
				formData.slug || "blog"
			}-${Date.now()}.${fileExt}`;
			const filePath = `public/${uniqueFileName}`; // Store in a 'public' folder within the bucket

			const { data: uploadData, error: uploadError } =
				await supabase.storage
					.from("blog-images") // <<< YOUR BUCKET NAME HERE
					.upload(filePath, file, {
						cacheControl: "3600", // Optional: cache for 1 hour
						upsert: false, // Optional: don't overwrite existing files
					});

			if (uploadError) {
				console.error("Supabase Storage Error:", uploadError);
				throw new Error(`Image Upload Failed: ${uploadError.message}`);
			}

			console.log("Image uploaded successfully:", uploadData);
			uploadedImagePath = uploadData.path; // Store the path
			setIsUploadingImage(false);
			console.log("Image uploaded, saving blog post...");

			// --- 3. Get Public URL (Optional but common) ---
			// If your bucket is public, you can get the URL to store directly
			const { data: urlData } = supabase.storage
				.from("blog-images") // <<< YOUR BUCKET NAME HERE
				.getPublicUrl(uploadedImagePath);

			const publicUrl = urlData?.publicUrl || ""; // Fallback if URL retrieval fails
			if (!publicUrl) {
				console.warn(
					"Could not get public URL for image, storing path instead."
				);
				// Decide if you want to proceed without a public URL or throw an error
			}   
			// --- 4. Prepare Blog Data for Database ---
			const blogDataToInsert = {
				...formData,
				imageStored: publicUrl || uploadedImagePath, // Store URL if available, otherwise path
				imageFile: undefined, // Don't save the file object to the database
				blogSlugHeadings: headingsInput
					.split("@@")
					.map((s) => s.trim())
					.filter((s) => s),
				blogSlugContent: contentInput
					.split("@@")
					.map((s) => s.trim())
					.filter((s) => s), // Adjust splitting if needed
				tags: tagsInput
					.split("@@")
					.map((s) => s.trim())
					.filter((s) => s),
			};
			// Remove the imageFile property explicitly if necessary depending on your types
			delete blogDataToInsert.imageFile;

			// --- 5. Insert Blog Data into Supabase Table ---
			console.log("Saving blog post data...");
			const { data: insertData, error: insertError } = await supabase
				.from("blogs") // Use your actual table name
				.insert([blogDataToInsert])
				.select();

			if (insertError) {
				// Optional: Attempt to delete the uploaded image if DB insert fails
				// await supabase.storage.from('blog-images').remove([uploadedImagePath]);
				throw insertError;
			}

			alert("Blog uploaded successfully!");
			// Clear form
			setFormData({
				imageFile: null,
				imageStored: "",
			});
			setImagePreview(null);
			if (fileInputRef.current) fileInputRef.current.value = "";
			setHeadingsInput("");
			setContentInput("");
			setTagsInput("");
		} catch (error) {
			console.error("Error during blog upload:", error);
			alert(
				`Error: ${"Failed to upload blog."}`
			);
		} finally {
			setIsLoading(false);
			setIsUploadingImage(false);
		}
  };



  return (
		<div className="text-white relative min-h-screen pt-32 pb-16 px-4 md:px-8 lg:px-16">
			<h1 className="text-4xl font-bold mb-10 text-center font-[lora]">
				Create New Blog Post
			</h1>

			<form
				onSubmit={handleSubmit}
				className="max-w-5xl mx-auto bg-gray-800/60 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl space-y-8 border border-gray-700">
				{/* --- Image Upload --- */}
				<div>
					<label className="block text-lg font-semibold mb-3 text-gray-200">
						Blog Header Image
					</label>
					<div
						className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors duration-200 ease-in-out
              ${
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
							aria-label="Blog Header Image Upload" // Added aria-label
						/>
						{imagePreview ? (
							<div className="relative group">
								{/* Use next/image for preview if possible, adjust props as needed */}
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
									className="absolute top-2 right-2 bg-red-600/80 hover:bg-red-700 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800" // Improved focus style
									aria-label="Remove image">
									<X size={18} />
								</button>
							</div>
						) : (
							<div className="flex flex-col items-center justify-center space-y-3 text-gray-400">
								<UploadCloud size={48} className="text-gray-500" />
								<p className="font-semibold">Drag & drop an image here</p>
								<p className="text-sm">or click to select file</p>
								<p className="text-xs">(Max file size: 100KB)</p>
							</div>
						)}
					</div>
				</div>
				<div className="flex justify-center">
					<Image
						height={400}
						width={500}
						src="/blogs/blog-card-guide.png"
						alt="guide image card"
						className="object-contain rounded-2xl"
					/>
				</div>
				{/* --- Card Details --- */}
				<fieldset className="border border-gray-700 rounded-lg p-6 pt-3">
					<legend className="px-2 text-lg font-semibold text-gray-300">
						Card Preview Details
					</legend>
					<div className="space-y-5 mt-2">
						<InputField
							label="Card Title (Main Blog Title)"
							name="blogTitle"
							value={formData.blogTitle || ""}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Card Description (Short Summary)"
							name="blogDescription"
							value={formData.blogDescription || ""}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Tags (Use @@ to seperate each tag)"
							name="tags"
							value={tagsInput}
							onChange={(e) => setTagsInput(e.target.value)}
							required
						/>
					</div>
				</fieldset>

				<div className="flex justify-center">
					<Image
						height={400}
						width={800}
						src="/blogs/new-blog-guide-2.png"
						alt="guide image card"
						className="object-contain rounded-2xl"
					/>
				</div>

				{/* --- Full Page Details --- */}
				<fieldset className="border border-gray-700 rounded-lg p-6 pt-3">
					<legend className="px-2 text-lg font-semibold text-gray-300">
						Full Blog Post Details
					</legend>
					<div className="space-y-5 mt-2">
						<InputField
							label="Slug (URL Path, auto-generated: card title)"
							name="slug"
							value={formData.slug || ""}
							onChange={handleInputChange}
							required
							readOnly
						/>
						<InputField
							label="Blog Title (Blog Page Heading)"
							name="blogSlugTitle"
							value={formData.blogSlugTitle || ""}
							onChange={handleInputChange}
							required
						/>
						<TextAreaField
							label="Headings (Use @@ to seperate each Heading)"
							name="blogSlugHeadings"
							value={headingsInput}
							onChange={(e) => setHeadingsInput(e.target.value)}
							required
						/>
						<TextAreaField
							label="Content Sections (Use @@ to seperate each Content)"
							name="blogSlugContent"
							value={contentInput}
							onChange={(e) => setContentInput(e.target.value)}
							required
							rows={12}
							placeholder="Separate paragraphs/sections with @@"
						/>
						<InputField
							label="Publication Date"
							name="blogSlugPublicationDate"
							type="date"
							value={formData.blogSlugPublicationDate || ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Category"
							name="blogSlugCategory"
							value={formData.blogSlugCategory || ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Reading Time (e.g., 5 Min)"
							name="blogSlugReadingTime"
							value={formData.blogSlugReadingTime || ""}
							onChange={handleInputChange}
							required
						/>
						<InputField
							label="Author Name"
							name="blogSlugAuthorName"
							value={formData.blogSlugAuthorName || ""}
							onChange={handleInputChange}
							required
						/>
					</div>
				</fieldset>

				{/* --- Submit Button --- */}
				<div className="pt-6">
					<button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
						Create Blog Post
					</button>
				</div>
			</form>
		</div>
	);
}


// --- Reusable Input Field Component ---
interface InputFieldProps {
    label: string;
    name: string; // Use string for broader compatibility if needed
    type?: string;
    value: string | number | readonly string[] | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    readOnly?: boolean;
    placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", value, onChange, required = false, readOnly = false, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium mb-1.5 text-gray-300">{label}:</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      readOnly={readOnly}
      placeholder={placeholder}
      className={`w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${readOnly ? 'bg-gray-600 cursor-not-allowed opacity-70' : ''}`}
    />
  </div>
);

// --- Reusable Text Area Field Component ---
interface TextAreaFieldProps {
    label: string;
    name: string;
    value: string | number | readonly string[] | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    rows?: number;
    placeholder?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, value, onChange, required = true, rows = 4, placeholder = "" }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium mb-1.5 text-gray-300">{label}:</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
      placeholder={placeholder}
    />
  </div>
);