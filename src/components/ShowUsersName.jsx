const ShowUsersName = (props) => {
    return (
        <div className="flex flex-col props">
            <h3 className="text-2xl font-semibold mt-2"> Property </h3>
            <h2> The user name is {props.name} </h2>
        </div>
    )
}

export default ShowUsersName