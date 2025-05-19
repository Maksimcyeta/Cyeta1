import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import logo from '../resource/img/icons/logo-cyeta.svg'
import logoWhite from '../resource/img/icons/logo-cyeta-white.svg'
import closeIcon from '../resource/img/icons/close-icon.svg'
import mainIcon from '../resource/img/icons/main-icon.svg'
import phoneIcon from '../resource/img/icons/phone-icon.svg'
import locationIcon from '../resource/img/icons/location-icon.svg'
import burger from '../resource/img/icons/burger-menu-icon.svg'
import burgerWhite from '../resource/img/icons/burger-menu-icon-white.svg'
import ContactForm from "./ContactForm";

function Header(props){
    let location = useLocation()
    const openCloseContacts =()=>{
        const el = document.getElementById('contacts')
        const styles = window.getComputedStyle(el)
        if(styles.getPropertyValue("display") === 'none')
            el.style.display='block'
        else
            el.style.display='none'
    }

    let backgroundColor
    if(location.pathname === '/services'){
        backgroundColor={
            backgroundColor:'rgb(36, 36, 36)'
        }
    }else {
        backgroundColor={
            backgroundColor:'#fcfcff'
        }
    }

    const openMobileMenu=()=> {
        let menu = document.getElementById('mobileMenu')
        const styles = window.getComputedStyle(menu)
        if (styles.getPropertyValue("display") === 'none'){
            menu.style.display = 'block'
        }else
            menu.style.display='none'
    }
    return (
        <React.Fragment>
            <div id="header" className="background header" style={backgroundColor}>
                <header className="content">
                    <div className="flex-wrapper">
                        <NavLink to="/">
                            <img src={location.pathname === '/services' ? logoWhite : logo} alt="logo" className="logo"/>
                        </NavLink>
                        <div className="action-menu">
                            <nav className="menu">
                                <ul className="menu-list">
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/">Home</NavLink></li>
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/projects">Projects</NavLink></li>
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/services">Services</NavLink></li>
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/aboutUs">About us</NavLink></li>
                                    <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="#" onClick={openCloseContacts}>Contact us</NavLink></li>
                                </ul>
                            </nav>
                            <button className="contactUs" onClick={()=>props.openCloseRequestForm()}><span>Request a Quote</span></button>
                        </div>
                        <img id="burger" className="burger" src={location.pathname === '/services' ? burgerWhite : burger} alt="burger" onClick={()=>openMobileMenu()}/>
                    </div>
                    <div id="mobileMenu" className="mobileMenu">
                        <nav className="menu">
                            <ul className={location.pathname === '/services' ? 'menu-list grayBackground' : 'menu-list'}>
                                <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/">Home</NavLink></li>
                                <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/projects">Projects</NavLink></li>
                                <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/services">Services</NavLink></li>
                                <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="/aboutUs">About us</NavLink></li>
                                <li className="menu-list__link"><NavLink className={location.pathname === '/services' ? 'whiteFont' : ''} to="#" onClick={openCloseContacts}>Contact us</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="contacts">
                        <div className="flex-wrapper">
                            <h2>CONTACT US</h2>
                            <div className="contacts-content">
                                <div className="contacts-content__item">
                                    <img src={locationIcon} alt=""/>
                                    <span>Auckland, New Zealand</span>
                                </div>
                                <div className="contacts-content__item">
                                    <img src={phoneIcon} alt=""/>
                                    <span>022 410 9004</span>
                                </div>
                                <div className="contacts-content__item">
                                    <img src={mainIcon} alt=""/>
                                    <span>cyetaltd@gmail.com</span>
                                </div>
                            </div>
                            <img className="close" src={closeIcon} alt="closeIcon" onClick={openCloseContacts}/>
                        </div>
                    </div>
                </header>
            </div>
            <div id="popup-fade" className="popup-fade hidden"></div>
            <div id="RequestForm" className="RequestForm">
                <ContactForm close={true} openCloseRequestForm={props.openCloseRequestForm}/>
            </div>
        </React.Fragment>
    )
}

export default Header