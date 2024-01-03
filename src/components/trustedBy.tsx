import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { SectionTitle } from "./ui/sectionTitle";

export const TrustedBy = () => {
    const positions = ["pos0", "pos1", "pos2", "pos3", "pos4", "pos5"];
    const propertyVariants = {
        pos0: { x: "-16em", y: '-50%', zIndex: -2, opacity: '0', width: 0 },
        pos1: { x: "0", y: '-50%' },
        pos2: { x: "16em", y: '-50%' },
        pos3: { x: "32em", y: '-50%' },
        pos4: { x: "48em", y: '-50%' },
        pos5: { x: "64em", y: '-50%', opacity: '0', width: 0 },
    };
    const sliderData = [
        { style: 'dark:p-2 rounded-lg dark:bg-slate-50/75 w-44 ', img: "./logo/Qualcomm-Logo.svg" },
        { style: 'dark:p-2 rounded-lg dark:bg-slate-50/75 w-44 ', img: "./logo/Siemens-logo.svg" },
        { style: 'dark:p-2 rounded-lg dark:bg-slate-50/75 w-44 ', img: "./logo/Tek-experts.svg" },
        { style: 'dark:p-2 rounded-lg dark:bg-slate-50/75 ', img: "./logo/viepos.png" },
        { style: 'dark:p-2 rounded-lg dark:bg-slate-50/75 w-44', img: "./logo/web888.png" },
        { style: 'dark:p-2 w-44 rounded-lg dark:bg-slate-50/75 ', img: "./logo/Dextermind.png" },
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
        const myFunction = () => { nextProperty(); };
        const intervalId = setInterval(myFunction, 4000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <>
            <SectionTitle>
                Trusted by
            </SectionTitle>
            <div className="lg:mt-20 w-[100vw] lg:w-[57rem] overflow-x-hidden" >
                <div className="flex p-4 flex-wrap justify-center items-center gap-3 md:block">
                    {window.innerWidth > 768 ?
                        sliderData.map((image, index) => (
                            <motion.img
                                animate={positions[positionIndexes[index]]}
                                initial={{ x: "0" }}
                                variants={propertyVariants}
                                transition={{ duration: 2 }}
                                className={image.style}
                                style={{ position: 'absolute' }}
                                key={index}
                                src={image.img}
                            />

                        ))
                        : sliderData.map((image, index) => (
                            <img loading="lazy" src={image.img} className={image.style} key={index} />
                        ))}
                </div>
            </div>
        </>
    );
};
