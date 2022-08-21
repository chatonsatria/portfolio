import ButtonLinkPrimary from "../../atom/buttons/ButtonLinkPrimary";
import FilterSearch from "../../atom/filters/FilterSearch";
import ProjectCard from "../../molecules/CardProjects";

export default function Projects(props: {
  data: any;
  searchFilter: string;
  searchValue: (value: string) => void;
}) {
  const { data, searchFilter, searchValue } = props;
  return (
    <section className="flex flex-col gap-y-11 border-b-2 dark:border-[#152C2F] pb-11">
      <p data-aos="fade-right" className="text-center font-semibold text-5xl">
        Projects Portfolio
      </p>
      <div className="flex flex-col gap-y-8">
        <div data-aos="fade-right">
          <FilterSearch searchValue={(value) => searchValue(value)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data
            .filter((data: any) => {
              if (!searchFilter) return true;
              if (
                data.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                data.category.toLowerCase().includes(searchFilter.toLowerCase())
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
        <div data-aos="fade-right" className="flex w-full justify-center">
          <ButtonLinkPrimary
            buttonText="More Projects"
            href={"/projects"}
            target_blank={false}
          />
        </div>
      </div>
    </section>
  );
}
