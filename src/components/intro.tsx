import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../libs/hooks";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <img
            src='./pictures/profile.jpg'
            alt="Phuong portrait"
            width="300"
            height="300"
            className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi there</span>, I'm <span className="font-bold text-purple-500">Phuong Pham</span>, a <span className="font-bold"> full-stack developer</span> and <span className="font-bold"> IT engineer</span> from <span className="font-bold"> Vietnam</span>. I have a {" "}
        <span className="font-bold">decade</span> of experience in IT field, specializing in{" "}
        <span className="underline">React (Next.js), PHP (Laravel)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="mailto:thanhphuong89@gmail.com"
          className="group bg-purple-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:dark:bg-gray-600 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me <HiOutlineMail className="opacity-60 group-hover:translate-x-1 transition" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.google.com/file/d/1rse9PJRFI59d9mcdnxAKMNTa7OIaM9xi/view?usp=sharing"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 hover:dark:text-gray-50"
            href="https://www.linkedin.com/in/phuong89/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 hover:dark:text-gray-50"
            href="https://github.com/phuopham"
            target="_blank"
          >
            <FaGithubSquare />
          </a>

        </div>
      </motion.div>
    </section>
  );
}
