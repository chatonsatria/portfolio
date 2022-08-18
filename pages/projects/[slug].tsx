import { useRouter } from "next/router";
import { useContext } from "react";
import Detail from "../../components/organisms/projects/detail/detail";
import { StoreContext } from "../../store/store-context";

export default function IndexDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { allProjects } = useContext(StoreContext);
  return (
    <section className="flex flex-col gap-y-8 w-full max-w-7xl mx-auto mt-24">
      {allProjects
        .filter((data: any) => {
          if (data.slug === slug) {
            return true;
          }
        })
        .map((data: any, key: number) => (
          <Detail key={key} data={data} slug={slug} />
        ))}
    </section>
  );
}
