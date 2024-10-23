import { motion } from "framer-motion";
import { useSectionInView } from "../libs/hooks";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { SectionTitle } from "./ui/sectionTitle";

export const Contact = () => {
    const { ref } = useSectionInView("Contact");
    const [data, setData] = useState({ Name: '', Email: '', Message: '' })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default behavior of form submit
        e.preventDefault();

        // Validate the data fields
        if (!data.Name || !data.Email) {
            toast.error("Please fill all the fields");
            return;
        }

        // Use async/await and try/catch to send a post request to a RESTful API endpoint with the data as JSON
        try {
            const response = await fetch("https://83adbdb4b5754c63c46f2ebe4058e654.m.pipedream.net", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            // Clear the data state
            setData({
                Name: "",
                Email: "",
                Message: "",
            });
            toast.success("Form submitted successfully");
        } catch (error) {
            // Handle the error from the API
            console.error(error);
            toast.error("Form submission failed");
        }
    };
    return (
        <motion.section
            id="contact"
            ref={ref}
            className="my-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionTitle>Contact me</SectionTitle>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:thanhphuong89@gmail.com">
                    thanhphuong89@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col gap-2 dark:text-black relative"
                onSubmit={handleSubmit}
            >
                <input
                    className={`h-14 px-4 rounded-lg border-2  text-purple-600 bg-slate-100 focus:text-purple-700 border-purple-700 dark:focus:bg-slate-200 focus:placeholder:dark:text-purple-700 transition-all  dark:outline-none placeholder:text-purple-950 placeholder:dark:text-purple-300 ${data.Name == '' ? 'bg-gray-100  dark:bg-white/10' : ''}`}
                    name="Name"
                    type="text"
                    onChange={(e) => setData({ ...data, Name: e.target.value })}
                    required
                    maxLength={500}
                    placeholder="Your name"
                />
                <input
                    className={`h-14 px-4 rounded-lg border-2  text-purple-600 bg-slate-100 focus:text-purple-700 border-purple-700 dark:focus:bg-slate-200 focus:placeholder:dark:text-purple-700 transition-all  dark:outline-none placeholder:text-purple-950 placeholder:dark:text-purple-300 ${data.Email == '' ? 'bg-gray-100  dark:bg-white/10' : ''}`}
                    name="Email"
                    type="email"
                    onChange={(e) => setData({ ...data, Email: e.target.value })}
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className={`h-[12rem] p-4 pb-8 rounded-lg border-2 resize-none text-purple-600 bg-slate-100 focus:text-purple-700 border-purple-700 dark:focus:bg-slate-200 focus:placeholder:dark:text-purple-700 transition-all  dark:outline-none placeholder:text-purple-950 placeholder:dark:text-purple-300 ${data.Message == '' ? 'bg-gray-100  dark:bg-white/10' : ''}`}
                    name="Message"
                    onChange={(e) => setData({ ...data, Message: e.target.value })}
                    placeholder="Your message"
                    maxLength={2000}
                />
                <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-purple-800 opacity-90 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-purple-700 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 absolute bottom-3 lg:-end-36 end-5" type="submit">Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
            </form>
        </motion.section>
    );
}

export default Contact
