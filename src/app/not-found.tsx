'use client';

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

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
        <h1 className="text-4xl flex flex-col gap-4 font-light mb-4"><div className="text-7xl">404</div> Page Not Found&#33;</h1>
        <p className="text-gray-400 text-lg">Redirecting to the homepage...</p>
      </div>
    </div>
  );
}
