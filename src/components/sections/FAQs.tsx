"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS, FAQ_CONTACT } from "@/constants/faqs";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search
  const filteredFaqs = FAQS.filter(
    (faq: { question: string; answer: string }) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="floating-shape-1 absolute top-20 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        <div className="floating-shape-2 absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-[900px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground">
            Everything you need to know about Frovo
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-base text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-0 pl-[68px]">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10"
            >
              <p className="text-muted-foreground">
                No questions found matching your search.
              </p>
            </motion.div>
          )}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-base text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href={"mailto:support@frovo.in"}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-all"
          >
            Contact Support
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
