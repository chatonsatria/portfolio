import Image from "next/image";
import ButtonDownload from "../../atom/buttons/ButtonDownload";
import { useTheme } from "next-themes";

export default function Banner() {
  const { theme } = useTheme();
  return (
    <section
      data-aos="fade-right"
      className="flex flex-col md:flex-row w-full text-center md:text-left justify-between items-center"
    >
      <div className="flex flex-col gap-y-4 items-center md:items-start">
        <p className="font-semibold text-4xl">HI, I AM CHATON</p>
        <p className="font-medium text-xl">
          A Frontend Developer & Design Enthusiast
        </p>
        <ButtonDownload buttonText="Download CV" />
      </div>
      <Image
        src={`/next/developer-${theme}.svg`}
        alt=""
        width={800}
        height={800}
      />
    </section>
  );
}
