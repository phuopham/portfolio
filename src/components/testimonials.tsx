import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { SectionTitle } from "./ui/sectionTitle";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { TestimonialCard } from "./ui/testimonialCard";
import { TESTIMONIAL_DATA, TESTIMONIAL_POSITION, TESTIMONIAL_PROPERTYVARIANTS } from "../consts";
export const Testimonial = () => {
    const [reel, setReel] = useState(true)
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5]);

    const nextProperty = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % TESTIMONIAL_DATA.length
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
            <SectionTitle className="relative overflow-x-hidden">
                Feedback
            </SectionTitle>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-5 h-96 sm:h-44" >

                {TESTIMONIAL_DATA.map((item, key) => (
                    <motion.div
                        animate={TESTIMONIAL_POSITION[positionIndexes[item.index]]}
                        initial={{ x: 0 }}
                        variants={TESTIMONIAL_PROPERTYVARIANTS}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute', width: '100%', maxWidth: '768px' }}
                        key={key} >
                        <TestimonialCard data={item} />
                    </motion.div>
                ))}
            </motion.div>
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
