'use client'
import { useParams } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";


const CaseStudyPage = () => {
  const { slug } = useParams();

  interface Post {
    id: string;
    title: string;
    image: string;
    content: string;
    description: string;
    slug: string;
    authorId: string;
    teamId: string;
    createdAt: string;
    updatedAt: string;
    published: boolean;
    author: {
      name: string;
      image: string;
    };
    tags: {
      id: string;
      name: string;
    }[];
  }

  const [post, setPost] = React.useState<Post | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const response = await fetch(`https://www.wisp.blog/api/v1/483de279-bd8c-4659-9b67-3be5fcc912fa/posts/${slug}`);
        const data = await response.json();
        setPost(data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return (
    <div className="relative bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-28 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    </div>
  );
  
  if (!post) return (
    <div className="relative bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-28 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Case study not found</h1>
        <Link href="/casestudies" className="text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to Case Studies
        </Link>
      </div>
    </div>
  );

  return (
    <div className="relative bg-[url('/images/contact_bg.png')] bg-cover bg-center bg-no-repeat min-h-screen py-16">
      {/* Back Button - Fixed Position */}
      <div className="fixed top-24 left-8 z-50">
        <Link
          href="/casestudies"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Header */}
        <header className="mb-12 space-y-6">
          {/* Tag */}
          {post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.75348 18.2011C7.72056 14.5765 3.94416 10.8143 0.305928 9.78524C-0.101976 9.65415 -0.101976 9.36576 0.305928 9.22812C3.95074 8.19252 7.72056 4.43686 8.76005 0.805723C8.8719 0.405905 9.14164 0.405905 9.25349 0.805723C10.2864 4.43686 14.0628 8.19252 17.6945 9.22812C18.1024 9.35921 18.1024 9.65415 17.6945 9.78524C14.0562 10.8143 10.2798 14.5765 9.24691 18.2011C9.13506 18.6075 8.86532 18.6075 8.75348 18.2011Z"
                  fill="#0094FF"
                />
              </svg>
              <span className="text-blue-400 text-sm uppercase font-semibold tracking-wider">
                {post.tags[0].name}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="flex items-center gap-4 text-gray-300">
            {post.author.image && (
              <div className="w-12 h-12 rounded-full relative overflow-hidden ring-2 ring-blue-400/30">
                <Image 
                  src={post.author.image} 
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-semibold text-white">{post.author.name}</span>
              <span className="text-sm text-gray-400">
                {new Date(post.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 w-full h-[400px] md:h-[550px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-12 p-6 bg-blue-500/10 border-l-4 border-blue-400 rounded-r-lg backdrop-blur-sm">
          <p className="text-xl text-gray-200 leading-relaxed italic">
            {post.description}
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <div 
            className="text-gray-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ 
              __html: post.content || post.description
            }} 
          />
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span 
                  key={tag.id} 
                  className="px-5 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium hover:border-blue-400/50 transition-colors"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyPage;