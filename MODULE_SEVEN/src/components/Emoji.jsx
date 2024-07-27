import React, { useState } from "react";

export const MoodToggler = () => {
  const [mood, setMood] = useState("happy");
  const happyEmoji = '(づ｡◕‿‿◕｡)づ';
  const sadEmoji = '( ಠ ͜ʖ ರೃ)';
  
  const toggleMood = () => {
    setMood(prevMood => prevMood === "happy" ? "sad" : "happy");
  };
  
  return (
    <div>
      <h1>Current Mood:</h1>
      <h1>{mood === "happy" ? happyEmoji : sadEmoji}</h1>
      <button onClick={toggleMood}>Toggle Mood</button>
    </div>
  );
};
