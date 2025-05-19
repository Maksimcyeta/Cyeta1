import logo from '../resource/img/icons/logo-cyeta-white.svg'
import arrow from '../resource/img/icons/arrow-up-right-white.svg'
import {NavLink} from "react-router-dom";
import axios from "axios";

function Footer(){
    const sendEmail = (e)=>{
        e.preventDefault();

        let footerEmail = document.getElementById('footerEmail')
        if(footerEmail.value==='')
            return
        const data = JSON.stringify({
            email:footerEmail.value,
        })
        const options = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        axios.post("http://localhost:8081/mail",data,options)
            .then(response => console.log("response", response.data))
            .catch(error => console.log(error))
            .finally(footerEmail.value='')
    }
    return (
        <div className="background">
            <footer className="content footer">
                <div className="flex-wrapper">
                    <div className="footer-content">
                        <div className="footer-content__item">Auckland, New Zealand</div>
                        <div className="footer-content__item">
                            <h5>CONTACT US</h5>
                            <div>022 410 9004</div>
                            <div>cyetaltd@gmail.com</div>
                        </div>
                        <div className="footer-content__item">
                            <h5>SERVICES</h5>
                            <div>Residential</div>
                            <div>Commercial</div>
                            <div>Subcontracting</div>
                        </div>
                    </div>
                    <div className="footer-feedback">
                        <div className="footer-feedback__input">
                            <input id='footerEmail' type="email" placeholder="Enter you email for a free quote" required/>
                            <img src={arrow} alt="" onClick={(e)=>sendEmail(e)}/>
                        </div>
                        <p>© 2021 Cyeta LTD. All rights reserved</p>
                    </div>
                </div>
                <div className="footer-menu">
                    <NavLink to="/">
                        <img className="logo" alt="logo" src={logo}/>
                    </NavLink>
                    <nav className="menu">
                        <ul className="menu-list">
                            <li className="menu-list__link"><NavLink to="">Home</NavLink></li>
                            <li className="menu-list__link"><NavLink to="/projects">Projects</NavLink></li>
                            <li className="menu-list__link"><NavLink to="/services">Services</NavLink></li>
                            <li className="menu-list__link"><NavLink to="/aboutUs">About us</NavLink></li>
                            <li className="menu-list__link"><NavLink to="#">Contact us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </footer>
            <footer className="content mobileFooter">
                <div className="flex-wrapper">
                    <div className="footer-feedback__input">
                        <input id='footerEmail' type="email" placeholder="Enter you email for a free quote" required/>
                        <img src={arrow} alt="" onClick={(e)=>sendEmail(e)}/>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content__item">
                            <h5>CONTACT US</h5>
                            <div>022 410 9004</div>
                            <div>cyetaltd@gmail.com</div>
                        </div>
                        <div className="footer-content__item">
                            <h5>SERVICES</h5>
                            <div>Residential</div>
                            <div>Commercial</div>
                            <div>Subcontracting</div>
                        </div>
                    </div>
                    <div className="homeSpot">Auckland, New Zealand</div>
                    <NavLink to="/">
                        <img className="logo" alt="logo" src={logo}/>
                    </NavLink>
                    <p>© 2021 Cyeta LTD. All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer