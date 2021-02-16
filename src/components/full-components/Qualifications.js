import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import useVisibility from 'utils/useVisibility';
import screenSizes, { white, azureRadiance } from 'utils/variables';
import '../../styles/fadein.scss';

const MainText = styled.div`
  color: ${azureRadiance};
  font-size: 45px;
  text-align: center;
  padding-bottom: 1.5rem;

  @media (max-width: ${screenSizes.smallTablet}) {
    font-size: 36px;
  }

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 30px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
  padding: 10rem 2rem 4rem;
  margin: 0 5% 0 10%;
  z-index: 99;

  @media (max-width: ${screenSizes.tablet}) {
    margin: 0 auto;
  }

  @media (max-width: ${screenSizes.smallTablet}) {
    max-width: 500px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: ${screenSizes.smallDesktop}) {
    &:first-child {
      padding: 0 0 0 2rem;
    }
  }

  @media (max-width: ${screenSizes.tablet}) {
    &:first-child {
      padding: 0;
    }

    &:last-child {
      padding: 0 0 0 2rem;
    }
  }

  @media (max-width: ${screenSizes.smallTablet}) {
    justify-content: center;
    &:last-child {
      padding: 0;
    }
  }
`;

const StyledSkillsContainer = styled(SkillsContainer)`
  padding: 0 2.5rem 0 0;

  &:first-child {
    padding: 0 2.5rem 0 0;
  }

  @media (max-width: ${screenSizes.tablet}) {
    &:last-child {
      padding: 0;
    }
  }

  @media (max-width: ${screenSizes.smallTablet}) {
    &:first-child {
      padding: 0;
    }

    &:last-child {
      display: none;
    }
  }
`;

const SkillName = styled.div`
  color: ${white};
  font-size: 15px;
  line-height: 20px;
  width: 130px;

  @media (max-width: ${screenSizes.tablet}) {
    font-size: 12px;
    width: 100px;
  }

  @media (max-width: ${screenSizes.smallTablet}) {
    width: 100%;
    font-size: 15px;
  }

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 14px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SkillRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 0;
`;

const BigText = styled.div`
  color: ${white};
  font-size: 20px;
  padding: 1.5rem 0;

  @media (max-width: ${screenSizes.smallDesktop}) {
    font-size: 18px;
  }

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 16px;
  }
`;

const StyledBigText = styled(BigText)`
  @media (max-width: ${screenSizes.smallTablet}) {
    width: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: ${screenSizes.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${screenSizes.smallTablet}) {
    flex-direction: column;
  }
`;

const Dot = styled.img`
  width: 12px;
  height: 12px;
  padding: 2px;
`;

const Qualifications = ({
  title,
  languagesTitle,
  languages,
  frameworksTitle,
  frameworks,
  scrollToComponent,
}) => {
  const [isVisible, currentElement] = useVisibility(0, 100, false);

  const { emptyDot, fullDot } = useStaticQuery(graphql`
    query {
      emptyDot: file(relativePath: { eq: "dots/empty.svg" }) {
        publicURL
      }
      fullDot: file(relativePath: { eq: "dots/full.svg" }) {
        publicURL
      }
    }
  `);

  const renderSkill = (skill, index) => (
    <SkillRow className={isVisible && 'qualifications'} key={index}>
      <SkillName>{skill.name}</SkillName>
      <DotsContainer>
        {[...Array(skill.level)].map(() => (
          <Dot src={fullDot.publicURL} />
        ))}
        {[...Array(5 - skill.level)].map(() => (
          <Dot src={emptyDot.publicURL} />
        ))}
      </DotsContainer>
    </SkillRow>
  );

  return (
    <MainContainer ref={currentElement}>
      <MainText {...scrollToComponent}>{title}</MainText>
      <FlexContainer>
        <SkillsContainer>
          <StyledBigText>{languagesTitle}</StyledBigText>
          {languages.map(renderSkill)}
        </SkillsContainer>
        <SkillsContainer>
          <BigText>{frameworksTitle}</BigText>
          <FlexContainer>
            <StyledSkillsContainer>{frameworks.slice(0, 6).map(renderSkill)}</StyledSkillsContainer>
            <StyledSkillsContainer>{frameworks.slice(6).map(renderSkill)}</StyledSkillsContainer>
          </FlexContainer>
        </SkillsContainer>
      </FlexContainer>
    </MainContainer>
  );
};

Qualifications.propTypes = {
  title: PropTypes.string.isRequired,
  languagesTitle: PropTypes.string.isRequired,
  frameworksTitle: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.number,
    })
  ).isRequired,
  frameworks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.number,
    })
  ).isRequired,
  scrollToComponent: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    current: PropTypes.object,
  }).isRequired,
};

export default Qualifications;
