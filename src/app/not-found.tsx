'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#00020D] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4">This page is coming soon!</h1>
        <p className="text-gray-400 text-lg">Redirecting you to the homepage...</p>
      </div>
    </div>
  );
}
