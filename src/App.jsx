import "./styles/App.css";
import React, { useState } from "react";
import { StandardLayout } from "./layout/StandardLayout";
import { Home } from "./pages/Home";
import { Ingredients } from "./pages/Ingredients";
import { ErrorPage } from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import PropTypes from "prop-types";
import { ThemeContext } from "./contexts/ThemeContext";
import { InfoContext } from "./contexts/InfoContext";

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
    path: "/Ingredients",
    element: <StandardPage page={<Ingredients />} />,
  },
  {
    path: "/*",
    element: <StandardPage page={<ErrorPage />} />,
  },
]);

/**
 * Renders the Main App component - bootstrap for the entire app.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };

  const [info, SetShowInfo] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <InfoContext.Provider value={{ info, SetShowInfo }}>
        <RouterProvider router={router} />
      </InfoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
