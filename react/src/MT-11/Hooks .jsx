import { useEffect, useState } from "react";

export function useOnlineStatus(key) {
    const [state, setState] =  useState(key);
    useEffect(() => {
        function handleOnline() {
            setState(true);
          } 
          function handleOffline() {
            setState(false);
          }

          window.addEventListener("online", handleOnline);
          window.addEventListener("offline", handleOffline);
          return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
          };
        }, []);
        return state;
        }

        export function Statusbar() {
          const isOnline = useOnlineStatus(navigator.onLine);
          return <h1>{isOnline ? "✅ Online" : "❌ Offline"}</h1>;
      }
      // SaveButton Component
      export function SaveButton() {
          const isOnline = useOnlineStatus(navigator.onLine);
          function handleSaveClick() {
              console.log("✅ Save Progress");
          }
          return (
              <button disabled={!isOnline} onClick={handleSaveClick}>
                  {isOnline ? "Save Progress" : "Reconnecting..."}
              </button>
          );
      }
      // Default Export
      export default Statusbar;