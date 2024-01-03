import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { SectionTitle } from "./ui/sectionTitle";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { TestimonialCard } from "./ui/testimonialCard";
export const Testimonial = () => {
    const positions = ["pos0", "pos1", "pos2", "pos3", "pos4", "pos5"];
    const [reel, setReel] = useState(true)
    const propertyVariants = {
        pos0: { x: "-55%", y: '2em', zIndex: -2, opacity: '4%' },
        pos1: { x: "-50%", zIndex: 0 },
        pos2: { x: "0", y: '-2em', zIndex: -2, opacity: 0 },
        pos3: { x: "-45%", y: '-2em', zIndex: -2, opacity: 0 },
        pos4: { x: "-45%", y: '-2em', zIndex: -2, opacity: 0 },
        pos5: { x: "-55%", y: '2em', zIndex: -2, opacity: 0 },
    };
    const sliderData = [
        {
            index: 0,
            logo: "./logo/Dextermind-min.png",
            name: 'Robin Ka***',
            title: 'Project Manager @ Dextermind',
            testimonial: 'Thank you for your dedication. Usually we pay in 15 days, but just for your good support, we cleared it today. We are looking for our next colaboration.',
        },
        {
            index: 1,
            logo: './logo/Qualcomm-Logo.svg',
            name: 'Frances Ch***',
            title: 'Senior IT PM @ Qualcomm APAC',
            testimonial: 'Another year full of achievements that would not have been possible without you. We want to take this opportunity to say a big thank you for all support to the team through 2022. May you shine like a star in the upcomming year. Happy 2023',
        },
        {
            index: 2,
            logo: './logo/Siemens-logo.svg',
            name: 'Hong Phuong Ng***',
            title: 'CFO @ Siemens Limited Vietnam',
            testimonial: 'Congratulations on your 5-year anniversary with Siemens as an IT Operations Professional! Your dedication and hard work have contributed significantly to the success of the team. Your expertise in IT operations has strengthened the functioning of the systems with efficient solutions. Wishing you continued success in the future. 🎉',
        },
        {
            index: 3,
            logo: "./logo/Qualcomm-Logo.svg",
            name: 'Anson Wa***',
            title: 'Direct report - Manager @IT CORP TAIWAN',
            testimonial: 'Thank you for your support in the past year. Your support for local employees, sharing of experiences, and contributions to global projects have been invaluable. Your efforts have fostered a collaborative and productive environment. Keep up the great work! 🌟',
        },
        {
            index: 4,
            logo: './logo/web888.png',
            name: 'Toan Ngo V***',
            title: 'Founder @ trienkhaiweb.com - Web888.vn',
            testimonial: 'Congratulations on successfully completing your 3-month remote web development job! Your ability to adapt to remote work and still deliver high-quality results is truly commendable. Your dedication and skills have surely made a significant impact. Keep up the excellent work! 🎉',
        },
        {
            index: 5,
            logo: './logo/Qualcomm-Logo.svg',
            name: 'Manh Ph***',
            title: 'Senior Engineer @ Qualcomm QCE',
            testimonial: 'Your outstanding support in enhancing and repairing our team’s assets is deeply appreciated. Your efforts have significantly improved our operations and integrated the latest technologies, boosting our team’s efficiency and productivity. Thank you!',
        }
    ];

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5]);

    const nextProperty = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 6
            );
            return updatedIndexes;
        });
    };

    useEffect(() => {
        if (reel) {
            const myFunction = () => { nextProperty(); };
            const intervalId = setInterval(myFunction, 4000);
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [reel]);

    const prevProperty = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 5) % 6
            );

            return updatedIndexes;
        });
    };

    return (
        <>
            <SectionTitle className="relative">
                Feedback
            </SectionTitle>
            <div className="pt-5 h-96 sm:h-44" >

                {sliderData.map((item, key) => (
                    <motion.div
                        animate={positions[positionIndexes[item.index]]}
                        initial={{ x: 0 }}
                        variants={propertyVariants}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute', width: '100%', maxWidth: '768px' }}
                        key={key} >
                        <TestimonialCard data={item} />
                    </motion.div>
                ))}
            </div>
            <div className="relative w-full">
                <div className="absolute z-10 bottom-[21rem] sm:bottom-32 w-full px-4 flex justify-between md:justify-around gap-3">
                    <button className="rounded-full p-4 bg-purple-600/80"
                        onClick={() => {
                            if (reel) setReel(false)
                            prevProperty()
                        }}>
                        <FaArrowLeft />
                    </button>
                    <button className="rounded-full p-4 bg-purple-600/80"
                        onClick={() => {
                            if (reel) setReel(false)
                            nextProperty()
                        }}
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

        </>
    );
};
