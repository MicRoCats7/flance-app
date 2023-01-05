import React, { Component } from 'react'
import companylogo from '../../image/heroImage/Flance.svg'
// import profile from '../../image/profile-amri-al.jpg'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <div className='navbar-logo'>
                    <img src={companylogo} alt="Flance Logo"/>
                </div>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'uil uil-multiply' : 'uil uil-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <div className='navbar-profile'>
                    <img src={profile} alt='profile amri' />
                </div> */}

                <div className='button-SL'>
                    <button className='btn-login'>Login</button>
                    <button className='btn-signin'>Sign in</button>
                </div>
            </nav>
        )
    }
}

export default Navbar