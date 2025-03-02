import { useState } from "react"
import { Button } from "./ui/button";

function Data() {

    // let someValue = 1000;

    let [someValue, setSomeValue] = useState<number>(15);
    return (
        <>
            <div className="show-value">
                <h1 className="text-3xl font-bold"> Value: {someValue} </h1>
                {/* <button onClick={() => (someValue = 15)}> Change Value </button> */}
            </div>

            <div className="show-button">
                <Button onClick={() => setSomeValue(someValue + 1)}>
                    Change Value
                </Button>
            </div>
        </>
    );
}
export default Data;
