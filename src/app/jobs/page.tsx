"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { JOBS_ROLES, JobsRole } from "@/constants/jobs";
import "aos/dist/aos.css";
import AOS from "aos";
import { Button } from "@/components/ui/button";

export default function JobsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  // Group jobs by department
  const jobsByDepartment = useMemo(() => {
    const grouped: Record<string, JobsRole[]> = {};
    JOBS_ROLES.forEach((role) => {
      if (!grouped[role.department]) {
        grouped[role.department] = [];
      }
      grouped[role.department].push(role);
    });
    return grouped;
  }, []);

  // Get unique departments
  const departments = Object.keys(jobsByDepartment);

  // Filter jobs
  const filteredJobs =
    selectedDepartment === "all"
      ? jobsByDepartment
      : { [selectedDepartment]: jobsByDepartment[selectedDepartment] };

  const totalJobs = JOBS_ROLES.length;

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFEDE5] via-white to-[#FFF8F3] -z-10" />

      {/* Header */}
      <div className="border-b bg-transparent z-10 mt-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight text-center">
            Open Positions <span className="text-[#FF6B2B]">({totalJobs})</span>
          </h1>

          {/* Filters */}
          <div className="w-full max-w-lg mx-auto">
            <div className="flex items-center gap-4 justify-center">
              <label
                htmlFor="department"
                className="text-base font-semibold text-gray-700 whitespace-nowrap"
              >
                Filters:
              </label>
              <div className="relative flex-1 max-w-sm">
                <select
                  id="department"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 border-2 border-[#FF6B2B] rounded-xl bg-white text-gray-700 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6B2B] focus:border-[#FF6B2B] shadow-sm hover:shadow-md transition-all duration-200 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23FF6B2B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="all">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="max-w-5xl mx-auto px-6 lg:px-45 py-12">
        {Object.entries(filteredJobs).map(([department, roles]) => (
          <div key={department} className="mb-16" data-aos="fade-up">
            {/* Department Header */}
            <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b">
              {department}
            </h3>

            {/* Jobs */}
            <div className="space-y-6">
              {roles.map((role) => (
                <a
                  key={role.role}
                  className="block group hover:bg-white/50 transition-colors rounded-lg p-6 -mx-6"
                >
                  <h4 className="text-xl font-semibold text-[#FF6B2B] group-hover:underline mb-3">
                    {role.role}
                  </h4>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <span>{role.department}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>{role.employmentType}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="bg-transparent border-t py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Don't see the right role?
          </h3>
          <p className="text-gray-600 mb-8">
            Send us your resume and let's talk
          </p>
          <Button
            size="sm"
            className="rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 px-6"
            style={{
              background: "white",
              color: "#FF6B2B",
              border: "2px solid #FF6B2B",
            }}
            asChild
          >
            <a
              href="mailto:join@frovo.in"
              className="flex items-center gap-2 py-4"
            >
              <Image
                src="/icons/email_icon2.svg"
                alt="Email"
                width={22}
                height={22}
              />
              join@frovo.in
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
