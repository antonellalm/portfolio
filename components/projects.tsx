"use client";
import { SectionHeading } from "./section-heading";
import { projectsData } from "@/lib/data";
import Proyect from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  console.log(ref);
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
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
