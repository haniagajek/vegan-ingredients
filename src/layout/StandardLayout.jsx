/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

/**
 * Renders a standard layout.
 * @param {Object} props
 * @param {React.ReactNode} props.navbar
 * @param {React.ReactNode} props.children
 * @return {JSX.Element}
 */
export function StandardLayout({ children, navbar }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen w-screen ${theme}`}>
      {navbar}
      <div className="max-w-2xl mx-auto px-4">{children}</div>;
    </div>
  );
}

StandardLayout.propTypes = {
  navbar: PropTypes.node,
  children: PropTypes.node,
};
