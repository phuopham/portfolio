import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";

const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Feedback",
    hash: "#feedback"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;


export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative w-[100vw]">
      <nav className="fixed top-0 sm:left-1/2 w-[100vw] sm:-translate-x-1/2 py-2 sm:py-0 rounded-none border border-slate-50 border-opacity-40 bg-slate-50 bg-opacity-80 shadow-lg shadow-slate-900/[0.03] backdrop-blur-[0.5rem] sm:top-2 sm:rounded-full sm:w-fit dark:bg-gray-50 dark:border-slate-900/40 dark:bg-opacity-75 ">
        <div className="text-center text-purple-600 font-bold">
          Phuong Pham
        </div>
        <ul className="flex flex-wrap w-[100vw] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 gap-2 px-5 pb-1">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-2 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-purple-800",
                  {
                    "text-purple-600 dark:text-purple-600":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now() + 2);
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-purple-200 rounded-full absolute inset-0 -z-10 dark:bg-slate-50"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="h-[6rem] sm:h-[7rem]"></div>
    </header>
  );
}
