import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/contactForm';

import Head from '../components/Head';

const Contact = () =>
  <div className="Contact">
    <Layout title="Contact">
      <Head />
      <div className="entry-content">

<ContactForm />


      
</div>
    </Layout>
  </div>

export default Contact;