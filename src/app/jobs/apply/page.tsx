"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import JobApplicationForm from "@/components/sections/JobApplicationForm";

function ApplicationContent() {
  const searchParams = useSearchParams();
  const position = searchParams.get("position") || "";
  const department = searchParams.get("department") || "";
  const location = searchParams.get("location") || "";
  const type = searchParams.get("type") || "";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        {/* Back Button */}
        <div className="mb-4">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF6B2B] transition-colors group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-medium">Back to Jobs</span>
          </Link>
        </div>

        {/* Title  */}
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Apply for {position}
          </h1>
        </div>

        {/* Job Details */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-gray-600">
          <span>{department}</span>
          <span>•</span>
          <span>{location}</span>
          <span>•</span>
          <span>{type}</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
          <JobApplicationForm position={position} />
        </div>
      </div>
    </main>
  );
}

export default function ApplyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#FF6B2B] border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <ApplicationContent />
    </Suspense>
  );
}
