import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { SectionTitle } from "./ui/sectionTitle";
import { TRUSTEDBY_DATA, TRUSTEDBY_POSITION, TRUSTEDBY_PROPERTYVARIANTS } from "../consts";

export const TrustedBy = () => {
    const [positionIndexes, setPositionIndexes] = useState([...Array(TRUSTEDBY_DATA.length).keys()]);
    console.log(positionIndexes)
    const nextProperty = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % TRUSTEDBY_DATA.length
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
                        TRUSTEDBY_DATA.map((image, index) => (
                            <motion.img
                                animate={TRUSTEDBY_POSITION[positionIndexes[index]]}
                                initial={{ x: "0" }}
                                variants={TRUSTEDBY_PROPERTYVARIANTS}
                                transition={{ duration: 2 }}
                                className={image.style}
                                style={{ position: 'absolute' }}
                                key={index}
                                src={image.img}
                            />

                        ))
                        : TRUSTEDBY_DATA.map((image, index) => (
                            <img loading="lazy" src={image.img} className={image.style} key={index} />
                        ))}
                </div>
            </div>
        </>
    );
};
