import React from 'react';
import Layout from '../components/Layout';

import Head from '../components/Head';

const Contact = () =>
  <div className="Contact">
    <Layout title="Contact">
      <Head title="Contact" />
      
      <form action="/dh1/contact/#wpcf7-f1754-p6-o1" method="post" class="wpcf7-form" novalidate="novalidate"><div style={{display: 'none'}}> <input type="hidden" name="_wpcf7" value="1754" /> <input type="hidden" name="_wpcf7_version" value="5.1.8" /> <input type="hidden" name="_wpcf7_locale" value="en_US" /> <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1754-p6-o1" /> <input type="hidden" name="_wpcf7_container_post" value="6" /> <input type="hidden" name="g-recaptcha-response" value="" /></div><p><label> Your Name (required) <span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" /></span> </label></p><p><label> Your Email (required) <span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" /></span> </label></p><p><label> Your Phone Number <span class="wpcf7-form-control-wrap tel-443"><input type="tel" name="tel-443" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" /></span> </label></p><p><label>How did you hear about us? <span class="wpcf7-form-control-wrap menu-838"><select name="menu-838" class="wpcf7-form-control wpcf7-select" aria-invalid="false"><option value="Advertisement">Advertisement</option><option value="Cold Call">Cold Call</option><option value="Employee Referral">Employee Referral</option><option value="External Referral">External Referral</option><option value="Online Store">Online Store</option><option value="Partner">Partner</option><option value="Trade Show">Trade Show</option><option value="Web Research">Web Research</option><option value="Chat">Chat</option></select></span></label></p><p><label> Your Message<br /> <span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea></span> </label></p><div class="wpcf7-form-control-wrap"><div data-sitekey="6LcLj_QUAAAAAH2x9o72lGJTE5A3O2fPkXO0itaj" class="wpcf7-form-control g-recaptcha wpcf7-recaptcha"><div style={{width: '304px', height: '78px'}}><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcLj_QUAAAAAH2x9o72lGJTE5A3O2fPkXO0itaj&amp;co=aHR0cDovL2Rhcmtob3JzZXdvb2R3b3Jrcy5jb206ODA.&amp;hl=en&amp;v=JPZ52lNx97aD96bjM7KaA0bo&amp;size=normal&amp;cb=r95qhl6fjb22" width="304" height="78" role="presentation" name="a-b5d7cixkgmr7" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px,padding: 0px', resize: 'none', display: 'none'}}></textarea></div><iframe style={{display: 'none'}}></iframe></div> <noscript><div class="grecaptcha-noscript"> <iframe src="https://www.google.com/recaptcha/api/fallback?k=6LcLj_QUAAAAAH2x9o72lGJTE5A3O2fPkXO0itaj" frameborder="0" scrolling="no" width="310" height="430"> </iframe><textarea name="g-recaptcha-response" rows="3" cols="40" placeholder="reCaptcha Response Here">
		</textarea></div> </noscript></div><p><input type="submit" value="Send" class="wpcf7-form-control wpcf7-submit" /><span class="ajax-loader"></span><br /> 
{/*     
    <script>document.addEventListener( 'wpcf7mailsent', function( event ) {
    location = 'http://darkhorsewoodworks.com/dh1/message-sent/';
}, false );</script> */}

</p><div class="wpcf7-response-output wpcf7-display-none" aria-hidden="true"></div></form>

    </Layout>
  </div>

export default Contact;