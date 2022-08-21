import ButtonLinkPrimary from "../../../atom/buttons/ButtonLinkPrimary";

export default function DetailAbout(props: { data: any }) {
  const { data } = props;
  return (
    <div data-aos="fade-right" className="flex flex-col col-span-1 gap-y-8">
      {/* about client */}
      {data.client.website && (
        <div className="flex flex-col gap-y-8">
          <div className="inline-flex justify-between items-center">
            <p className="text-2xl font-semibold">About Client</p>
            <ButtonLinkPrimary
              buttonText="Official Website"
              href={data ? data.client.website : ""}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            {/* company name */}
            <div>
              <p className="font-semibold">Name</p>
              <p className="text-sm text-gray-400">
                {data ? data.client.company : "-"}
              </p>
            </div>
            {/* services */}
            <div>
              <p className="font-semibold">Services</p>
              <p className="text-sm text-gray-400">
                {data ? data.client.services : "-"}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* objective */}
      <div className="flex flex-col gap-y-1">
        <p className="text-2xl font-semibold">Objective</p>
        <p className="text-sm text-gray-400">{data ? data.objective : "-"}</p>
      </div>
      {/* tools and tech */}
      <div className="flex flex-col gap-y-1">
        <p className="text-2xl font-semibold">Tools & Tech</p>
        <p className="text-sm text-gray-400">{data ? data.tools_tech : "-"}</p>
      </div>
    </div>
  );
}
