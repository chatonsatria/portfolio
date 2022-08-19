import { useState } from "react";

export default function ButtonMenu(props: { onClick: () => void }) {
  const [toggle, setToggle] = useState(false);
  const onClickHandler = () => {
    props.onClick();
    setToggle((toggle) => !toggle);
  };
  return (
    <button onClick={onClickHandler} className="md:hidden">
      <div className="flex flex-col gap-y-1">
        <div
          className={`w-6 h-[3px] rounded-md bg-[#2F5D62] hover:bg-[#1f3d41] dark:bg-white transition-all ${
            toggle ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <div
          className={`w-6 h-[3px] rounded-md bg-[#2F5D62] hover:bg-[#1f3d41] dark:bg-white transition-all ${
            toggle ? "translate-x-3 opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-[3px] rounded-md bg-[#2F5D62] hover:bg-[#1f3d41] dark:bg-white transition-all ${
            toggle ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </div>
    </button>
  );
}
