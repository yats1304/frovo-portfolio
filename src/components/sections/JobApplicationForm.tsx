"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function JobApplicationForm({ position }: { position: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (email && !validateEmail(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    if (phone && !validatePhone(phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid 10-digit Indian mobile number",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for validation errors
    if (errors.email || errors.phone) {
      alert("Please fix the form errors before submitting");
      return;
    }

    if (!selectedFile) {
      alert("Please upload your resume");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      position: formData.get("position"),
      experience: formData.get("experience"),
      location: formData.get("location"),
      noticePeriod: formData.get("noticePeriod"),
      linkedinUrl: formData.get("linkedinUrl"),
      portfolioUrl: formData.get("portfolioUrl"),
      whyFrovo: formData.get("whyFrovo"),
      resume: selectedFile,
    };

    console.log("Form Data:", data);

    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  };

  if (success) {
    return (
      <div className="text-center py-12 bg-green-50 rounded-lg">
        <h3 className="text-2xl font-bold text-green-600 mb-4">
          Application Submitted!
        </h3>
        <p className="text-gray-700">
          Thank you for applying. We&apos;ll review your application and get
          back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Personal Information</h3>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name *"
          required
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition"
        />

        {/* Email with Validation */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            onChange={handleEmailChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone with Validation */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (10 digits) *"
            required
            maxLength={10}
            onChange={handlePhoneChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
              {errors.phone}
            </p>
          )}
        </div>

        <input
          type="text"
          name="location"
          placeholder="Current Location *"
          required
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition"
        />
      </div>

      {/* Professional Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Professional Information</h3>

        <input
          type="text"
          name="position"
          defaultValue={position}
          readOnly
          className="w-full px-4 py-3 border rounded-lg bg-gray-50 cursor-not-allowed"
        />

        <input
          type="text"
          name="experience"
          placeholder="Years of Experience *"
          required
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition"
        />

        <select
          name="noticePeriod"
          required
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition"
        >
          <option value="">Select Notice Period *</option>
          <option value="Immediate">Immediate</option>
          <option value="15 days">15 days</option>
          <option value="1 month">1 month</option>
          <option value="2 months">2 months</option>
          <option value="3 months">3 months</option>
        </select>

        <input
          type="url"
          name="linkedinUrl"
          placeholder="LinkedIn Profile (Optional)"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition"
        />

        <input
          type="url"
          name="portfolioUrl"
          placeholder="Portfolio/Website (Optional)"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition"
        />
      </div>

      {/* Resume Upload Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Resume/CV *</h3>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#FF6B2B] transition">
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            required
          />

          <label htmlFor="resume" className="cursor-pointer">
            <div className="flex flex-col items-center">
              {!selectedFile ? (
                <>
                  <svg
                    className="w-12 h-12 text-gray-400 mb-3"
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
                  <span className="text-base font-medium text-gray-700 mb-1">
                    Click to upload resume
                  </span>
                  <span className="text-sm text-gray-500">
                    PDF, DOC, or DOCX (Max 5MB)
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-green-700 font-medium">
                    {selectedFile.name}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedFile(null);
                    }}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </label>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Tell Us About Yourself</h3>

        <textarea
          name="whyFrovo"
          placeholder="Why do you want to work at Frovo? *"
          required
          rows={5}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] outline-none transition resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading || !selectedFile || !!errors.email || !!errors.phone}
        className="w-full bg-[#FF6B2B] hover:bg-[#FF5519] text-white py-6 px-24 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </Button>

      <p className="text-sm text-gray-500 text-center">* Required fields</p>
    </form>
  );
}
