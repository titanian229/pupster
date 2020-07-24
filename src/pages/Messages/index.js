import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import spinnerImage from './spin.gif'
import './style.scss';

const DogMessageContainer = (props) => {

    const [spinnerStyle, setSpinnerStyle] = useState({height: '3em', width: '3em'})
    const [messageStyle, setMessageStyle] = useState({display: 'none'})

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpinnerStyle({...spinnerStyle, display: 'none'})
            setMessageStyle({display: 'block'})
        }, 4000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="text-right mb-3">
            <img src={spinnerImage} style={spinnerStyle} alt="Spinner" />
            <p className="text-right" style={messageStyle}>{props.message}</p>
        </div>
    );
};

const Messages = (props) => {
    const [messages, setMessages] = useState([]);
    const [messField, setMessField] = useState('');
    console.log(messages);
    const displayMessages = messages.map((message, ind) => {
        if (message.dog) {
            return <DogMessageContainer key={ind} className="text-right" message={message.text} />;
        } else {
            return (
                <p key={ind} className="message">
                    {message.text}
                </p>
            );
        }
    });

    const addMessage = () => {
        messages.push(
            { text: messField, dog: false },
            { text: Math.random() > 0.5 ? 'Woof woof!' : 'Woof!', dog: true }
        );
        setMessages(messages);
        setMessField('');
    };

    return (
        <div>
            <h1 className="my-4">Messages</h1>
            <div className="w-75">{displayMessages}</div>
            <InputGroup className="mb-3 w-75">
                <FormControl
                    onChange={(field) => setMessField(field.target.value)}
                    value={messField}
                    // value={messField}
                    placeholder="send a message!"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="info" onClick={addMessage}>
                        Send
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default Messages;
