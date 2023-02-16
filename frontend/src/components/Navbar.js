import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className = "navbar">
                <nav class = "nav">
                {/* Add homepage image link here*/}
                <ul>
                    <li>
                        <Link to="/">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/checkout">
                            Checkout
                        </Link>
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            </nav>
            </div>
        
        );
    }
}


