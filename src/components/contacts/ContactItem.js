import React from 'react';

const ContactItem = (props) => {

    console.log(props);
    return (
        <li >
            {props.contact.name}
            {': '}
            {props.contact.number}
        </li>
    );
};

export default ContactItem;