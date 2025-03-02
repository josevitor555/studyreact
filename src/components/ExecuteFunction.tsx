import React from 'react';
import { Button } from './ui/button';

interface ExecuteFunctionProps {
    myFunction: () => void;
}

const ExecuteFunction: React.FC<ExecuteFunctionProps> = ({ myFunction }) => {
    return (
        <div className="execute__function flex flex-col items-center justify-center">
            <h1 className="text-3xl font-light component__module"> Event From Father Component </h1>
            <Button onClick={myFunction}> Event Fron Father </Button>
        </div>
    )
}

export default ExecuteFunction
