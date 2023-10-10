import { useSectionInView } from '../libs/hooks';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Contact = () => {
    const { ref } = useSectionInView("Experience");
    return (
        <section id='contact' className='bg-purple-200 dark:bg-purple-950 w-full mt-28 px-4 py-14' ref={ref}>
            <div className='max-w-[45rem] m-auto'>
                <h2 className="text-3xl font-medium mb-8 text-center">Contact me</h2>
                <p className='text-center'>
                    Whether you have a question or just want to say hi, my inbox is always open and i'll try my best to get back to you. You could drop me an email at{" "}
                    <a href="mailto:thanhphuong89@gmail.com" className='underline hover:text-gray-500'>thanhphuong89@gmail.com</a> or send me message via following channels:
                </p>
                <p className='flex justify-center gap-2 mt-4'>
                    <a href="https://github.com/phuopham"><BsGithub className="w-6 h-6" /></a>
                    <a href="https://www.linkedin.com/in/phuong89/"><BsLinkedin className="w-6 h-6" /></a>
                    <a href="https://phuopham.github.io/resume/">My resume</a>
                </p>
            </div>
        </section>
    )
}

export default Contact