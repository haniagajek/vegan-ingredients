/* eslint-disable prettier/prettier */
import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 * @return {JSX.Element} The rendered Home component.
 */
export function ThemeSwitch() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="absolute float top-5 right-10 h-16 w-16 ">
      <label class="inline-flex items-center mb-5 cursor-pointer ">
        <input type="checkbox" value="" class="sr-only peer"></input>
        <div
          class="relative w-11 h-6 bg-zinc-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-500 dark:peer-focus:ring-zinc-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-200 peer-checked:bg-zinc-200"
          onClick={toggleTheme}
        >
          {" "}
        </div>
      </label>
    </div>
  );
}
