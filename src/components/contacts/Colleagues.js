import React from 'react';
import ContactItem from './ContactItem';

const Colleagues = (props) => {
    return (
        <div>
            <h2>Colleagues Page</h2>
            { props.colleagues.map(el =>
                <ContactItem key = { el.id } contact = { el } />)
            }
        </div>
    );
};

export default Colleagues;