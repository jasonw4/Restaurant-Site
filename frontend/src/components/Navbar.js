import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav class = "nav">
                {/* Add homepage image link here*/}
                <ul>
                    <li>
                        Menu
                    </li>
                    <li>
                        Checkout
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            </nav>
        );
    }
}


