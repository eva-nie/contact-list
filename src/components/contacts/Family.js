import React from 'react';
import ContactItem from './ContactItem';

const Family = (props) => {
    return (
        <div>
           <h2>Family page</h2>
            { props.family.map(el => <ContactItem key = { el.id } contact = { el } />) }
        </div>
    );
};

export default Family;