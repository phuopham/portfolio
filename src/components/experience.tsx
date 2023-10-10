import { motion } from 'framer-motion'
import { useSectionInView } from '../libs/hooks';

export type ExperiencesProps = {
  from?: string,
  company?: string,
  title?: string,
  description?: string
}

export default function Experience({ experiences }: { experiences: Array<ExperiencesProps> | undefined }) {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 mt-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
    >
      <h2 className="text-3xl font-medium mb-8 text-center">My experience</h2>
      <ol className="border-l-2 border-opacity-70 border-neutral-300 dark:border-neutral-500">
        {experiences?.map((it, key) => (
          <li key={key}>
            <div className="flex-start flex items-center pt-3">
              <p className="-ml-[5px] p-2 pe-4 bg-gray-300 dark:bg-gray-500 rounded-s-xl rounded-e-full text-sm">
                {it.from}
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <div className='flex justify-between'>
                <h4 className="mb-1.5 text-purple-500 text-xl font-semibold">
                  {it.title}
                </h4>
                <h4 className="mb-1.5 text-md font-bold">
                  {it?.company}
                </h4>
              </div>
              <p className="mb-3 text-start text-neutral-500 dark:text-neutral-300">
                {it.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}