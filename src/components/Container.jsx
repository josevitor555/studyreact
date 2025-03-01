const Container = ({ children }) => {
    return (
        <div className="children-prop">
            <h2 className="text-2xl font-extralight"> Children Prop in Reactjs </h2>
            <h1 className="text-3xl font-semibold"> Father Component Content </h1>
            {children}
        </div>
    );
}

export default Container