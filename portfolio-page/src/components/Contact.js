import React from 'react'
import { useState } from 'react';

function Contact() {

    const [name, setUsersName] = useState("");
    const handleEvent = (e) => {
        if(document.getElementById('name').value.match(/[A-Z]/g)){
            let alertName="Thanks "+document.getElementById('name').value+"!";
            let form=document.getElementById('contact-form');
            setUsersName(alertName)
            setTimeout(() => {
                form.reset();
            }, 1000);
            setTimeout(() => {
                setUsersName("");
            }, 8000);
        }
    }

    return (
        <div className='contacts-container' id="contact"> 
            <div className='contact-background-image'>
                <div className='about-title-text'>
                        <h1>CONTACT</h1>
                        <div className='about-line-break'/>
                        <p>Submit a form below to contact me personally</p>
                </div> 
                <div className='contacts-form-container'>
                    <div />
                    <form className='contact-form' action='https://formsubmit.co/d83cc29896e6bc310ecc32322315c14a' method="POST" target="_blank" id="contact-form">
                        <div className='form-item-container'>
                            <div />
                            <div className='form-items'>
                                <label>NAME</label>
                                <input className='form-text-box1' id='name' type="text" name="name" placeholder='Enter Your Name' required></input>
                                <label>EMAIL</label>
                                <input className='form-text-box1' id='email' type="email" name="email" placeholder='Enter Your Email' required></input>
                                <label>MESSAGE</label>
                                <textarea className='form-text-box2' id='message' type="text" name="message" placeholder='Enter Your Message' required></textarea>
                                <div className='submit-button-container'>
                                    <button className='contact-submit-button' type="submit" onClick={handleEvent}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='thank-you-text'>
                        <p id="my-thanks-alert">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact