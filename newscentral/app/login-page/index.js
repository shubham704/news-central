"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to NewsCentral after a short delay or immediately
    setTimeout(() => {
      router.push("/newscentral");
    }, 1000); // Adjust the delay as needed
  }, [router]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-gray-100 flex flex-col rounded-2xl shadow-lg max-w-sm w-full p-5 text-center">
        <h2 className="font-bold text-2xl text-[#002D74]">Login Successful</h2>
        <p className="text-xs mt-4 text-[#002D74]">
          You are being redirected to NewsCentral...
        </p>
      </div>
    </main>
  );
}
