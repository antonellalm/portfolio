"use client";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  urlProject,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link href={urlProject} passHref>
      <motion.div
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className=" mb-2 sm:mb-8 last:mb-0"
      >
        <section
          ref={ref}
          className="group rounded-lg bg-gray-100 pb-3 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        >
          <div className="py-4 pl-3 px-5  sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 max-w-xs dark:text-white/70">
              {description}
            </p>
            <div className="flex flex-col sm:gap-[17rem] ">
              <ul className="flex flex-wrap mt-4 gap-2 mr-1 ">
                {tags.map((tag, index) => (
                  <li
                    className=" bg-black/[0.7] px-2 pr-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="sm:max-w-[50%]">
                {" "}
                <div></div>
              </div>
            </div>
          </div>

          <Image
            className={`absolute hidden sm:block top-8 -right-40   w-[28.25rem] rounded-t-lg shadow-2xl 
         transition
         group-hover:scale-[1.04]
          `}
            src={imageUrl}
            alt="imageProyect"
            quality={95}
          />
        </section>
      </motion.div>
    </Link>
  );
}

// si quiero que rote hacia la izquiera le agrego -rotate
// group-hover:-translate-x-3
//          group-hover:translate-y-3
//          group-hover:-rotate-2
