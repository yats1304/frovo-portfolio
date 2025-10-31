"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { JOBS_ROLES, JobsRole } from "@/constants/jobs";

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  position?: string;
  experience?: string;
  linkedin?: string;
}

export default function ApplyJobPage() {
  const searchParams = useSearchParams();
  const position = searchParams.get("position");
  const department = searchParams.get("department");
  const location = searchParams.get("location");
  const type = searchParams.get("type");

  // Find the job from JOBS_ROLES
  const jobData = JOBS_ROLES.find((job) => job.role === position);

  // Fallback if job not found
  const defaultJob: JobsRole = {
    role: position || "Position",
    department: department || "Department",
    location: location || "Location",
    employmentType: type || "Full time",
    description: "Job description not available",
    requirements: [],
    responsibilities: [],
    compensation: "Competitive salary",
  };

  const job = jobData || defaultJob;

  const [activeTab, setActiveTab] = useState<"overview" | "application">(
    "overview"
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: job.role,
    experience: "",
    linkedin: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedResume, setSelectedResume] = useState<File | null>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSubmitted]);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, position: job.role }));
  }, [job.role]);

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF or DOC file");
        return;
      }
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("File size must be less than 5MB");
        return;
      }
      setSelectedResume(file);
    }
  };

  const handleRemoveResume = () => {
    setSelectedResume(null);
    if (resumeInputRef.current) {
      resumeInputRef.current.value = "";
    }
  };

  const validateFullName = (name: string): string | undefined => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return "Phone number is required";
    return undefined;
  };

  const validateExperience = (exp: string): string | undefined => {
    if (!exp.trim()) return "Experience is required";
    return undefined;
  };

  const validateField = (name: keyof FormErrors, value: string) => {
    let error: string | undefined;
    switch (name) {
      case "fullName":
        error = validateFullName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phoneNumber":
        error = validatePhone(value);
        break;
      case "experience":
        error = validateExperience(value);
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      phoneNumber: validatePhone(formData.phoneNumber),
      experience: validateExperience(formData.experience),
    };
    setErrors(newErrors);
    if (!selectedResume) {
      alert("Please upload your resume");
      return false;
    }
    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleInputChange = (name: keyof FormErrors, value: string) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleBlur = (name: keyof FormErrors, value: string) => {
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#f8f7f4] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for applying for {job.role}. We&apos;ll review your
            application and get back to you soon!
          </p>
          <Button
            asChild
            className="h-12 px-8 bg-[#FF6B2B] hover:bg-[#ff5212] text-white rounded-full font-semibold"
          >
            <Link href="/jobs">Back to Jobs</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4]">
      <div className="lg:pt-22 lg:px-18 pt-22 px-6">
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-[#FF6B2B] transition-colors group mb-4"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium text-sm">Back to Openings</span>
        </Link>
      </div>
      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-4">
        {/* Job Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{job.role}</h1>
          <div className="flex items-center gap-3 text-gray-600">
            <span>{job.department}</span>
            <span>•</span>
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.employmentType}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-300">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 font-medium transition-colors ${
                activeTab === "overview"
                  ? "border-b-2 border-[#FF6B2B] text-[#FF6B2B]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("application")}
              className={`pb-4 font-medium transition-colors ${
                activeTab === "application"
                  ? "border-b-2 border-[#FF6B2B] text-[#FF6B2B]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Application
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="prose max-w-none">
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About the Role
                </h2>
                <p className="text-base leading-relaxed">{job.description}</p>
              </div>

              {job.requirements && job.requirements.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Requirements
                  </h3>
                  <ul className="space-y-2 list-disc pl-6">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-base">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.responsibilities && job.responsibilities.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Responsibilities
                  </h3>
                  <ul className="space-y-2 list-disc pl-6">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="text-base">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Compensation
                </h3>
                <p className="text-base">{job.compensation}</p>
              </div>

              {job.benefits && job.benefits.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Benefits
                  </h3>
                  <ul className="space-y-2 list-disc pl-6">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="text-base">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-6">
                <Button
                  onClick={() => {
                    setActiveTab("application");
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                  }}
                  className="w-full h-12 bg-[#FF7A59] hover:bg-[#ff6340] text-white rounded-full font-semibold text-base"
                >
                  Apply for this Job
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <Label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                onBlur={(e) => handleBlur("fullName", e.target.value)}
                className={`h-11 rounded-md border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } focus:border-gray-400 focus:ring-0`}
              />
              {errors.fullName && (
                <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={(e) => handleBlur("email", e.target.value)}
                className={`h-11 rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-gray-400 focus:ring-0`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <Label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                onBlur={(e) => handleBlur("phoneNumber", e.target.value)}
                className={`h-11 rounded-md border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } focus:border-gray-400 focus:ring-0`}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Position */}
            <div>
              <Label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Position Applying For
              </Label>
              <Input
                id="position"
                value={formData.position}
                readOnly
                className="h-11 rounded-md border border-gray-300 bg-gray-50 cursor-not-allowed focus:ring-0"
              />
            </div>

            {/* Years of Experience */}
            <div>
              <Label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Years of Experience <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Input
                id="experience"
                value={formData.experience}
                onChange={(e) =>
                  handleInputChange("experience", e.target.value)
                }
                onBlur={(e) => handleBlur("experience", e.target.value)}
                placeholder="e.g. 3"
                className={`h-11 rounded-md border ${
                  errors.experience ? "border-red-500" : "border-gray-300"
                } focus:border-gray-400 focus:ring-0`}
              />
              {errors.experience && (
                <p className="text-sm text-red-600 mt-1">{errors.experience}</p>
              )}
            </div>

            {/* Upload Resume */}
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume <span className="text-[#FF6B2B]">*</span>
              </Label>
              <input
                ref={resumeInputRef}
                type="file"
                onChange={handleResumeChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />

              {selectedResume ? (
                <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {selectedResume.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveResume}
                    className="text-red-600 hover:text-red-800"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => resumeInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-gray-300 rounded-md py-8 hover:border-gray-400 transition-colors"
                >
                  <div className="text-center">
                    <svg
                      className="w-10 h-10 text-gray-400 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-sm text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF or DOC (max 5MB)
                    </p>
                  </div>
                </button>
              )}
            </div>

            {/* LinkedIn/Portfolio */}
            <div>
              <Label
                htmlFor="linkedin"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                LinkedIn
              </Label>
              <Input
                id="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleInputChange("linkedin", e.target.value)}
                onBlur={(e) => handleBlur("linkedin", e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile"
                className={`h-11 rounded-md border ${
                  errors.linkedin ? "border-red-500" : "border-gray-300"
                } focus:border-gray-400 focus:ring-0`}
              />
              {errors.linkedin && (
                <p className="text-sm text-red-600 mt-1">{errors.linkedin}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#FF7A59] hover:bg-[#ff6340] text-white rounded-full font-semibold text-base"
              >
                {isSubmitting ? "Submitting..." : "Apply for this Job"}
              </Button>
            </div>
          </form>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>
            Questions? Email us at{" "}
            <a
              href="mailto:join@frovo.in"
              className="text-[#FF6B2B] hover:underline"
            >
              join@frovo.in
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
