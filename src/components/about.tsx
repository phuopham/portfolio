import { motion } from "framer-motion";
import { useSectionInView } from "../libs/hooks";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 mt-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <h2 className="m-auto py-3 px-12 rounded-full inline-block text-3xl font-medium text-purple-700   bg-slate-100/10 mb-8 text-center">About me</h2>

      <p className="mb-3">
        Hi there! I'm so glad you visited my portfolio. Let me tell you a bit about myself and my journey in IT. I started as an IT support engineer without an IT degree, but I didn't let that stop me from learning and growing. I worked hard and became an IT system engineer after 3 years. Then I joined Siemens, where I spent 5 years working on various projects and gaining valuable experience. However, when the Covid situation hit, I saw it as an opportunity to learn something new and challenge myself. That's how I discovered my passion for IT development. I enrolled in the DISM course at Aptech and graduated with flying colors. I had one year of experience as a freelance developer, worked on various projects and challenges. I enjoy collaborating with other developers and finding creative solutions to problems.
      </p>
      <p>
        Although I'm currently an IT engineer at Qualcomm, I'm always looking for new opportunities to pursue my dream of becoming an IT developer. I hope we can work together and create amazing things.
      </p>
    </motion.section>
  );
}


