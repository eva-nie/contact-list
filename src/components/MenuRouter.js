import React from 'react';
import { Link, Route } from 'react-router-dom';
import Router from '../router/Router';

const flexBox = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    margin: '30px',
};
const flexChild = {
    width: '100px',
};
const MenuRouter = () => {
    return (
        <div>
            <div style = { flexBox }>
                <div style = { flexChild }>
                    <Link to = { '/' }>Home</Link>
                </div>
                <div style = { flexChild }>
                    <Link to = { '/all_contacts' }>All</Link>
                </div>
                <div style = { flexChild }>
                    <Link to = { '/friends' }>Friends</Link>
                </div>
                <div style = { flexChild }>
                    <Link to = { '/colleagues' }>Colleagues</Link>
                </div>
                <div style = { flexChild }>
                    <Link to = { '/family' }>Family</Link>
                </div>
            </div>

        </div>
    );
};

export default MenuRouter;

