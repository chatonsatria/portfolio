import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";

export default function ButtonDarkMode() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex w-11 h-11 items-center justify-center bg-slate-100 dark:bg-[#172e31] rounded-md"
    >
      <Image src={`/next/icon-${theme}.svg`} alt="" width={26} height={26} />
    </button>
  );
}
