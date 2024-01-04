import { motion } from 'framer-motion'

type CardProps = {
    index: number;
    logo: string;
    name: string;
    title: string;
    testimonial: string;
}

export const TestimonialCard = ({ data }: {
    data: CardProps
}) => {
    return (
        <motion.div className="bg-slate-50/80 relative mx-8 p-5 rounded-xl ">
            <motion.img loading="lazy" className="absolute -top-6 left-1/2 -translate-x-1/2 max-h-12 shadow-purple-400 drop-shadow-xl" src={data.logo} />
            <motion.div className="pt-8 px-8 text-slate-900 text-center">{data.testimonial}</motion.div>
            <motion.h6 className=" pt-8 text-end capitalize text-purple-600 font-bold text-lg">{data.name}</motion.h6>
            <motion.p className=" text-end font-semibold text-slate-400 uppercase text-sm">{data.title}</motion.p>
        </motion.div>
    )
}