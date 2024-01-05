import { useState, useEffect } from "react";
import { TESTIMONIAL_DATA } from "../consts";
import { motion, AnimatePresence, usePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TestimonialCard } from "./ui/testimonialCard";
import { SectionTitle } from "./ui/sectionTitle";
import { useSectionInView } from "../libs/hooks";

export const Testimonial2 = () => {
    const [reel, setReel] = useState(true)
    const { ref } = useSectionInView("Feedback", 0.5);
    const [onDisplay, setOnDisplay] = useState<{
        index: number;
        logo: string;
        name: string;
        title: string;
        testimonial: string;
    } | undefined>(TESTIMONIAL_DATA[0])
    const [isPresent, safeToRemove] = usePresence()
    const nextProperty = () => {
        const nextIndex = onDisplay ? (onDisplay.index + 1) % TESTIMONIAL_DATA.length : 0
        setOnDisplay(undefined)
        setTimeout(() => {
            setOnDisplay(TESTIMONIAL_DATA[nextIndex])
        }, 500)

    }
    const prevProperty = () => {
        const prevIndex = onDisplay ? (onDisplay.index + TESTIMONIAL_DATA.length - 1) % TESTIMONIAL_DATA.length : 0
        setOnDisplay(undefined)
        setTimeout(() => {
            setOnDisplay(TESTIMONIAL_DATA[prevIndex])
        }, 500)
    }
    useEffect(() => {
        if (reel) {
            const intervalId = setInterval(() => nextProperty(), 4000);
            return () => {
                clearInterval(intervalId);
            }
        }
    }, [reel, nextProperty]);

    useEffect(() => {
        !isPresent && setTimeout(safeToRemove, 1000)
    }, [isPresent])


    return (
        <>
            <motion.section ref={ref} id="feedback" className="max-w-[45rem] text-center leading-8 scroll-mt-28">
                <SectionTitle>Customer's Feedback</SectionTitle>
            </motion.section>
            <motion.div className="relative mt-4">
                <AnimatePresence>
                    {onDisplay && <motion.div className="h-80"
                        animate={{ scale: 1, opacity: 1, zIndex: 0 }}
                        initial={{ scale: 0, zIndex: -2, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ scale: 0, zIndex: -2, opacity: 0, }}
                        style={{ width: '100%', maxWidth: '768px' }}>
                        <TestimonialCard data={onDisplay} />
                    </motion.div>}
                </AnimatePresence>
                <div className="absolute bottom-1/2 translate-y-1/2 w-full px-2 flex justify-between gap-3">
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
            </motion.div>
        </>
    )
}