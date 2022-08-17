import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuProps {
  title: string;
  href: string;
  imageUrl: string;
  hidden: boolean;
}

export default function CustomLink(props: Partial<MenuProps>) {
  const { title, href = "/", imageUrl = "", hidden = false } = props;
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const { theme } = useTheme();

  return (
    <Link href={href}>
      <div className="cursor-pointer">
        {title ? (
          <p
            className={`${
              hidden ? "hidden md:block" : ""
            } font-semibold hover:text-[#2F5D62] ${
              router.pathname == href
                ? "text-[#2F5D62]"
                : "text-black dark:text-white"
            }`}
          >
            {title}
          </p>
        ) : (
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative inline-flex gap-x-3 items-center"
          >
            <div className="flex w-[70px] h-[70px] rounded-full hover:shadow-md transition-all duration-500">
              {theme === "dark" ? (
                <Image
                  src="/next/logo-dark.svg"
                  alt=""
                  width={70}
                  height={70}
                  className="z-[102] rounded-full"
                />
              ) : (
                <Image
                  src="/next/logo-light.svg"
                  alt=""
                  width={70}
                  height={70}
                  className="z-[102] rounded-full"
                />
              )}
            </div>
            <p
              className={`absolute ${
                hover ? "opacity-100 translate-x-20" : "opacity-0"
              } z-[101] text-2xl font-semibold transition-all duration-500`}
            >
              Chaton
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
