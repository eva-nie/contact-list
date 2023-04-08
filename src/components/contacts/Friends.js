import React from 'react';
import ContactItem from './ContactItem';

const Friends = (props) => {
    return (
        <div>
            <h2>Friends</h2>
            { props.friends.map(el => <ContactItem key = { el.id } contact = { el } />) }

        </div>
    );
};

export default Friends;