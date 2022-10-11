import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_892o4zc', 'template_a6dzj9d', form.current, 'UCBsCpGErvD7rBtk0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>pereiradossantosgonzalo@gmail.com</h5>
            <a href='mailto:pereiradossantosgonzalo@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp  className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+54 9 3487 313260</h5>
            <a href='https://wa.me/5493487313260' target='_blank'>Send a message</a>
          </article>
        </div>
        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact