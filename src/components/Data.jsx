import { useState } from "react"

function Data() {

    // let someValue = 1000;

    let [someValue, setSomeValue] = useState(15);
    return (
        <>
            <div className="show-value">
                <h1 className="text-3xl font-bold"> Value: {someValue} </h1>
                {/* <button onClick={() => (someValue = 15)}> Change Value </button> */}
            </div>

            <div className="show-button">
                <button type="button" className="text-white bg-gray-800 p-8 cursor-pointer" onClick={() => setSomeValue(someValue + 1)}> Change Value </button>
            </div>
        </>
    )
}
export default Data;