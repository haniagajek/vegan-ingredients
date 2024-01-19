import "./styles/App.css";
import React from "react";
import { StandardLayout } from "./layout/StandardLayout";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import PropTypes from "prop-types";

/**
 * @param {Object} props
 * @param {JSX.Element} props.page
 * @return {JSX.Element}
 */
function StandardPage({ page }) {
  return <StandardLayout navbar={<Navbar />}>{page}</StandardLayout>;
}

StandardPage.propTypes = {
  page: PropTypes.element.isRequired,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardPage page={<Home />} />,
  },
  {
    path: "/ingredients",
    element: <StandardPage page={<ingredients />} />,
  },
]);

/**
 * Renders the Main App component - bootstrap for the entire app.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
