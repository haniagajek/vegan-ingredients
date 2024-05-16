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
import { IdContext } from "./contexts/IdContext";
import { ThemeSwitch } from "./components/ThemeSwitch";

/**
 * @param {Object} props
 * @param {JSX.Element} props.page
 * @return {JSX.Element}
 */
function StandardPage({ page }) {
  return (
    <StandardLayout navbar={<Navbar />} themeswitch={<ThemeSwitch />}>
      {page}
    </StandardLayout>
  );
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
  const [ids, setIds] = useState([]);

  const [info, SetShowInfo] = useState(false);

  return (
    <IdContext.Provider value={{ ids, setIds }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <InfoContext.Provider value={{ info, SetShowInfo }}>
          <RouterProvider router={router} />
        </InfoContext.Provider>
      </ThemeContext.Provider>
    </IdContext.Provider>
  );
}

export default App;
