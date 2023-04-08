import './App.css';
import Header0 from './components/Header0';
// import Header1 from './Header1';
// import Header2 from './Header2';
// import Header3 from './Header3';
import Menu from './components/Menu';
import MenuRouter from './components/MenuRouter';
import { v4 as uuidv4 } from 'uuid';
import Router from './router/Router';
import { useState } from 'react';


function App() {
    const contactListName = 'My Contact List';
    const user = 'Eva';
    const menu = ['All', 'Family', 'Friends', 'Colleagues',];

    const [contacts, setContacts] = useState([
        {
            id: uuidv4(),
            name: 'Bill',
            number: '+1 809 809 809',
            category: 'Friends'
        },
        {
            id: uuidv4(),
            name: 'Anna',
            number: '+1 809 809 809',
            category: 'Colleagues'
        },
        {
            id: uuidv4(),
            name: 'Eva',
            number: '+1 809 809 809',
            category: 'Friends'
        },
        {
            id: uuidv4(),
            name: 'Steve',
            number: '+1 809 809 809',
            category: 'Family'
        },
        {
            id: uuidv4(),
            name: 'Inga',
            number: '+1 809 809 809',
            category: 'Friends'
        },
        {
            id: uuidv4(),
            name: 'Ollly',
            number: '+1 809 809 809',
            category: 'Colleagues'
        },
    ]);

    const addContact = (newContact) => {
        setContacts([...contacts, { ...newContact, id: uuidv4() }]);
    };

    return (
        <div className = 'App'>
            <Header0 contactListName = { contactListName }
                     userName = { user } />
            {/*<Header1*/ }
            {/*    contactListName = { contactListName }*/ }
            {/*    userName = { user } />*/ }
            {/*<Header2 contactListName = { contactListName }*/ }
            {/*         userName = { user } />*/ }
            {/*<Header3 contactListName = { contactListName }*/ }
            {/*         userName = { user } />*/ }
            <Menu menu = { menu } />
            <MenuRouter />
            <Router contacts = { contacts } addContact={addContact} />

        </div>
    );
}

export default App;
