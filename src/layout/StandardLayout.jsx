/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { ThemeSwitch } from "../components/ThemeSwitch";

/**
 * Renders a standard layout.
 * @param {Object} props
 * @param {React.ReactNode} props.navbar
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} props.themeswitch
 * @return {JSX.Element}
 */
export function StandardLayout({ children, navbar, themeswitch }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen w-screen ${theme}`}>
      {navbar}
      {themeswitch}
      <div className="max-w-2xl mx-auto px-4">{children}</div>;
    </div>
  );
}

StandardLayout.propTypes = {
  navbar: PropTypes.node,
  children: PropTypes.node,
};
