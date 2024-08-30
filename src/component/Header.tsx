import { useContext } from "react";
import { ThemeContext } from "../themeContext";

export default function Header({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      {theme}
      <button onClick={toggleTheme}>toggle theme</button>
      {children}
    </div>
  );
}
