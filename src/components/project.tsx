import { useRef } from "react";
import { FaEye } from "react-icons/fa6"
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { ProjectsDataProps } from "./projects";
export default function Project({
  title,
  description,
  tags,
  link,
  repo,
  images
}: ProjectsDataProps
) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold">{title}
            </h3>
            <div className="flex flex-col gap-2">
              {link && <a href={link} className="bg-black/[0.7] p-2 text-[0.7rem] text-white rounded-full dark:text-white/70"><FaEye className="w-4 h-4" /></a>}
              {repo && <a href={repo} className="bg-black/[0.7] p-2 text-[0.7rem] text-white rounded-full dark:text-white/70"><FaCode className="w-4 h-4" /></a>}
            </div>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={images[0]}
          alt="Project I worked on"
          className="absolute hidden sm:block top-8 -right-4 w-[20rem] rounded-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-4"
        />
        <img
          src={images[1]}
          alt="Project I worked on"
          className="absolute hidden sm:block top-4 -right-[30rem] w-[30rem] rounded-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-right-[20rem]

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:-left-[20rem]

        group-even:right-[initial] group-even:-left-[30rem]"
        />
      </section>
    </motion.div>
  );
}
