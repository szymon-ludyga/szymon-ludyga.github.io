import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { codGray } from 'utils/variables';
import './layout.scss';

const LayoutBackground = styled.div`
  background-color: ${codGray};
  position: relative;
`;

const Layout = ({ children }) => <LayoutBackground>{children}</LayoutBackground>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
