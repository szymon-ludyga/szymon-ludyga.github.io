import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import screenSizes, { white } from 'utils/variables';
import { codGray, azureRadiance } from '../../utils/variables';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  padding: 8rem 2rem;
  align-items: center;

  @media (max-width: ${screenSizes.tablet}) {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.div`
  z-index: 99;
  position: relative;
  top: 4px;
  color: ${white};
  font-size: 19px;
  padding-left: 4rem;

  @media (max-width: ${screenSizes.tablet}) {
    padding: 1rem 0;
    font-size: 14px;
  }
`;

const ContactDiv = styled.div`
  z-index: 99;
  color: ${codGray};
  padding-left: 7rem;
  font-size: 65px;
  text-shadow: 1px 1px 1px ${azureRadiance}, 1px -1px 1px ${azureRadiance},
    -1px 1px 1px ${azureRadiance}, -1px -1px 1px ${azureRadiance};

  @media (max-width: ${screenSizes.smallDesktop}) {
    padding-left: 3rem;
  }

  @media (max-width: ${screenSizes.tablet}) {
    padding: 0;
    font-size: 48px;
  }
`;

const Image = styled.img`
  z-index: 99;
  position: absolute;
  width: 173px;
  right: 150px;

  @media (max-width: ${screenSizes.smallDesktop}) {
    right: 100px;
  }

  @media (max-width: ${screenSizes.tablet}) {
    width: 120px;
    right: 75px;
    top: 20px;
  }

  @media (max-width: ${screenSizes.smallTablet}) {
    right: calc(50% - 60px);
    top: -100px;
  }
`;

const Contact = ({ scrollToComponent }) => {
  const { wifi } = useStaticQuery(graphql`
    query {
      wifi: file(relativePath: { eq: "wifi.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <MainContainer {...scrollToComponent}>
      <ContactDiv>Contact: </ContactDiv>
      <Text>szymon.ludyga2@gmail.com</Text>
      <Image src={wifi.publicURL} alt="contact" />
    </MainContainer>
  );
};

Contact.propTypes = {
  scrollToComponent: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    current: PropTypes.object,
  }).isRequired,
};

export default Contact;
