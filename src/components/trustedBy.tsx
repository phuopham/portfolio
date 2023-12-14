import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap, motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { SectionTitle } from "./ui/sectionTitle";

export const TrustedBy = ({ children, baseVelocity = 100 }: { children: ReactNode, baseVelocity: number }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    // Magic number
    const x = useTransform(baseX, (v) => `${wrap(-255, 0, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });
    return (
        <section className="text-center">
            <SectionTitle>Trusted by</SectionTitle>
            <div className="overflow-hidden">
                <motion.div className=" flex gap-10 items-center" style={{ x }}>
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                </motion.div>
            </div>

        </section>
    );
}