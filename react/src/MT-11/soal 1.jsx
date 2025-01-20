import { useState, useEffect } from "react";
export function useTheme() {
    const [theme, setTheme] = useState("light"); 
    useEffect(() => {
        console.log(`Current theme: ${theme}`);
    }, [theme]);
  
    
    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return { theme, toggleTheme };
}

