// import FilterDropdown from "../../atom/filters/FilterDropdown";
import Link from "next/link";
import { useContext } from "react";
import { StoreContext } from "../../../store/store-context";
import ButtonPrimary from "../../atom/buttons/ButtonPrimary";
import FilterSearch from "../../atom/filters/FilterSearch";
import ProjectCard from "../../molecules/ProjectsCard";

export default function Projects() {
  const { realProjects } = useContext(StoreContext);
  return (
    <section className="flex flex-col gap-y-11 border-b-2 dark:border-[#152C2F] pb-11">
      <p data-aos="fade-right" className="text-center font-semibold text-5xl">
        Projects Portfolio
      </p>
      <div className="flex flex-col gap-y-8">
        <div data-aos="fade-right" className="inline-flex justify-between">
          <FilterSearch searchValue={(value) => console.log(value)} />
          {/* <FilterDropdown /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {realProjects.map((data: any, key: number) => (
            <ProjectCard
              key={key}
              imageUrl="/next/developer-light.svg"
              title={data.title}
              category={data.category}
              href={data.slug}
            />
          ))}
        </div>
        <div data-aos="fade-right" className="flex w-full justify-center">
          <ButtonPrimary buttonText="More Projects" href={"/projects"} />
        </div>
      </div>
    </section>
  );
}
