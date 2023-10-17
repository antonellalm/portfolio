"use client";
import React from "react";
import { SectionHeading } from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:antonellarios0098@gmail.com">
          antonellarios0098@gmail.com
        </a>
        or through this form.
      </p>
      <form
        action={async (formData) => {
          console.log("running on client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          type="email"
          className="h-14 px-4 rounded-lg borderBlack "
        />
        <textarea
          required
          maxLength={500}
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 "
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </button>
      </form>
    </motion.section>
  );
}
