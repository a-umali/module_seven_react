import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import { WelcomePage } from "./containers/WelcomePage";
import { LabOne } from "./components/LabOne";
import LabTwo from "./components/LabTwo";
import { SlideWork } from "./containers/SlideWork";
import { CustomHookExamples } from "./containers/CustomHookExamples";
import { ContextWork } from "./containers/ContextWork";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="lab-one" element={<LabOne />} />
        <Route path="lab-two" element={<LabTwo />} />
        <Route path="slide-work" element={<SlideWork />} />
        <Route path="custom-hook" element={<CustomHookExamples />} />
        <Route path="context-work" element={<ContextWork />} />
        <Route path="*" element={<div> This path doesn't exist...</div>} />
      </Routes>
    </UserProvider>
  );
};

export default App;