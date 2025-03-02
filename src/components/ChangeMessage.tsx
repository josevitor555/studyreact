import React from 'react';
import { Button } from "./ui/button";

interface ChangeMessageProps {
    handleMessage: (message: string) => void;
}

const ChangeMessage: React.FC<ChangeMessageProps> = ({ handleMessage }) => {
    const messages: string[] = ["José!", "Vitor", "Sousa", "Feitosa"];
    return (
        <div className="state-lift flex items-center justify-center gap-3">
            <Button onClick={() => handleMessage(messages[0])}> 1 </Button>
            <Button onClick={() => handleMessage(messages[1])}> 2 </Button>
            <Button onClick={() => handleMessage(messages[2])}> 3 </Button>
            <Button onClick={() => handleMessage(messages[3])}> 4 </Button>
        </div>
    );
}

export default ChangeMessage;

