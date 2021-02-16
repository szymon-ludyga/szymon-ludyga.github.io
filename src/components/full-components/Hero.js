import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TypedText from 'components/shared/TypedText';
import MainImage from 'components/shared/MainImage';

import screenSizes, { white } from 'utils/variables';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 11rem 2rem 4rem;
  margin: 0 auto;

  @media (max-width: ${screenSizes.smallTablet}) {
    padding: 7rem 1rem 1rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 450px;
  z-index: 99;

  @media (max-width: ${screenSizes.mobile}) {
    max-width: 316px;
  }

  @media (max-width: ${screenSizes.smallMobile}) {
    max-width: 90%;
  }
`;

const Text = styled.div`
  color: ${white};
  font-size: 20px;

  @media (max-width: ${screenSizes.smallTablet}) {
    font-size: 14px;

    span {
      display: none;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 316px;
  height: 422px;
  margin-top: 40px;
  z-index: 99;

  @media (max-width: ${screenSizes.smallTablet}) {
    width: 252.8px;
    height: 337.6px;
  }

  @media (max-width: ${screenSizes.smallMobile}) {
    width: 221.2px;
    height: 295.4px;
  }
`;

const Hero = ({
  scrollToComponent,
  typedTextContent,
  firstMainText,
  secondMainText,
  optionalMainText,
}) => (
  <MainContainer {...scrollToComponent}>
    <TextContainer>
      <TypedText content={typedTextContent} />
      <Text>
        <br />
        {firstMainText}
        <br />
        <br />
        {secondMainText} <span>{optionalMainText}</span>
        <br />
      </Text>
    </TextContainer>
    <ImageWrapper>
      <MainImage />
    </ImageWrapper>
  </MainContainer>
);

Hero.propTypes = {
  firstMainText: PropTypes.string.isRequired,
  secondMainText: PropTypes.string.isRequired,
  optionalMainText: PropTypes.string.isRequired,
  typedTextContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollToComponent: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    current: PropTypes.object,
  }).isRequired,
};

export default Hero;
