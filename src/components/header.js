import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './css/Header.css';
import { DataContext } from './Context';

export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        const { toggle } = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <FaBars />
                </div>
                <div className="logo">
                    <h1><Link to="/">Nike</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login/ Register</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <FaTimes />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <FaShoppingCart />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}


export default Header;