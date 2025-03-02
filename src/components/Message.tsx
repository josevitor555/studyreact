import React from 'react';

interface MessageProps {
    msg: string;
}

const Message: React.FC<MessageProps> = ({ msg }: MessageProps) => {
    return (
        <div className="text-center">
            <p className="text-2xl font-semibold"> The Message is: {msg} </p>
        </div>
    )
}

export default Message
