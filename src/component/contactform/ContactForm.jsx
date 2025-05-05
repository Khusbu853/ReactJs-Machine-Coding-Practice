import React, {useState} from "react";
import './style.css'

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')
    const [isValid, setIsValid] = useState(false)

    const handleSubmit = () => {
        setNameError('');
        setEmailError('');
        setMessageError('');

        let isValidForm = true;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (name === '') {
            setNameError('Name is required');
            isValidForm = false;
        }

        if (email === '') {
            setEmailError('Email is required');
            isValidForm = false;
        } else if (!regex.test(email)) {
            setEmailError('Invalid email format');
            isValidForm = false;
        }

        if (message === '') {
            setMessageError('Message is required');
            isValidForm = false;
        }

        setIsValid(isValidForm);
    };

    return (
        <div class='container'>
            {/* Implement contact form logic here */}
            {isValid === false ? (
                <>
                <h1>Contact Form</h1>
                 <div class='field'>
            <label htmlFor="name" class='label'>Name:</label>
                <input 
                id='name'
                name='name'
                class='input'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            {nameError !== '' && <p class='error'>{nameError}</p>}
            <div class='field'>
            <label htmlFor="email" class='label'>Email:</label>
                        <input 
                id='email'
                name='email'
                class='input'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            {emailError !== '' && <p class='error'>{emailError}</p>}
            <div class='field'>
            <label htmlFor="message" class='label'>Message:</label>
                        <textarea 
                id='message'
                name='message'
                class='input'
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            </div>
            {messageError !== '' && <p class='error'>{messageError}</p>}

            <button onClick={handleSubmit} class='button'>Submit</button>
                </>
            ) : (
                    <h2>
                        Thank you, {name || "User"}!
                    </h2>
           )}
        </div>
    );
}

export default ContactForm;