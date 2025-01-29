import React from "react";
import { useState } from "react";
import { useTaskStatus } from "./hooks./usetaskStatus"; // Pastikan hook dipanggil dengan benar
/**
 * Komponen untuk menampilkan status tugas dan tombol toggle.
 */
 function TaskStatusComponent() {
    const { isTaskCompleted, toggleTaskStatus } = useTaskStatus(); // Menggunakan custom hook dengan "use"
    return (
        <div style={styles.container}>
            <h1 style={styles.status}>
                {isTaskCompleted ? "✓ Task Completed" : "❌ Task Not Completed"}
            </h1>
            <button
                onClick={toggleTaskStatus}
                style={styles.button}
                aria-label="Toggle Task Status"
            >
                Toggle Task
            </button>
        </div>
    );
}
// Gaya CSS inline sederhana
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f7f9fc",
        fontFamily: "Arial, sans-serif",
        color: "#333",
    },
    status: {
        fontSize: "2rem",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "1rem",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007BFF",
        color: "#fff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};
export default TaskStatusComponent;