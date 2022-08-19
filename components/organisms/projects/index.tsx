import { useContext, useState } from "react";
import { StoreContext } from "../../../store/store-context";
import FilterSearch from "../../atom/filters/FilterSearch";
import ProjectCard from "../../molecules/CardProjects";

export default function Projects() {
  const { realProjects, explorationProjects } = useContext(StoreContext);
  const [realSearch, setRealSearch] = useState("");
  const [explorationSearch, setExplorationSearch] = useState("");
  return (
    <section className="flex flex-col gap-y-8">
      {/* real */}
      <div className="flex flex-col gap-y-11 border-b-2 dark:border-[#152C2F] pb-11">
        <p data-aos="fade-right" className="text-center font-semibold text-5xl">
          Projects Portfolio
        </p>

        <div data-aos="fade-right" className="inline-flex justify-between">
          <FilterSearch searchValue={(value) => setRealSearch(value)} />
          {/* <FilterDropdown /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {realProjects
            .filter((data: any) => {
              if (!realSearch) return true;
              if (
                data.title.toLowerCase().includes(realSearch.toLowerCase()) ||
                data.category.toLowerCase().includes(realSearch.toLowerCase())
              ) {
                return true;
              }
            })
            .map((data: any, key: number) => (
              <ProjectCard
                key={key}
                imageUrl="/next/developer-light.svg"
                title={data.title}
                category={data.category}
                href={data.slug}
              />
            ))}
        </div>
      </div>
      {/* exploration */}
      <div className="flex flex-col gap-y-11 border-b-2 dark:border-[#152C2F] pb-11">
        <p data-aos="fade-right" className="text-center font-semibold text-5xl">
          Exploration
        </p>
        <div data-aos="fade-right" className="inline-flex justify-between">
          <FilterSearch searchValue={(value) => setExplorationSearch(value)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {explorationProjects
            .filter((data: any) => {
              if (!explorationSearch) return true;
              if (
                data.title
                  .toLowerCase()
                  .includes(explorationSearch.toLowerCase()) ||
                data.category
                  .toLowerCase()
                  .includes(explorationSearch.toLowerCase())
              ) {
                return true;
              }
            })
            .map((data: any, key: number) => (
              <ProjectCard
                key={key}
                imageUrl="/next/developer-light.svg"
                title={data.title}
                category={data.category}
                href={data.slug}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
