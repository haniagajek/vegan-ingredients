import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a navigation bar item component.
 * @param {object} props - The props of the navigation bar item.
 * @param {string} props.text - The text content of the navigation bar item.
 * @param {string} props.href - The URL of the navigation bar item.
 * @param {boolean} [props.current]
 * @return {JSX.Element}
 */
export function NavbarItem({ text, href, current }) {
  return (
    <li>
      <a
        href={href}
        className={`block py-2 px-3 text-tod rounded hover:bg-blo md:hover:bg-transparent md:border-0 md:hover:text-blo md:p-0  ${
          current ? "text-tod bg-blo md:bg-transparent md:text-blo" : ""
        }`}
        aria-current={current ? "page" : undefined}
      >
        {text}
      </a>
    </li>
  );
}

NavbarItem.propTypes = {
  // eslint-disable-next-line prettier/prettier
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  current: PropTypes.bool,
};
