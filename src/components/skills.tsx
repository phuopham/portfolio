import { useSectionInView } from "../libs/hooks";
import { motion } from "framer-motion";
import { SectionTitle } from "./ui/sectionTitle";

const skillsData = [
  "CCNA", "AWS SAA", "Windows Server", "Service-now", "Sipass",
  "HTML", "CSS", "Bootstrap4,5", "Javascript", "React", "Node.JS", "MySQL", "PHP", "WordPress", "IT Service Management"
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

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mt-28 max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionTitle>My skills</SectionTitle>
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
    </motion.section>
  );
}
