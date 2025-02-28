import { useState } from "react"

function ListRender() {

    const [list] = useState(["Maria", "Pedro", "José"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Maria", age: 31},
        {id: 2, name: "Pedro", age: 28},
        {id: 3, name: "José", age: 24},
        {id: 4, name: "Lucas", age: 18},
        {id: 5, name: "Ana", age: 22},
    ]);

    const deleteRandomUsers = () => {
        const randomNumber = Math.floor(Math.random() * 6);
        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }

    return (
        <div className="list-names flex flex-col items-center justify-center">

            {/* Sem o Key Property */}
           <div>
             <ul>
                {
                    list.map((item, i) => (
                        <li key={i}> {item} </li>
                    ))
                }
            </ul>
           </div>

            {/* Com o Key Property */}
            <div>
                <ul>
                    {
                        users.map((user) => (
                            <li key={user.id}> {user.name} - {user.age} anos </li>
                        ))
                    }
                </ul>
            </div>

            {/* Previuos state */}
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-2 cursor-pointer" onClick={deleteRandomUsers}> Delete Random User </button>
        </div>
    )
}

export default ListRender;