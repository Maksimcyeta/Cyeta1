import axios from 'axios'
import closeIcon from "../resource/img/icons/close-icon-white.svg"
import React from "react";

function ContactForm(props) {
    const sendEmail = (e)=>{
        e.preventDefault();
        const data = JSON.stringify({
            serviceNeed:document.getElementById('serviceNeed').value,
            name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            phone:document.getElementById('phone').value
        })
        const options = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        axios.post("http://localhost:8081/mail",data,options)
            .then(response => {
                document.getElementById('RequestForm').style.display='none'
                document.getElementById("popup-fade").classList.remove('visible')
                document.getElementById("popup-fade").classList.add('hidden')
            })
            .catch(error => console.log(error))
    }
    const closeImg = props.close ? <img className="close" src={closeIcon} alt="closeIcon" onClick={()=>props.openCloseRequestForm()}/> : ''
    return (
        <form className="contactForm">
            <div className="flex-wrapper">
                <h3 className="contactForm-header">Request a free quote</h3>
                {closeImg}
            </div>
            <label className="inputLabel" htmlFor="serviceNeed">Service needed*</label>
            <select className="contactForm-input" name="serviceNeed" id="serviceNeed" required >
                <option value="">General building job</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
            </select>
            <label className="inputLabel" htmlFor="name">Name*</label>
            <input className="contactForm-input" type="text" name="name" id="name" required/>
            <label className="inputLabel" htmlFor="email">Email*</label>
            <input className="contactForm-input" type="email" name="email" id="email" required/>
            <label className="inputLabel" htmlFor="phone">Phone:</label>
            <input className="contactForm-input" type="phone" name="phone" id="phone" required/>
            <button type="submit" className="contactForm-submit" onClick={(e)=>sendEmail(e)}>Submit</button>
        </form>
    )
}

export default ContactForm