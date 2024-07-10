// pages/404.tsx
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you&apos;re looking for does not exist.
      </p>
      <Link href="/signin">
        <a className="mt-6 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition">
          Go to Login Page
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
