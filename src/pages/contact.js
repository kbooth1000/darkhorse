import React, { useState, useEffect } from "react"
import axios from "axios";
import Recaptcha from 'react-gcaptcha';
import { Link } from "gatsby";
import Layout from "../components/layout"
import Head from '../components/Head';


const Contact = () => {

  const callback = (key) => {
    console.log('key', key);
  };
  const loaded = () => {
    console.log('recaptchaLoaded');
  };

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      console.log('msg:', msg);
      // form.reset();
      form.innerText = {msg}
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/1686b915-5791-47a2-b067-bd33238f44e5",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thank You! Your message has been sent.", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
 
  useEffect(()=>console.log('recaptcha load'), [])

  return (
    <Layout title="Contact">
<Head title="Contact Us" />
      <div>
        <div className="col-md-8 mt-5">
        {!serverState.status && (
          <form onSubmit={handleOnSubmit}>
        <br />
        <br />
        <p>
          <label> Your Name (required) <span className="contact-name">
            <input type="text" name="your-name" size="40" />
          </span> </label>
        </p>
        <p>
          <label> Your Email (required) <span className="wpcf7-form-control-wrap your-email">
            <input type="email" name="your-email" size="40" />
          </span> </label>
        </p>
        <p>
          <label> Your Phone Number <span className="contact-tel">
            <input type="tel" name="tel-443" size="40" />
          </span> </label>
        </p>
        <p>
          <label>How did you hear about us? <span className="contact-source">
            <select name="contact-source" className="wpcf7-form-control wpcf7-select" aria-invalid="false">
              <option value="Advertisement">Advertisement</option>
              <option value="Cold Call">Cold Call</option>
              <option value="Employee Referral">Employee Referral</option>
              <option value="External Referral">External Referral</option>
              <option value="Online Store">Online Store</option>
              <option value="Partner">Partner</option>
              <option value="Trade Show">Trade Show</option>
              <option value="Web Research">Web Research</option>
              <option value="Chat">Chat</option>
            </select>
          </span>
          </label>
        </p>
        <p>
          <label>Your Message<br />
          <span className="contact-message">
            <textarea name="your-message" cols="40" rows="10">
            </textarea>
          </span>
          </label>
        </p>
<div style={{background:'#ddd', width:'305px'}}>
        <Recaptcha
    sitekey='6LcLj_QUAAAAAH2x9o72lGJTE5A3O2fPkXO0itaj'
    onloadCallback={loaded}
    verifyCallback={callback}
    >
          ...LOADING...
    </Recaptcha></div>
    <p>&nbsp;
        </p>
        <p>
          <input type="submit" value="Send" disabled={serverState.submitting} />
          <br />

        </p>
        <div className="wpcf7-response-output wpcf7-display-none" aria-hidden="true">
        </div> 

        </form>
        )}

            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
          <br />
          <br />
                {serverState.status.msg}
              </p>
            )}
        </div>
      </div>

    </Layout>

  );
};

export default Contact;