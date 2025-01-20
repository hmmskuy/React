import { useTheme } from "./soal1";
export default function Mode() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#212121",
                color: theme === "light" ? "#000000" : "#ffffff",
                minHeight: "100vh",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h1>Current Theme: {theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
            <button
                onClick={toggleTheme}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: theme === "light" ? "#333333" : "#ffffff",
                    color: theme === "light" ? "#ffffff" : "#333333",
                }}
            >
                Tombol Mode
            </button>
        </div>
    );
}