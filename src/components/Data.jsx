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
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer" onClick={() => setSomeValue(someValue + 1)}> Change Value </button>
            </div>
        </>
    )
}
export default Data;