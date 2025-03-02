const ExecuteFunction = ({ myFunction }) => {
    return (
        <div className="execute__function flex flex-col items-center justify-center">
            <h1 className="text-3xl font-light component__module"> Event From Father Component </h1>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer" onClick={myFunction}> Event Fron Father </button>
        </div>
    )
}

export default ExecuteFunction