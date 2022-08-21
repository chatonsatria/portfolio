import Image from "next/image";
import { useState } from "react";

export default function DetailThumbnail(props: { data: any }) {
  const { data } = props;
  const [open, setOpen] = useState<any>();
  return (
    <section
      data-aos="fade-right"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {data.map((image: any, key: number) => (
        <div
          key={key}
          onClick={() => setOpen(image.image)}
          className="rounded-md overflow-clip"
        >
          <Image
            src={image.image}
            alt=""
            width={900}
            height={900}
            layout="responsive"
            objectFit={"cover"}
            className="rounded-md hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      ))}
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed flex w-full z-[104] min-h-screen left-0 top-0 bg-[#172e31] bg-opacity-80 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center m-auto">
            <div className="w-[400px] md:w-[600px] lg:w-[900px] m-auto rounded-md overflow-clip">
              <Image
                src={open}
                alt=""
                width={900}
                height={900}
                layout="responsive"
                objectFit={"cover"}
                className="rounded-md"
              />
            </div>
            <p className="mt-2 text-white">Click anywhere to exit</p>
          </div>
        </div>
      )}
    </section>
  );
}
