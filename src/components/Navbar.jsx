/* eslint-disable prettier/prettier */
import React from "react";
import { NavbarItem } from "./NavbarItem";
import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

/**
 * Renders a navigation bar component.
 * @return {JSX.Element} The rendered navigation bar.
 */
export function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`${theme}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-tod self-center text-2xl font-semibold whitespace-nowrap ">
          Vegan Ingredients
        </span>

        {/* <button
          className=" w-14 h-7 p-0 bg-slate-500 rounded-lg border-none hover:bg-slate-400 "
          onClick={toggleTheme}
        >
          {" "}
          {theme ? "LHT" : "DRK"}{" "}
        </button> */}

        <label class="inline-flex items-center mb-5 cursor-pointer ">
          <input type="checkbox" value="" class="sr-only peer"></input>
          <div
            class="relative w-11 h-6 bg-zinc-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-500 dark:peer-focus:ring-zinc-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-200 peer-checked:bg-zinc-200"
            onClick={toggleTheme}
          >
            {" "}
          </div>
        </label>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-ttd rounded-lg md:hidden hover:bg-blo focus:outline-none focus:ring-2 focus:ring-tod"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-blo rounded-lg bg-tod md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blt ">
            <NavbarItem text="Home" href="/" current />
            <NavbarItem text="Ingredients" href="/ingredients" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
