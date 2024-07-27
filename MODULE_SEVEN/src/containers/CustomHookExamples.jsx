import React from "react"
import SubscribeForm from "../components/SubscribeForm";

export const CustomHookExamples = () => {
    // state var

    // function

    //return
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
            }}>

            <h4>Custom Hook Examples</h4>
            <ExampleDecorator>
                <>
                <h5>Subscrube form</h5>
                <SubscribeForm />
                </>
                <div>test</div>
            </ExampleDecorator>
        </div>
    );

    const ExampleDecorator = ({children}) => {

        return (
            <div 
                className="exampleDecorator" 
                style={{
                    border:'solid blue px', 
                    width: '100%', 
                    padding: '10px', 
                    margin: '10px'}}>
            {children}
            </div>
        );
    };
};