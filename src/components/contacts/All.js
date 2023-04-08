import React from 'react';
import ContactItem from './ContactItem';

const All = (props) => {
    return (
        <div>
            <h2>Everyone</h2>
            { props.allContacts.map(el =>
                <ContactItem key = { el.id } contact = { el } />
            )

            }
        </div>
    );
};

export default All;