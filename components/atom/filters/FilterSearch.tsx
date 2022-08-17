import { useState } from "react";
import ButtonSearch from "../buttons/ButtonSearch";

export default function FilterSearch(props: {
  searchValue: (value: string) => void;
}) {
  return (
    <section className="inline-flex gap-x-4">
      <ButtonSearch />
      <input
        type="text"
        onChange={(e) => props.searchValue(e.target.value)}
        className="flex w-full max-w-xl px-4 h-11 rounded-md border-2 dark:border-[#172e31] focus:border-[#617577] focus:dark:border-[#617577] bg-white dark:bg-[#172e31] outline-none"
      />
    </section>
  );
}
