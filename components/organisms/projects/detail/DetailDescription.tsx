import ButtonLinkPrimary from "../../../atom/buttons/ButtonLinkPrimary";

export default function DetailDescription(props: { url: string; data: any }) {
  const { url, data } = props;
  function createMarkUp(data: any) {
    return { __html: data };
  }
  return (
    <section data-aos="fade-right" className="flex flex-col col-span-2 gap-y-8">
      {/* description */}
      <div className="inline-flex justify-between items-center">
        <p className="text-2xl font-semibold">Description</p>
        <ButtonLinkPrimary buttonText="Project Demo" href={url ? url : ""} />
      </div>
      <div dangerouslySetInnerHTML={createMarkUp(data)} />
    </section>
  );
}
