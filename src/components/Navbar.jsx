import React from "react";
import { NavbarItem } from "./NavbarItem";

/**
 * Renders a navigation bar component.
 * @return {JSX.Element} The rendered navigation bar.
 */
export function Navbar() {
  return (
    <nav className="bg-blt border-blt dark ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-tod self-center text-2xl font-semibold whitespace-nowrap ">
          Vegan Ingredients
        </span>
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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-blo rounded-lg bg-blt md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blt ">
            <NavbarItem text="Home" href="/" current />
            <NavbarItem text="Ingredients" href="/ingredients" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
