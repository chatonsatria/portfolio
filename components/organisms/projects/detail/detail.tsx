import Link from "next/link";
import ButtonLinkPrimary from "../../../atom/buttons/ButtonLinkPrimary";

export default function Detail(props: { data: any; slug: any }) {
  const { data, slug } = props;
  console.log(data.client);
  return (
    <section className="flex flex-col w-full gap-y-11 pb-8 border-b-2 dark:border-[#152C2F]">
      {/* title, date, tag */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p
          data-aos="fade-right"
          className="text-center font-semibold text-4xl md:text-5xl mb-4"
        >
          {data.title}
        </p>
        <div className="inline-flex gap-x-4 items-center">
          <div className="inline-flex items-center">
            <svg
              className="mr-2 text-[#152C2F] dark:text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 16L12.586 13.586C12.2109 13.211 12.0001 12.7024 12 12.172V6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-sm md:text-base">{data.date}</p>
          </div>
          <div className="inline-flex items-center">
            <svg
              className="mr-2 text-[#152C2F] dark:text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.244 21.366C15.043 21.567 14.8044 21.7265 14.5418 21.8353C14.2792 21.9441 13.9978 22.0001 13.7135 22.0001C13.4292 22.0001 13.1478 21.9441 12.8852 21.8353C12.6226 21.7265 12.384 21.567 12.183 21.366L3.634 12.817C3.22815 12.4112 3.00009 11.8609 3 11.287V5.163C3 3.97 3.97 3 5.164 3H11.287C11.86 3 12.411 3.228 12.817 3.634L21.366 12.183C21.567 12.384 21.7265 12.6226 21.8353 12.8852C21.9441 13.1478 22.0001 13.4292 22.0001 13.7135C22.0001 13.9978 21.9441 14.2792 21.8353 14.5418C21.7265 14.8044 21.567 15.043 21.366 15.244L15.244 21.366Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 6.5L7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-sm md:text-base">{data.tag}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex w-full aspect-square rounded-md bg-slate-300" />
        <div className="flex w-full aspect-square rounded-md bg-slate-300" />
        <div className="flex w-full aspect-square rounded-md bg-slate-300" />
      </div>
      {/* client, objectives, tools, challange */}
      <div className="grid grid-cols-3 gap-8">
        {/* first section */}
        <div className="flex flex-col col-span-1 gap-y-8">
          {/* about client */}
          <div className="flex flex-col gap-y-4">
            <div className="inline-flex justify-between items-center">
              <p className="text-2xl font-semibold">About Client</p>
              <ButtonLinkPrimary
                buttonText="Official Website"
                href={data.client.website}
              />
            </div>
            <div className="flex flex-col gap-y-4">
              {/* company name */}
              <div>
                <p className="font-semibold">Name</p>
                <p className="text-sm text-gray-400">{data.client.company}</p>
              </div>
              {/* services */}
              <div>
                <p className="font-semibold">Services</p>
                <p className="text-sm text-gray-400">{data.client.services}</p>
              </div>
            </div>
          </div>
          {/* objective */}
          <div className="flex flex-col gap-y-1">
            <p className="text-2xl font-semibold">Objective</p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, eos.
            </p>
          </div>
          {/* tools and tech */}
          <div className="flex flex-col gap-y-1">
            <p className="text-2xl font-semibold">Tools & Tech</p>
            <p className="text-sm text-gray-400">{data.tools_tech}</p>
          </div>
        </div>
        {/* second section */}
        <div className="flex flex-col col-span-2 gap-y-8">
          {/* description */}
          <div className="inline-flex justify-between items-center">
            <p className="text-2xl font-semibold">Description</p>
            <ButtonLinkPrimary
              buttonText="Project Demo"
              href={data.client.website}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            illo dolorum impedit enim et ipsum rem incidunt neque? Ab laboriosam
            sapiente eius laborum, minima dolorum sed itaque, aliquid, tenetur
            odit laudantium eum ducimus? Perferendis incidunt, eveniet eligendi
            modi quos animi similique beatae inventore minima officia
            aspernatur, consequuntur eum cum fugiat voluptas voluptates qui
            aliquid sunt vero adipisci! Dignissimos aut nihil, facere labore
            nulla corporis exercitationem, impedit, laudantium atque ipsum
            expedita rerum a quisquam!. <br /> <br /> Animi velit magni
            quibusdam unde quisquam labore enim necessitatibus expedita esse
            accusamus ducimus illo, nihil ex tenetur excepturi! Sit, quae nisi.
            Blanditiis sapiente corrupti cumque explicabo quae! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Odio natus quae,
            maxime obcaecati voluptas officiis quo vel pariatur, harum quibusdam
            ipsum doloremque tempora ab. Quis similique, repellat provident
            maiores asperiores nemo excepturi quae consequuntur voluptate
            dolore, iusto quos illo sequi odio eius earum. Dolor, et voluptates
            saepe iste aliquam dolore? <br /> <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nemo qui ex illum neque provident eos
            iste ad, repudiandae debitis veritatis delectus, numquam nam aliquam
            ipsa? Officiis laborum saepe, dolore suscipit alias totam illum modi
            fugit ratione qui quia laudantium in, ut, assumenda nemo eius sit
            omnis deserunt consequuntur culpa odit.
          </p>
        </div>
      </div>
    </section>
  );
}
