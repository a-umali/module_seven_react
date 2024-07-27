import { useState } from "react";
import { LabOne } from "../components/LabOne";
import { LabTwo } from "../components/LabTwo";
import { SlideWork } from "./SlideWork";
import { CustomHookExamples } from "./CustomHookExamples";
import { ContextWork } from "./ContextWork";


    export const WelcomePage = () => {

        const [contentName, setContentName] = useState("");

        const contentConfig = [{ lab: " Lab 1" }, { lab: " Lab 2" }, { lab: " Lab 3" }, { lab: " Lab 4" }, { lab: "Context work" }];
        // ,{ lab: " Lab 5"}
        //FUNC
        const displayHandler = () => {
            switch (contentName) {
                case contentConfig[0].lab:
                    return <LabOne />;
                case contentConfig[1].lab:
                    return <LabTwo />;
                case contentConfig[2].lab:
                    return <SlideWork />;
                case contentConfig[3].lab:
                    return <CustomHookExamples />;
                case contentConfig[4].lab:
                    return <ContextWork />;
                // case contentConfig[4].lab:
                //   return <LabFive />;
                default:
                    return <div> Click on a Lab button to see the content</div>;
            };
        };


        const buttonConstructor = () => {
            const buttonElementArray = contentConfig.map((content) => {
                return (
                    <button
                        key={content.lab}
                        onClick={() => setContentName(content.lab)}
                        style={{ margin: "5px" }}
                    >
                        {content.lab}
                    </button>
                );
            });

            return buttonElementArray;
        };



        return (
            <div>
                <p>Welcome Page!</p>
                <div>{displayHandler}</div>
                <div>{buttonConstructor}</div>
            </div>
        );
    };