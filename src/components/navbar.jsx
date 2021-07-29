import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './navbar.css'


function Navbar() {

    // handling click function of navbar
    const [click, setClick] = useState(false);
    console.log('re-rendering.....');
    const [button, setButton] = useState(true);

    // setting the click value to true
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
 
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                   <Link to="/" className="navbar-logo">
                       TRVL <i className="fab fa-typo3"></i>
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? "fas fa-times" : 'fas fa-bars'}/>

                   </div>
                   <ul className={click ? 'nav-menu active': 'nav-menu'}>
                       <li className="nav-item">
                           <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
                       </li>
                   </ul>
                   {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}
 
export default Navbar;

