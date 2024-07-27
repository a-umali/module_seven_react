import React from "react";
import { useUserContext } from "../context/UserContext";

export const ContextWork = () => {
  // STATE / VAR
    const { currentUser, handleUpdateUser, mode, toggleMode } = useUserContext();
  // USEEFFECT

  // FUNC
const handleNameChange = (e) => {
  handleUpdateUser({name: e.target.value})
}
  // RETURN
    return (
    <div style={{ width: "100%"}}>
        <div
            style={{ border: "solid blue 1px", 
                padding: "10px", 
                margin: "10px" ,
                display: "flex", 
                flexDirection:"column",
                backgroundColor: mode === "dark" ? "black" : "lightgrey",
                color: mode === "dark" ? "white" : "black",
                }}>

        <p>First Context Example</p>

        <input value={currentUser.name} onChange={handleNameChange}/>
        <button onClick={toggleMode}>{mode}mode</button>
        </div>
    </div>
    );
};
