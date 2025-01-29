import { useState } from "react";
// Custom hook
export function useTaskStatus() {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);
    const toggleTaskStatus = () => {
        setIsTaskCompleted(prevStatus => !prevStatus);
    };
    return { isTaskCompleted, toggleTaskStatus };
}