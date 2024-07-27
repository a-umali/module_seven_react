import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, currentUser: action.payload };
    case "TOGGLE_MODE":
      return { ...state, mode: state.mode === "light" ? "dark" : "light" };
    case "TOGGLE_EMOJI":
      return { ...state, emoji: state.emoji === "happy" ? "sad" : "happy" };
    default:
      return state;
  }
};

const initialState = {
  currentUser: { name: "Guest" },
  mode: "light",
  emoji: "happy",
};

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleUpdateUser = (user) => {
    dispatch({ type: "UPDATE_USER", payload: user });
  };

  const toggleMode = () => {
    dispatch({ type: "TOGGLE_MODE" });
  };

  const toggleEmoji = () => {
    dispatch({ type: "TOGGLE_EMOJI" });
  };

  return (
    <UserContext.Provider
      value={{ currentUser: state.currentUser, handleUpdateUser, mode: state.mode, toggleMode, emoji: state.emoji, toggleEmoji }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};