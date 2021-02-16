import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import screenSizes, { white, azureRadiance } from 'utils/variables';

const MainText = styled.div`
  color: ${azureRadiance};
  font-size: 45px;
  text-align: center;
  padding-bottom: 1rem;

  @media (max-width: ${screenSizes.smallTablet}) {
    font-size: 36px;
  }

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 30px;
  }
`;

const MainContainer = styled.div`
  z-index: 99;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 460px;
  padding: 11.5rem 2rem 4rem;
  margin: 0 auto;

  @media (max-width: ${screenSizes.tablet}) {
    padding-top: 4rem;
    max-width: 700px;
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

const JobContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const JobRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${white};
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
  padding: 0 4px 0 1.75rem;

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 16px;
    line-height: 12px;
  }
`;

const PositionAndCompany = styled.div`
  font-size: 21px;
  padding: 2rem 0 0.5rem;

  @media (max-width: ${screenSizes.smallMobile}) {
    font-size: 18px;
  }
`;

const TechStack = styled.div`
  font-size: 12px;
  line-height: 20px;
  max-width: 400px;

  @media (max-width: ${screenSizes.smallTablet}) {
    max-width: 100%;
  }
`;

const renderJob = (job, index) => (
  <JobRow key={index}>
    <PositionAndCompany>{`${job.position} in ${job.company}`}</PositionAndCompany>
    <DateAndCity>
      {job.date}
      <Dot>●</Dot>
      {job.city}
    </DateAndCity>
    <TechStack>({job.techStack.join(', ')})</TechStack>
  </JobRow>
);

const Job = ({ title, jobList, scrollToComponent }) => (
  <MainContainer>
    <MainText {...scrollToComponent}>{title}</MainText>
    <JobContainer>{jobList.map(renderJob)}</JobContainer>
  </MainContainer>
);

Job.propTypes = {
  title: PropTypes.string.isRequired,
  jobList: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string,
      company: PropTypes.string,
      date: PropTypes.string,
      city: PropTypes.string,
      techStack: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  scrollToComponent: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    current: PropTypes.object,
  }).isRequired,
};

export default Job;
