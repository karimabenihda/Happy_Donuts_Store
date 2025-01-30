import React from 'react';
import '../styles/contact.css';
function Contact() {
  return (
    <>
      <div>
        <h1 style={{textAlign:'center',color:"#d57e7f",fontSize:"45px",fontWeight:'550'}} id='title'>Let's keep in Touch</h1><br />
        <div className="contact-form"> {/* Corrected `classNameName` to `className` */}
          <form>
            <h3 style={{textAlign:'center',color:'#d57e7f'}}>  Contact Us</h3>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="your name"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelpId"
                placeholder="your email"
              />
            </div>

            <div className="mb-3">
              <textarea
                type="text"
                className="form-control"
                placeholder="your message"
              ></textarea>
              <button className="send">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
