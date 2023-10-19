import React from "react";
import Project from "./project";
import { useSectionInView } from "../libs/hooks";

export type ProjectsDataProps = {
  title: string,
  description: string,
  tags: Array<string>,
  link?: string,
  images: Array<string>,
  repo?: string
}

export default function Projects({ projectsData }: { projectsData: Array<ProjectsDataProps> | undefined }) {

  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mt-28 flex flex-col items-center">
      <h2 className="m-auto py-3 px-12 rounded-full text-3xl font-medium text-purple-700 dark:mix-blend-difference bg-slate-100/10 mb-8 text-center">My projects</h2>
      <div>
        {projectsData?.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
