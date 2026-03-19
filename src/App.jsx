import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  // Get initial theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Toggle theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Persist theme in localStorage and update document class
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Handle browser UI
  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return <Navbar theme={theme} toggleTheme={toggleTheme} />;
}

export default App;
