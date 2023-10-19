import { useSectionInView } from '../libs/hooks';
import { motion } from 'framer-motion'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
    const { ref } = useSectionInView("Experience", 0.5);
    return (
        <motion.section
            id='contact' className='bg-purple-200 dark:bg-purple-950 w-full mt-28 px-4 py-14' ref={ref}>
            <div className='max-w-[45rem] m-auto'>
                <h2 className="text-3xl font-medium text-purple-700 dark:mix-blend-difference bg-slate-100/16 mb-8 text-center">Contact me</h2>
                <p className='text-center'>
                    Whether you have a question or just want to say hi, my inbox is always open and i'll try my best to get back to you. You could drop me an email at{" "}
                    <a href="mailto:thanhphuong89@gmail.com" className='underline hover:text-gray-500'>thanhphuong89@gmail.com</a> or send me message via following channels:
                </p>
                <p className='flex justify-center gap-6 mt-4 items-center'>
                    <a className='hover:scale-125' href="https://github.com/phuopham"><BsGithub className="w-8 h-8" /></a>
                    <a className='hover:scale-125' href="https://www.linkedin.com/in/phuong89/"><BsLinkedin className="w-8 h-8" /></a>
                    <a className='hover:scale-125 text-bold bg-gray-50 rounded-full px-2 py-1 font-semibold text-purple-950' href="https://resume.phuopham.com">My resume</a>
                </p>
            </div>
        </motion.section>
    )
}

export default Contact