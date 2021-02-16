import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import screenSizes, { white, azureRadiance } from 'utils/variables';

const MainText = styled.div`
  color: ${azureRadiance};
  z-index: 2;
  font-size: 45px;
  text-align: left;

  @media (max-width: ${screenSizes.smallTablet}) {
    font-size: 36px;
    text-align: center;
  }

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 30px;
  }
`;

const MainContainer = styled.div`
  z-index: 99;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  padding: 4rem 2rem;
  margin: 0 auto;

  @media (max-width: ${screenSizes.tablet}) {
    max-width: 600px;
  }

  @media (max-width: ${screenSizes.smallTablet}) {
    max-width: 460px;
    padding-right: 3rem;
    padding-left: 3rem;
  }

  @media (max-width: ${screenSizes.mobile}) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const EducationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const DegreeName = styled.div`
  font-size: 21px;
  padding: 3rem 0 1rem;

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 18px;
  }
`;

const University = styled.div`
  font-size: 14px;
  padding: 0.5rem 0;

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 12px;
  }
`;

const Faculty = styled.div`
  font-size: 17px;
  padding: 0.5rem 0;

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 15px;
  }
`;

const ThesisName = styled.div`
  font-size: 14px;
  padding: 0.75rem 0;

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 12px;
  }
`;

const DateAndCity = styled.div`
  display: flex;
  flex-direction: row;
  color: ${azureRadiance};
  font-size: 14px;
  padding: 0.5rem 0;

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 12px;
  }
`;

const Dot = styled.div`
  color: ${white};
  font-size: 20px;
  line-height: 16px;
  padding: 0 4px 0 1.25rem;

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 16px;
    line-height: 12px;
  }
`;

const EducationRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${white};
`;

const StyledCrate = styled.img`
  position: absolute;
  z-index: 1;
  width: 246px;
  top: -54px;
  left: 160px;

  @media (max-width: ${screenSizes.smallTablet}) {
    left: 50%;
    top: -21px;
    width: 180px;
  }

  @media (max-width: ${screenSizes.smallMobile}) {
    left: 40%;
  }
`;

const renderEducation = (education, index) => (
  <EducationRow key={index}>
    <DegreeName>{education.name}</DegreeName>
    <Faculty>{education.faculty}</Faculty>
    <University>{education.university}</University>
    <DateAndCity>
      {education.date}
      <Dot>●</Dot>
      {education.city}
    </DateAndCity>
    <ThesisName>Thesis title: {`"${education.thesisName}"`}</ThesisName>
  </EducationRow>
);

const Education = ({ title, educationList, scrollToComponent }) => {
  const { crate } = useStaticQuery(graphql`
    query {
      crate: file(relativePath: { eq: "figures-white/crate.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <MainContainer {...scrollToComponent}>
      <StyledCrate src={crate.publicURL} alt="education" />
      <MainText>{title}</MainText>
      <EducationContainer>{educationList.map(renderEducation)}</EducationContainer>
    </MainContainer>
  );
};

Education.propTypes = {
  title: PropTypes.string.isRequired,
  educationList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      university: PropTypes.string,
      date: PropTypes.string,
      city: PropTypes.string,
      faculty: PropTypes.string,
      thesisName: PropTypes.string,
    })
  ).isRequired,
  scrollToComponent: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    current: PropTypes.object,
  }).isRequired,
};

export default Education;
