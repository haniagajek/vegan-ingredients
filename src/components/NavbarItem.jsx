import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a navigation bar item component.
 * @param {object} props - The props of the navigation bar item.
 * @param {string} props.text - The text content of the navigation bar item.
 * @param {string} props.href - The URL of the navigation bar item.
 * @param {boolean} [props.current] - Whether the navigation bar item is the current page.
 * @return {JSX.Element} The rendered navigation bar item.
 */
export function NavbarItem({ text, href, current }) {
  return (
    <li>
      <a
        href={href}
        className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
          current
            ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
            : ""
        }`}
        aria-current={current ? "page" : undefined}
      >
        {text}
      </a>
    </li>
  );
}

NavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  current: PropTypes.bool,
};
