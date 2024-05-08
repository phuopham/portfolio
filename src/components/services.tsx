import { useSectionInView } from "../libs/hooks";
import { Service, ServiceProps } from "./service"
import { SectionTitle } from "./ui/sectionTitle"

const Services = ({ serviceData }: { serviceData: Array<ServiceProps> }) => {
    const { ref } = useSectionInView("Offer", 0.7);
    return (
        <section ref={ref} id="projects" className="scroll-mt-28 flex flex-col items-center">
            <SectionTitle>My services</SectionTitle>
            <div className="md:grid md:grid-cols-3 gap-5">
                {serviceData.map((it, i) => (
                    <Service key={i} data={it} />
                ))}
            </div>
        </section>
    )
}

export default Services