import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CardProjects(
  props: Partial<{
    imageUrl: string;
    title: string;
    category: string;
    href: string;
  }>
) {
  const { imageUrl = "", title, category, href } = props;
  const [hover, setHover] = useState(false);
  const { theme = "system" } = useTheme();
  return (
    <section
      data-aos="fade-right"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link href={`/projects/${href}`}>
        <div className="flex flex-col w-full dark:bg-[#172e31] text-center rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer">
          <div className="relative w-full h-full rounded-t-md overflow-clip ">
            <div
              className={`${
                hover ? "opacity-0" : "opacity-40"
              } absolute w-full h-full z-[101] left-0 top-0 bg-[#172e31] transition-all`}
            />
            <Image
              src={imageUrl ? imageUrl : `/next/logo-${theme}.svg`}
              alt=""
              width={900}
              height={600}
              layout="responsive"
              objectFit={"contain"}
              className={`${
                hover ? "scale-105" : ""
              } rounded-t-md transition-all`}
            />
          </div>
          <div className="flex flex-col gap-y-3 py-3">
            <p className="font-semibold text-xl">{title}</p>
            <p className="font-medium text-lg">{category}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}
