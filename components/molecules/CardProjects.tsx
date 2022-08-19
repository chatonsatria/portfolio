import Image from "next/image";
import Link from "next/link";

export default function CardProjects(
  props: Partial<{
    imageUrl: string;
    title: string;
    category: string;
    href: string;
  }>
) {
  const { imageUrl = "", title, category, href } = props;
  return (
    <section data-aos="fade-right">
      <Link href={`/projects/${href}`}>
        <div className="flex flex-col w-full dark:bg-[#172e31] text-center rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer">
          <Image
            src={imageUrl}
            alt=""
            width={300}
            height={240}
            className="rounded-t-md object-cover"
          />
          <div className="flex flex-col gap-y-3 py-3">
            <p className="font-semibold text-xl">{title}</p>
            <p className="font-medium text-lg">{category}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}
