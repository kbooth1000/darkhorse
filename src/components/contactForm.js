import React from 'react';

const ContactForm = () => {
  return (
    <div className="ContactForm">

      {/* <form method="post" action="https://getform.io/f/d78b0326-4a86-4e9a-9e0d-5f9819c4bb5c">
        ...
  <label>
          Email
    <input type="email" name="email" />
        </label>
        <label>
          Name
    <input type="text" name="name" />
        </label>
        <label>
          Message
    <input type="text" name="message" />
        </label>
        <div className="form-group mt-3">sumb
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
</form> */}



<form method="post" action="https://getform.io/f/1686b915-5791-47a2-b067-bd33238f44e5">
      <p>
        <label> Your Name (required) <span class="contact-name">
          <input type="text" name="your-name" size="40" />
        </span> </label>
        </p>
        <p>
          <label> Your Email (required) <span class="wpcf7-form-control-wrap your-email">
          <input type="email" name="your-email" size="40" />
        </span> </label>
        </p>
        <p>
          <label> Your Phone Number <span class="contact-tel">
          <input type="tel" name="tel-443" size="40" />
        </span> </label>
        </p>
        <p>
          <label>How did you hear about us? <span class="contact-source">
          <select name="contact-source" class="wpcf7-form-control wpcf7-select" aria-invalid="false">
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
          <label> Your Messages<br /> <span class="contact-message">
          <textarea name="your-message" cols="40" rows="10">
          </textarea>
        </span> </label>
        </p>




    <div class="g-recaptcha" data-sitekey="6LcLj_QUAAAAAH2x9o72lGJTE5A3O2fPkXO0itaj"></div>



    <p>
      <input type="submit" value="Send" />
    <br /> 
{/*     
    <script>document.addEventListener( 'wpcf7mailsent', function( event ) {
    location = 'http://darkhorsewoodworks.com/dh1/message-sent/';
}, false );</script> */}

</p><div class="wpcf7-response-output wpcf7-display-none" aria-hidden="true"></div></form>

    </div>
  )
}

export default ContactForm;