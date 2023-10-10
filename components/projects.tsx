import { SectionHeading } from "./section-heading";
import { projectsData } from "@/lib/data";
import Proyect from "./project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Proyects</SectionHeading>
      <div>
        {projectsData.map((proyect, index) => (
          <>
            <Proyect {...proyect} />
          </>
        ))}
      </div>
    </section>
  );
}
