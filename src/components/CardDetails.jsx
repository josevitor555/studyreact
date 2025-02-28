const CardDetails = ({brand, km, color}) => {
    return (
        <div className="flex flex-col card__details">
            <h3 className="text-2xl font-semibold mt-2"> Car Details </h3>
            <ul>
                <li> Brand: {brand} </li>
                <li> Km: {km} </li>
                <li> Color: {color} </li>
            </ul>
        </div>
    )
}

export default CardDetails