function ConditionalRender() {
    const x: boolean = true;
    const name: string = "Luna";

    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold"> Is it open? </h3>
            {x && <p> If x is equal to true, yes! </p>}

            {/* Else */}
            <h3 className="text-2xl font-semibold mt-2"> Ternary render </h3>
            {name === "José" ? (
                <div>
                    <p> Hello, José! </p>
                </div>
            ) : (
                <div>
                    <p> Name not found! </p>
                </div>
            )}
        </div>
    );
}

export default ConditionalRender;
