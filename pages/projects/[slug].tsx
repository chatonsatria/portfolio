import { useTheme } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import Detail from "../../components/organisms/projects/detail";
import { StoreContext } from "../../store/store-context";

export default function IndexDetail() {
  const router = useRouter();
  const { theme = "system" } = useTheme();
  const { slug } = router.query;
  const { allProjects } = useContext(StoreContext);
  const setDataBySlug = (data: any) => {
    let dataBySlug: any;
    data
      .filter((data: any) => {
        if (data.slug === slug) {
          return true;
        }
      })
      .forEach((data: any) => {
        dataBySlug = data;
      });
    return dataBySlug;
  };
  return (
    <section className="flex flex-col gap-y-8 w-full max-w-7xl mx-auto mt-24">
      <Head>
        <title>Chaton Satria Y | Project Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`/next/logo-${theme}.svg`} />
      </Head>
      <Detail data={setDataBySlug(allProjects)} slug={slug} />
    </section>
  );
}
