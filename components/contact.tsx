"use client";
import React from "react";
import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
          console.log(formData);
          // console.log("running on client");
          // console.log(formData.get("senderEmail"));
          // console.log(formData.get("message"));
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
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
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
