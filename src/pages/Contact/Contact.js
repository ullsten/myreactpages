import 'bootstrap/dist/css/bootstrap.css';
import React, {useRef} from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser'
import {Facebook, LinkedIn, Instagram} from '../../img/icons'
import { Link } from 'react-router-dom';

export default function ContactUs () {
  
  var serviceId = "service_4p3t31a";
  var templateId ="template_05s52ly";
  var publicKey = "j6TD1wTjpvjEX0d1r";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <section className='container text-center text-light mt-5'>
      <h1>Would you like to get in touch with me?</h1>
      <p className='fs-3'>Try one of the options</p>
    <section className='row_contact text-center text-light'>
      <section className='colLeft'>
        <form className="emailForm" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </section>
<div className='colRight'>
  <div className='social_Icons'> <a className="px-2" href="https://www.facebook.com/LunarMonsterGokka" target='_blank'><img src={Facebook} alt=''></img></a></div>
  <div className='social_Icons m-4'><a className="px-2" href="https://www.instagram.com/ullzten/" target='_blank'><img src={Instagram} alt=''></img></a></div>
  <div className='social_Icons'><a className="px-2" href="https://www.linkedin.com/in/oskar-ullsten-3aaa37251" target='_blank'><img src={LinkedIn} alt=''></img></a></div>
 

  

  
  
  
  
</div>
    </section>
    </section>
  );
};