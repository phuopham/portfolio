import React from "react";
import { Project } from "./project";
import { useSectionInView } from "../libs/hooks";

export type ProjectsDataProps = {
  title: string,
  description: string,
  tags: Array<string>,
  link?: string,
  images: Array<string>,
  repo?: string
}


export const Projects = ({ projectsData }: { projectsData: Array<ProjectsDataProps> | undefined }) => {
  const { ref } = useSectionInView("Projects", 0.2);
  const [catalogs, setCatalogs] = React.useState([{ value: 'All', selected: true }])
  const [data, setData] = React.useState(projectsData)
  React.useEffect(() => {
    let allcatalogs
    if (projectsData) {
      allcatalogs = projectsData.reduce((acc, obj) => {
        return acc.concat(obj.tags);
      }, [] as string[])
      setCatalogs([...new Set(allcatalogs)].map(item => ({ value: item, selected: true })))
    }
    setData(projectsData)
  }, [projectsData])


  const onSelectionChange = (e: string) => {
    setCatalogs(prevItems =>
      prevItems.map(item =>
        item.value === e ? { ...item, selected: !item.selected } : item
      )
    )

    const selectedCatalogs = catalogs.filter(item => item.selected).map(item => item.value);

    // Filter the second array based on the selected catalogs
    const filteredData = projectsData?.filter(item => item.tags.some(catalog => selectedCatalogs.includes(catalog)));
    setData(filteredData)
  }

  console.log(catalogs)
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mt-28 flex flex-col items-center">
      <h2 className="m-auto py-3 px-12 rounded-full text-3xl font-medium text-purple-700   bg-slate-100/10 mb-8 text-center">My projects</h2>
      <div className="flex gap-2 flex-wrap pb-8 max-w-4xl">
        {catalogs.map((it, key) => (
          <button key={key} className={`rounded-full px-3 py-1  border-purple-800 border-[1px] opacity-70 transition-all hover:bg-slate-100/50 text-sm ${it.selected ? 'bg-purple-800' : 'bg-slate-100/30'}`} value={it.value} onClick={(e) => onSelectionChange((e.target as HTMLButtonElement).value)} >{it.value}</button>
        ))}
      </div>
      <div>
        {data?.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
