interface ShowUsersNameProps {
    name: string;
}

const ShowUsersName = (props: ShowUsersNameProps) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mt-2 text-center"> Property </h3>
            <h2 className="text-center"> The user name is {props.name} </h2>
        </div>
    );
};

export default ShowUsersName;
