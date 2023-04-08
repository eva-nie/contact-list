import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateNewContact = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');

    const addContactButtonHandler = () => {
        const newContact = {
            name,
            number: phone,
            category
        };
        props.addContact(newContact);
    };


    return (
        <div>
            <h2>Create new contact</h2>
            <input
                onChange = { (e) => setName(e.target.value) }
                value = { name }
                type = 'text'
                placeholder = 'name' />
            <br />
            <input
                onChange = { e => setPhone(e.target.value) }
                value = { phone }
                type = 'tel'
                placeholder = 'phone number' />
            <br />
            <label>Choose category:</label>
            <select onChange = { e => setCategory(e.target.value) } value = { category }>
                <option value = 'Friends'>Friends</option>
                <option value = 'Colleagues'>Colleagues</option>
                <option value = 'Family'>Family</option>
            </select>
            <br />
            <button onClick={addContactButtonHandler}>Add Contact</button>


        </div>
    );
};

export default CreateNewContact;