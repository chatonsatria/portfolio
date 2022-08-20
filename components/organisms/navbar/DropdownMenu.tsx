import Link from "next/link";
import ButtonPrimary from "../../atom/buttons/ButtonPrimary";
import CustomLink from "./CustomLink";

export default function DropdownMenu(props: { toggle: boolean }) {
  return (
    <section
      className={`${
        props.toggle ? "" : "hidden"
      } md:hidden flex w-full shadow-md mb-8 transition-all duration-500`}
    >
      <div className="flex flex-col w-full max-w-7xl mx-auto px-8 md:px-20 py-4 gap-y-4">
        <div className="border-b-2 dark:border-[#152C2F] pb-2">
          <CustomLink title="Projects" href="/projects" />
        </div>
        <div className="border-b-2 dark:border-[#152C2F] pb-2">
          <CustomLink title="About Me" href="/about" />
        </div>
        <div className="border-b-2 dark:border-[#152C2F] pb-2">
          <CustomLink title="Contact" href="/contact" />
        </div>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=chaton.satria@gmail.com&su=hiring&body=body">
          <a target="_blank">
            <ButtonPrimary
              onClick={() => console.log("hire me")}
              buttonText="Hire Me"
            />
          </a>
        </Link>
      </div>
    </section>
  );
}
