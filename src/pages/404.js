import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Head from '../components/Head';

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page not found" />
      <div className="NotFound">
        <h1>Page not found.</h1>
        <p><Link to="/">Go home</Link></p>
      </div>
    </Layout>
  )
}

export default NotFound;