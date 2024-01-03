
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
        <div className="bg-slate-50/80 relative mx-8 p-5 rounded-xl ">
            <img loading="lazy" className="absolute -top-6 left-1/2 -translate-x-1/2 max-h-12 shadow-purple-400 drop-shadow-xl" src={data.logo} />
            <div className="pt-8 px-8 text-slate-900 text-center">{data.testimonial}</div>
            <h6 className=" pt-8 text-end capitalize text-purple-600 font-bold text-lg">{data.name}</h6>
            <p className=" text-end font-semibold text-slate-400 uppercase text-sm">{data.title}</p>
        </div>
    )
}