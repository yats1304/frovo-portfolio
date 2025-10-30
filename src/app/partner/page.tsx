"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface FormErrors {
  fullName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  organization?: string;
  collaborationType?: string;
  description?: string;
  location?: string;
}

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    organization: "",
    collaborationType: "",
    description: "",
    location: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const collaborationTypes = [
    "Business Partnership",
    "Franchise",
    "Product Sell to us as a Manufacturer",
    "Product Sell to us as a Distributor",
    "Marketing",
    "Influencer Partnership",
    "Brand Collaboration",
    "Ads Run Need",
    "Brand Promotion",
    "New Product Launch Collaboration",
  ];

  // Scroll to top when success screen shows
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSubmitted]);

  // File handling functions
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF, DOC, or PPT file");
        return;
      }

      // Validate file size (10MB max)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        alert("File size must be less than 10MB");
        return;
      }

      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  // Validation functions
  const validateFullName = (name: string): string | undefined => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(name)) return "Name should only contain letters";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email address is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return "Phone number is required";
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
    if (phone.replace(/\D/g, "").length < 10)
      return "Phone number must be at least 10 digits";
    return undefined;
  };

  const validateOrganization = (org: string): string | undefined => {
    if (!org.trim()) return "Organization name is required";
    if (org.trim().length < 2)
      return "Organization name must be at least 2 characters";
    return undefined;
  };

  const validateCollaborationType = (type: string): string | undefined => {
    if (!type) return "Please select a collaboration type";
    return undefined;
  };

  const validateDescription = (desc: string): string | undefined => {
    if (!desc.trim()) return "Description is required";
    if (desc.trim().length < 10)
      return "Description must be at least 10 characters";
    if (desc.trim().length > 500)
      return "Description must not exceed 500 characters";
    return undefined;
  };

  const validateLocation = (loc: string): string | undefined => {
    if (!loc.trim()) return "Location is required";
    if (loc.trim().length < 2) return "Location must be at least 2 characters";
    return undefined;
  };

  // Validate single field
  const validateField = (name: keyof FormErrors, value: string) => {
    let error: string | undefined;

    switch (name) {
      case "fullName":
        error = validateFullName(value);
        break;
      case "emailAddress":
        error = validateEmail(value);
        break;
      case "phoneNumber":
        error = validatePhone(value);
        break;
      case "organization":
        error = validateOrganization(value);
        break;
      case "collaborationType":
        error = validateCollaborationType(value);
        break;
      case "description":
        error = validateDescription(value);
        break;
      case "location":
        error = validateLocation(value);
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      fullName: validateFullName(formData.fullName),
      emailAddress: validateEmail(formData.emailAddress),
      phoneNumber: validatePhone(formData.phoneNumber),
      organization: validateOrganization(formData.organization),
      collaborationType: validateCollaborationType(formData.collaborationType),
      description: validateDescription(formData.description),
      location: validateLocation(formData.location),
    };

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleInputChange = (name: keyof FormErrors, value: string) => {
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleBlur = (name: keyof FormErrors, value: string) => {
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors).find(
        (key) => errors[key as keyof FormErrors]
      );
      if (firstError) {
        document
          .getElementById(firstError)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData to handle file upload
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("emailAddress", formData.emailAddress);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("organization", formData.organization);
      formDataToSend.append("collaborationType", formData.collaborationType);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("location", formData.location);

      if (selectedFile) {
        formDataToSend.append("file", selectedFile);
      }

      // Add your API call here
      // await fetch('/api/partner', {
      //   method: 'POST',
      //   body: formDataToSend,
      // });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      setSelectedFile(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <main className="relative min-h-screen pt-20 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Success Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Partner with Frovo
            </h1>
            <p className="text-base text-gray-600">
              We&apos;re excited to work with you
            </p>
          </div>

          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 sm:p-12 text-center border border-green-100">
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-white"
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

              {/* Success Message */}
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Partnership Submitted!
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Thank you for your interest in partnering with Frovo. We&apos;ll
                review your submission and get back to you soon.
              </p>

              {/* Back to Home Button */}
              <Button
                asChild
                className="h-12 px-8 font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8F5C 100%)",
                }}
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Form Screen
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      {/* Back Button */}
      <div className="lg:mx-20 lg:pt-4 py-4 px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF6B2B] transition-colors group font-medium"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Partner with <span className="text-[#FF6B2B]">Frovo</span>
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              We&apos;re excited to collaborate with like-minded individuals and
              businesses. Let&apos;s create something amazing together!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                onBlur={(e) => handleBlur("fullName", e.target.value)}
                placeholder="Enter your full name"
                className={`h-11 border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B] rounded-lg ${
                  errors.fullName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label
                htmlFor="emailAddress"
                className="text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Input
                id="emailAddress"
                type="email"
                value={formData.emailAddress}
                onChange={(e) =>
                  handleInputChange("emailAddress", e.target.value)
                }
                onBlur={(e) => handleBlur("emailAddress", e.target.value)}
                placeholder="your.email@example.com"
                className={`h-11 border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B] rounded-lg ${
                  errors.emailAddress
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : ""
                }`}
              />
              {errors.emailAddress && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.emailAddress}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-700"
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
                placeholder="+91 XXXXX XXXXX"
                className={`h-11 border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B] rounded-lg ${
                  errors.phoneNumber
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : ""
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <Label
                htmlFor="organization"
                className="text-sm font-medium text-gray-700"
              >
                Organization / Company Name{" "}
                <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Input
                id="organization"
                value={formData.organization}
                onChange={(e) =>
                  handleInputChange("organization", e.target.value)
                }
                onBlur={(e) => handleBlur("organization", e.target.value)}
                placeholder="Your company name"
                className={`h-11 border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B] rounded-lg ${
                  errors.organization
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : ""
                }`}
              />
              {errors.organization && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.organization}
                </p>
              )}
            </div>

            {/* Type of Collaboration */}
            <div className="space-y-2">
              <Label
                htmlFor="collaborationType"
                className="text-sm font-medium text-gray-700"
              >
                Type of Collaboration <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Select
                value={formData.collaborationType}
                onValueChange={(value) => {
                  handleInputChange("collaborationType", value);
                  validateField("collaborationType", value);
                }}
              >
                <SelectTrigger
                  className={`h-11 border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B] rounded-lg ${
                    errors.collaborationType ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select collaboration type" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {collaborationTypes.map((type) => (
                    <SelectItem
                      key={type}
                      value={type}
                      className="cursor-pointer"
                    >
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.collaborationType && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.collaborationType}
                </p>
              )}
            </div>

            {/* Brief Description */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Brief Description / Message{" "}
                <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                onBlur={(e) => handleBlur("description", e.target.value)}
                placeholder="Tell us a bit about your idea or proposal..."
                rows={5}
                maxLength={500}
                className={`border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B] rounded-lg resize-none ${
                  errors.description
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : ""
                }`}
              />
              <div className="flex justify-between items-center">
                <div>
                  {errors.description && (
                    <p className="text-sm text-red-600">{errors.description}</p>
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  {formData.description.length}/500
                </p>
              </div>
            </div>

            {/* Upload File Section */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Upload File{" "}
                <span className="text-gray-500 text-xs">(Optional)</span>
              </Label>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.ppt,.pptx"
                className="hidden"
              />

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#FF6B2B] transition-colors">
                {selectedFile ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FF6B2B]/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-[#FF6B2B]"
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
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleRemoveFile}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
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
                    </Button>
                  </div>
                ) : (
                  // Show upload prompt
                  <div className="flex flex-col items-center text-center">
                    <svg
                      className="w-10 h-10 text-[#FF6B2B] mb-3"
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
                    <p className="text-sm text-gray-600 mb-2">
                      Upload your presentation, pitch, or brochure
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      PDF, DOC, or PPT • Max 10 MB
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleChooseFile}
                      className="border-[#FF6B2B] text-[#FF6B2B] hover:bg-[#FF6B2B] hover:text-white font-medium"
                    >
                      Choose File
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label
                htmlFor="location"
                className="text-sm font-medium text-gray-700"
              >
                Location / City <span className="text-[#FF6B2B]">*</span>
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                onBlur={(e) => handleBlur("location", e.target.value)}
                placeholder="Enter your city or region"
                className={`h-11 border-gray-300 focus:border-[#FF6B2B] focus:ring-[#FF6B2B] rounded-lg ${
                  errors.location
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : ""
                }`}
              />
              {errors.location && (
                <p className="text-sm text-red-600 mt-1">{errors.location}</p>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 h-12 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8F5C 100%)",
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Request"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setFormData({
                    fullName: "",
                    emailAddress: "",
                    phoneNumber: "",
                    organization: "",
                    collaborationType: "",
                    description: "",
                    location: "",
                  });
                  setErrors({});
                  setSelectedFile(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
                className="h-12 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-full"
              >
                Clear Form
              </Button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Have questions? Email us at{" "}
              <a
                href="mailto:hello@frovo.in"
                className="text-[#FF6B2B] hover:underline font-semibold"
              >
                hello@frovo.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
