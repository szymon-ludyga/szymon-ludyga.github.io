import React from 'react';
import styled from 'styled-components';

import Layout from 'components/layout';
import SEO from 'components/seo';

import { white } from 'utils/variables';

const NotFound = styled.div`
  color: ${white};
  display: flex;
  justify-content: center;
  font-size: 40px;
  padding: 10rem 4rem;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound>NOT FOUND</NotFound>
  </Layout>
);

export default NotFoundPage;
