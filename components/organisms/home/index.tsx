import Banner from "./Banner";
import Projects from "./Projects";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-11 w-full mt-24">
      <Banner />
      <Projects />
    </section>
  );
}
