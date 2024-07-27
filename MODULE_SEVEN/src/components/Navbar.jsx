import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export const NavBar = () => {
    const {mode} = useUserContext();

const linkList = [
    { to: "/lab-one", lable: "Lab One"},
    { to: "/lab-two", lable: "Lab Two"},
    { to: "/slide-work", lable: "Slide Work"},
    { to: "/custom-hook", lable: "Custom Hook"},
    { to: "/context-work", lable: "Context Work"},
];

const linkListDisplayHandler = () => {
    return linkList.map((linkObject) => {
        return (
            <li key={linkObject.to}>
                <NavLink to={linkObject.to}>{linkObject.lable}</NavLink>
            </li>
        );
    });
};
return (
    <nav className="NavBar"
    style={{backgroundColor: mode === 'light' ? 'white' : 'black'
            , color: mode === 'light' ? 'white' : 'black'}}>
    <ul className="menu">
    <li><NavLink to="/">Home</NavLink></li>
        {linkListDisplayHandler()}
    </ul>
    </nav>
    );
};




