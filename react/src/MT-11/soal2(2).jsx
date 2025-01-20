import { useTaskStatus } from "./soal2";
export default function TaskStatus() {
    const { isTaskCompleted, toggleTaskStatus } = useTaskStatus();
    return (
        <div
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: isTaskCompleted ? "green" : "red",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <h1>
                {isTaskCompleted ? " Task Completed" : " Task Not Completed"}
            </h1>
            <button
                onClick={toggleTaskStatus}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: isTaskCompleted ? "green" : "red",
                    color: "#fff",
                    border: "none",
    
              
                }}
            >
                Toggle Task
            </button>
        </div>
    );
}