import Link from "next/link";
import ButtonLinkPrimary from "../../../atom/buttons/ButtonLinkPrimary";
import DetailAbout from "./DetailAbout";
import DetailDescription from "./DetailDescription";
import DetailThumbnail from "./DetailThumbnail";
import DetailTitle from "./DetailTitle";

export default function Detail(props: { data: any; slug: any }) {
  const { data, slug } = props;
  return (
    <section className="flex flex-col w-full gap-y-11 pb-8 border-b-2 dark:border-[#152C2F]">
      {/* title, date, tag */}
      <DetailTitle title={data.title} date={data.date} tag={data.tag} />
      {/* thumbnail  */}
      <DetailThumbnail />
      {/* client, objectives, tools, challange */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-11 md:gap-8">
        {/* first section */}
        <DetailAbout data={data} />
        {/* second section */}
        <DetailDescription url={data.demo_url} />
      </div>
    </section>
  );
}
