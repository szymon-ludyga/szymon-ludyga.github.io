import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import screenSizes, { white, azureRadiance } from 'utils/variables';

const FooterWrapper = styled.div`
  color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1rem 4rem;

  @media (max-width: ${screenSizes.smallTablet}) {
    padding: 1.5rem 1rem 2.25rem;
  }

  @media (max-width: ${screenSizes.mobile}) {
    padding: 0 0 1.5rem;
  }
`;

const IconWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  border: 1px solid ${white};
  margin: 10px;

  @media (max-width: ${screenSizes.mobile}) {
    height: 30px;
    width: 30px;
  }
`;

const IconsRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0 1.75rem;

  @media (max-width: ${screenSizes.mobile}) {
    padding: 0;
  }
`;

const TextAndIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 1rem 0;

  @media (max-width: ${screenSizes.mobile}) {
    flex-direction: column;
    padding: 0.75rem 0;
  }
`;

const Text = styled.div`
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${azureRadiance};
  padding: 0 1.75rem;

  @media (max-width: ${screenSizes.mobile}) {
    padding: 0.5rem 0;
    font-size: 22px;
  }
`;

const StyledIcon = styled.img`
  width: 20px;
  height: 100%;

  @media (max-width: ${screenSizes.mobile}) {
    width: 15px;
  }
`;

const Hr = styled.hr`
  border: 0.25px solid ${azureRadiance};
  width: 100%;
`;

const Footer = ({ contactLinks }) => {
  const { githubIcon, linkedinIcon, mailIcon } = useStaticQuery(graphql`
    query {
      githubIcon: file(relativePath: { eq: "contact/github-icon.svg" }) {
        publicURL
      }
      linkedinIcon: file(relativePath: { eq: "contact/linkedin-icon.svg" }) {
        publicURL
      }
      mailIcon: file(relativePath: { eq: "contact/mail-icon.svg" }) {
        publicURL
      }
    }
  `);

  const elements = [
    {
      icon: githubIcon,
      link: contactLinks.github,
    },
    {
      icon: linkedinIcon,
      link: contactLinks.linkedin,
    },
    {
      icon: mailIcon,
      link: contactLinks.mail,
    },
  ];

  return (
    <>
      <Hr />
      <FooterWrapper>
        <TextAndIcons>
          <Text>Say hi!</Text>
          <IconsRow>
            {elements.map((element, index) => (
              <IconWrapper
                key={element.link}
                href={element.link}
                target={!element.link.includes('mailto') ? '_blank' : ''}
                rel={!element.link.includes('mailto') ? 'noopener norefferer' : ''}
              >
                <StyledIcon src={element.icon.publicURL} alt={`contact${index + 1}`} />
              </IconWrapper>
            ))}
          </IconsRow>
        </TextAndIcons>
        © {new Date().getFullYear()} Szymon
      </FooterWrapper>
    </>
  );
};

Footer.propTypes = {
  contactLinks: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
    mail: PropTypes.string,
  }).isRequired,
};

export default Footer;
