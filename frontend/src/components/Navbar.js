import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav class = "nav">
                <ul>
                    <li>
                        <Link to="/">
                            Other
                        </Link>
                    </li>
                    <li>
                    Other
                    </li>
                </ul>
            </nav>
        );
    }
}


