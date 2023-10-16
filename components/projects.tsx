"use client";
import { SectionHeading } from "./section-heading";
import { projectsData } from "@/lib/data";
import Proyect from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Proyects</SectionHeading>
      <div>
        {projectsData.map((proyect, id) => (
          <>
            <Proyect {...proyect} />
          </>
        ))}
      </div>
    </section>
  );
}
