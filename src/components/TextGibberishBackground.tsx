"use client";

export default function TextGibberishBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none rounded-2xl overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 right-0 w-full h-[200%] bg-[url('/images/infiniteTextGibbirish.png')] bg-repeat-y bg-cover opacity-40 animate-scroll-vertical" />
        <div className="absolute top-[-100%] left-0 right-0 w-full h-[200%] bg-[url('/images/infiniteTextGibbirish.png')] bg-repeat-y bg-cover opacity-40 animate-scroll-vertical" />
      </div>
    </div>
  );
}
