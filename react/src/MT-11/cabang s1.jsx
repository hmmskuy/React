import React from "react";
import { useTheme } from "./useTheme";
function App() {
    const { theme, toggleTheme } = useTheme(); // Gunakan custom hook
    return (
        <div
            style={{
                backgroundColor: theme === "dark" ? "#333" : "#fff",
                color: theme === "dark" ? "#fff" : "#000",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>Mode Tema: {theme === "dark" ? "Gelap" : "Terang"}</h1>
            <button onClick={toggleTheme} style={{ padding: "10px 20px" }}>
                Ganti ke {theme === "dark" ? "Terang" : "Gelap"}
            </button>
        </div>
    );
}
export default App;