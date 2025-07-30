import Image from "next/image";
import Introduction from "./Introduction";

export default function About() {
  return (
    <section className="flex flex-col gap-y-20">
      {/* pict and desc */}
      <div
        data-aos="fade-right"
        className="flex flex-col lg:flex-row gap-x-8 items-center lg:items-start"
      >
        <div className="flex w-full max-w-[300px]">
          <Image
            src="/images/profile.png"
            alt=""
            width={300}
            height={300}
            layout={"fixed"}
            objectFit={"cover"}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col w-full lg:w-3/4 gap-y-4 mt-11 lg:mt-0">
          <p>
            Graduate of informatics, web development enthusiast, and likes to
            learn new things. 3 years of experience specializing in front-end
            development. Experienced in developing client-side software
            applications using HTML, CSS, Tailwind CSS, Javascript, ReactJS, and
            NextJS.
          </p>
          <p>
            Has experience in developing webiste dashboards application, one of
            which handles the PastiAngkut project.
          </p>
          <p>
            Developed and maintained web applications using React.js and/or
            Next.js, prioritizing optimal performance and user experience.
            Collaborated with the design team to create pixel-perfect and
            responsive UI/UX designs, implemented state management through Redux
            and context API for data consistency, conducted code reviews, and
            optimized codebase.
          </p>
        </div>
      </div>
      {/* quick skill and education intro */}
      <Introduction />
    </section>
  );
}
