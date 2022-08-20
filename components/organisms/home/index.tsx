import Banner from "./Banner";
import Projects from "./Projects";

export default function Home(props: {
  data: any;
  searchFilter: string;
  searchValue: (value: string) => void;
}) {
  const { data, searchFilter, searchValue } = props;
  return (
    <section className="flex flex-col gap-y-11 w-full mt-24">
      <Banner />
      <Projects
        data={data}
        searchFilter={searchFilter}
        searchValue={(value) => searchValue(value)}
      />
    </section>
  );
}
