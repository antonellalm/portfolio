import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import viandAppImg from "@/public/viandApp.png";
import fooAppImg from "@/public/copia.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ViandApp",
    description:
      "I worked for a month on this application, which addresses a real need for a real customer of the meal service. This was the final project of my time at Henry, which I completed alongside 7 classmates. It was a wonderful and enriching experience where I learned a lot in a short period. We not only challenged ourselves and used numerous new technologies but also translated all the client's requirements into corresponding functionalities. We worked within the Scrum framework and used Jira.",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: viandAppImg,
  },
  {
    title: "FoodApp",
    description:
      "I developed this application while attending the Henry bootcamp. It was fascinating to learn so much while working on it. What I highlight the most about this project is the UI development. I exclusively used CSS, which allowed me to delve deeply into it and later enabled me to easily adapt when using any CSS library.",
    tags: [
      "React",
      "Redux",
      "JavaScript",
      "CSS",
      "NodeJS",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
    ],
    imageUrl: fooAppImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
