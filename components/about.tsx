"use client";
import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have always been passionate about observing how software applications
        and services have drastically changed people's habits, as well as how
        they have influenced the lives of millions by providing them with
        unimaginable services. I started studying marketing because I realized
        that I wanted to enhance people's product and make it visible and
        profitable for the public. Later, I pursued a diploma in Product
        Management, which introduced me to the world of software products and
        services. Upon completing the diploma course, I understand the endless
        possibilities offered by software development. When I enrolled in a
        coding bootcamp, I realized that it was my opportunity to learn web
        development and contribute to the creation products and services that
        continue to impact people's lives.
      </p>
      <p>
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer. My core stack is{" "}
        <span className="font-semibold">
          JavaScript, HTML, CSS, TypeScript, ReactJS, Redux, NextJS, Tailwind
          CSS, NodeJS, Express.js, PostgreSQL, Sequelize
        </span>{" "}
      </p>
    </motion.section>
  );
};
