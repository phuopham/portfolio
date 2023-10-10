import { useSectionInView } from "../libs/hooks";
import { motion } from "framer-motion";

const skillsData = [
  "HTML", "CSS", "Bootstrap4,5", "TailwindCSS", "Javascript", "Typescript", "React", "Next.JS", "Node.JS", "Prisma", "Redux", "Express.JS", "MySQL", "PHP", "Laravel7,8,10", "Java"
] as const

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mt-28 max-w-[53rem] scroll-mt-28 text-center"
    >
      <h2 className="text-3xl font-medium mb-8 text-center">My skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
