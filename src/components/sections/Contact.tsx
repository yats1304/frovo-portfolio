"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "Consumer",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending email...");

      const response = await fetch(
        "https://email-service-eta.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            role: formData.userType,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok && data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", userType: "Consumer", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919035598876?text=Hello%20Frovo!", "_blank");
  };

  return (
    <>
      <section
        id="contact"
        className="relative py-8 md:py-20 overflow-hidden min-h-[800px] md:min-h-[700px]"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-56 h-56 bg-[#FF6B2B]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 mt-[-24px]">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-2">
              Get in{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF6B2B 0%, #FF8A4C 40%, #FFD700 70%, #9ACD32 100%)",
                }}
              >
                Touch
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Let&apos;s build the future of shopping together
            </p>
          </motion.div>

          {/* 2-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Contact Info Card */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100/50 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                <div className="space-y-4">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ">
                      <Image
                        src="/icons/location_icon.svg"
                        alt="Instagram"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Bangalore, India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ">
                      <Image
                        src="/icons/email_icon.svg"
                        alt="Instagram"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Email</p>
                      <a
                        href="mailto:contact@frovo.in"
                        className="text-sm hover:underline text-muted-foreground"
                      >
                        hello@frovo.in
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 pt-2">
                      <Image
                        src="/icons/phone_icon.svg"
                        alt="Instagram"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Phone</p>
                      <a
                        href="tel:+919035598876"
                        className="text-sm hover:underline text-muted-foreground"
                      >
                        +91-9035598876
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsApp}
                size="default"
                className="flex items-center gap-2 w-full py-5 bg-white border-2 border-[#25D366] text-[#25D366] 
                font-semibold rounded-lg shadow-sm hover:bg-gray-50 hover:scale-102 transition-all duration-200 focus:outline-none "
              >
                <Image
                  src="/icons/whatsapp_icon.svg"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="inline-block"
                />
                <span className="ml-2">Chat With Us on WhatsApp</span>
              </Button>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-100/50 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                    onFocus={(e) => {
                      e.target.style.boxShadow =
                        "0 0 0 2px rgba(255, 107, 43, 0.2)";
                      e.target.style.borderColor = "#FF6B2B";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "";
                      e.target.style.borderColor = errors.name
                        ? "#ef4444"
                        : "#e5e7eb";
                    }}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                    onFocus={(e) => {
                      e.target.style.boxShadow =
                        "0 0 0 2px rgba(255, 107, 43, 0.2)";
                      e.target.style.borderColor = "#FF6B2B";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "";
                      e.target.style.borderColor = errors.email
                        ? "#ef4444"
                        : "#e5e7eb";
                    }}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                {/* I am a... */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5">
                    I am a...
                  </label>
                  <select
                    value={formData.userType}
                    onChange={(e) =>
                      setFormData({ ...formData, userType: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                    onFocus={(e) => {
                      e.target.style.boxShadow =
                        "0 0 0 2px rgba(255, 107, 43, 0.2)";
                      e.target.style.borderColor = "#FF6B2B";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "";
                      e.target.style.borderColor = "#e5e7eb";
                    }}
                  >
                    <option value="Consumer">Consumer</option>
                    <option value="Shop Owner">Shop Owner</option>
                    <option value="Franchise">Franchise</option>
                    <option value="Brand">Brand</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    rows={3}
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none`}
                    onFocus={(e) => {
                      e.target.style.boxShadow =
                        "0 0 0 2px rgba(255, 107, 43, 0.2)";
                      e.target.style.borderColor = "#FF6B2B";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "";
                      e.target.style.borderColor = errors.message
                        ? "#ef4444"
                        : "#e5e7eb";
                    }}
                    placeholder="Tell us about your needs..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                {/* Submit Button */}

                <Button
                  type="submit"
                  size="default"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-white border-2 border-[#FF8A4C] text-[#FF6B2B] 
                  font-semibold text-base rounded-full shadow-none hover:bg-[#FFFAF6] hover:border-[#FF6B2B] hover:text-[#FF7C38] 
                  disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 py-3"
                  style={{
                    boxShadow: "0 4px 18px 0 rgba(255,107,43,0.09)",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#FF6B2B] border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Image
                        src="/icons/send_icon.svg"
                        alt="Send"
                        width={22}
                        height={22}
                        className="ml-1"
                      />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/919035598876?text=Hello%20Frovo!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-7 h-7 group-hover:scale-110 transition-transform"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
