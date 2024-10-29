import { motion } from 'framer-motion'
import { useSectionInView } from '../libs/hooks';
import { SectionTitle } from './ui/sectionTitle';

export type ExperiencesProps = {
  from?: string,
  company?: string,
  title?: string,
  description?: string
}

export const Experience = ({ experiences }: { experiences: Array<ExperiencesProps> | undefined }) => {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="mt-28 max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionTitle>My experience</SectionTitle>
      <ol className="border-l-2 border-opacity-70 border-slate-300/75 dark:border-slate-500/75">
        {experiences?.map((it, key) => (
          <li key={key}>
            <div className="flex-start flex items-center pt-3">
              <p className="-ml-[5px] p-2 pe-4 bg-slate-300/75 dark:bg-slate-500/75 rounded-s-xl rounded-e-full text-sm">
                {it.from}
              </p>
            </div>
            <div className="mb-5 ml-2 mt-1 px-5 py-2 rounded-xl bg-slate-50/75 dark:bg-slate-50/10">
              <div className='flex justify-between'>
                <h4 className="mb-1.5 capitalize text-purple-500 text-xl font-semibold">
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