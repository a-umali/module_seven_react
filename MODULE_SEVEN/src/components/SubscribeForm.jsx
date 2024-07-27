import React, { useState } from "react";

const SubscribeForm = () => {
    const [status, setStatus] = useState('');

    // similar state variables mapped to form inputs
    const [firstName, setFirstName] = useState('Mary');
    const [lastName, setLastName] = useState('Poppins');
    const [email, setEmail] = useState('mary@poppins.com');

    // similar handler functions
    const handleNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);

    function handleSubscribe() {
        setFirstName('');
        setEmail('');
        setStatus(`Thanks for subscribing, ${firstName}!`);
    }

    return (
        <div className="SubscribeForm componentBox">
            <label>
                First name:
                <input value={firstName} onChange={handleNameChange} />
            </label>
            <label>
                Last name:
                <input value={lastName} onChange={handleLastNameChange} />
            </label>
            <label>
                Email:
                <input value={email} onChange={handleEmailChange} />
            </label>
            <button onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
        </div>
    );
};

export default SubscribeForm; // Export as default

export const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return { value, onChange: handleChange };
};