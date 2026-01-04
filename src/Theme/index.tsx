import React, { useState } from "react";
import { ThemeContext } from "./useTheme";

const ThemeComponent = ({ children }: { children: React.ReactNode }) => {
  const [isDarktheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((theme) => !theme);
  };
  const theme = isDarktheme ? "dark" : "light";
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeComponent;
