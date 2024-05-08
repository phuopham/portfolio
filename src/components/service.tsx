
export type ServiceProps = {
    title: string,
    img: string,
    specialty: string
}

export const Service = ({ data }: { data: ServiceProps }) => {
    return (
        <div className="flex flex-col items-center gap-5 bg-gradient-to-b from-transparent to-slate-100/50 rounded-lg p-5 max-w-80 mb-5 md:mb-0">
            <div className="bg-purple-300 rounded-full p-8">
                <img src={data.img} className="h-20" alt="" />
            </div>
            <div className="font-bold text-purple-700 dark:text-purple-400 text-center h-9">{data.title}</div>
            <div className="text-balance">{data.specialty}</div>
        </div>
    )
}
