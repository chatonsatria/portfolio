import { useContext, useState } from "react";
import { StoreContext } from "../../../store/store-context";
import FilterSearch from "../../atom/filters/FilterSearch";
import ProjectCard from "../../molecules/CardProjects";

export default function Projects(props: {
  dataRealProject: any;
  dataExplorationProject: any;
  searchFilter: any;
  searchValue: (searchValue: any) => void;
}) {
  const { dataRealProject, dataExplorationProject, searchFilter, searchValue } =
    props;
  const searchValueChangeHandler = (
    realValue: string,
    explorationValue: string
  ) => {
    searchValue({
      realValue,
      explorationValue,
    });
  };
  return (
    <section className="flex flex-col gap-y-8">
      {/* real */}
      <div className="flex flex-col gap-y-11 border-b-2 dark:border-[#152C2F] pb-11">
        <p data-aos="fade-right" className="text-center font-semibold text-5xl">
          Projects Portfolio
        </p>
        <div data-aos="fade-right">
          <FilterSearch
            searchValue={(value) =>
              searchValueChangeHandler(value, searchFilter?.explorationValue)
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataRealProject
            .filter((data: any) => {
              if (!searchFilter?.realValue) return true;
              if (
                data.title
                  .toLowerCase()
                  .includes(searchFilter?.realValue.toLowerCase()) ||
                data.category
                  .toLowerCase()
                  .includes(searchFilter?.realValue.toLowerCase())
              ) {
                return true;
              }
            })
            .map((data: any, key: number) => (
              <ProjectCard
                key={key}
                imageUrl={data.project_thumbnail}
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
        <div data-aos="fade-right">
          <FilterSearch
            searchValue={(value) =>
              searchValueChangeHandler(searchFilter?.realValue, value)
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataExplorationProject
            .filter((data: any) => {
              if (!searchFilter?.explorationValue) return true;
              if (
                data.title
                  .toLowerCase()
                  .includes(searchFilter?.explorationValue.toLowerCase()) ||
                data.category
                  .toLowerCase()
                  .includes(searchFilter?.explorationValue.toLowerCase())
              ) {
                return true;
              }
            })
            .map((data: any, key: number) => (
              <ProjectCard
                key={key}
                imageUrl={data.project_thumbnail}
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
