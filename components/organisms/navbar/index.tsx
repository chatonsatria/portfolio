import { useState } from "react";
import ButtonDarkMode from "../../atom/buttons/ButtonDarkMode";
import ButtonMenu from "../../atom/buttons/ButtonMenu";
import ButtonPrimary from "../../atom/buttons/ButtonPrimary";
import CustomLink from "./CustomLink";
import DropdownMenu from "./DropdownMenu";

export default function NavbarIndex() {
  const [toggle, setToggle] = useState(false);
  return (
    <section data-aos="fade-right" className="flex flex-col w-full">
      <div className="inline-flex w-full max-w-7xl justify-between items-center mx-auto px-8 md:px-20">
        <CustomLink href="/" imageUrl="https://placekitten.com/600/600" />
        <div className="inline-flex gap-x-6 items-center">
          <CustomLink title="Projects" href="/projects" hidden />
          <CustomLink title="About Me" href="/about" hidden />
          <CustomLink title="Contact" href="/contact" hidden />
        </div>
        <div className="inline-flex gap-x-6 items-center">
          <ButtonPrimary
            onClick={() => console.log("hire me")}
            buttonText="Hire Me"
          />
          <ButtonDarkMode />
          <ButtonMenu onClick={() => setToggle((toggle) => !toggle)} />
        </div>
      </div>
      <DropdownMenu toggle={toggle} />
    </section>
  );
}
