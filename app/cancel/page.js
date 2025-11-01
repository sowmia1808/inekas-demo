"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CancelPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="max-w-md mx-auto p-6 bg-red-100 rounded-2xl mt-25 text-center">
      <h1 className="text-2xl font-bold text-red-800">❌ Payment Cancelled</h1>
      <p className="mt-4 text-red-700">
        Redirecting to home page in 4 seconds...
      </p>
    </main>
  );
}
