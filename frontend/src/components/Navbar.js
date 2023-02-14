import React, { Component, NavWrapper } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {
    render() {
        return (
            <NavWrapper className = "test_class">
                <ul>
                    <li>
                        Home
                    </li>
                </ul>

            </NavWrapper>
        )
    }
}

