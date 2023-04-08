import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from '../components/contacts/All';
import Friends from '../components/contacts/Friends';
import Colleagues from '../components/contacts/Colleagues';
import Family from '../components/contacts/Family';
import CreateNewContact from '../components/CreateNewContact';

const Router = (props) => {
    return (
        <Routes>
            <Route path = '/' element = { <CreateNewContact addContact={props.addContact} /> } />
            <Route path = '/all_contacts' element = { <All allContacts = { props.contacts } /> } />
            <Route path = '/friends'
                   element = { <Friends friends = { props.contacts.filter(el => el.category === 'Friends') } /> } />
            <Route path = '/colleagues' element = { <Colleagues colleagues = {props.contacts.filter(el=> el.category === 'Colleagues' )} /> } />
            <Route path = '/family' element = { <Family family = { props.contacts.filter(el => el.category === 'Family') } /> } />

        </Routes>);
};

export default Router;