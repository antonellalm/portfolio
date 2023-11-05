"use client";
import { About } from "@/components/about";
import Contact from "@/components/contact";
import { Intro } from "@/components/intro";
import Projects from "@/components/projects";
import { SectionDivider } from "@/components/section-divider";
import Skills from "@/components/skills";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
      <AnimatePresence mode="wait">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </AnimatePresence>
    </main>
  );
}
