import PropTypes from "prop-types";
import React from "react";

/**
 * Renders a standard layout.
 * @param {Object} props
 * @param {React.ReactNode} props.navbar
 * @param {React.ReactNode} props.children
 * @return {JSX.Element}
 */
export function StandardLayout({ children, navbar }) {
  return (
    <div className="min-h-screen w-screen dark">
      {navbar}
      <div className="max-w-2xl mx-auto px-4">{children}</div>;
    </div>
  );
}

StandardLayout.propTypes = {
  navbar: PropTypes.node,
  children: PropTypes.node,
};
