import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NF from '../../assets/oops.png';

const NotFoundPage = () => (
  <Layout>
    <div id="nf_page">
      <img src={NF} alt="not found" />
      <SEO title="404: Not found" />
      <h1>404: PAGE MOT FOUND</h1>
      <p>존재하지 않는 페이지 입니다.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
