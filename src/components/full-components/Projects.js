import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import screenSizes, { white, azureRadiance } from 'utils/variables';

const MainText = styled.div`
  z-index: 98;
  color: ${azureRadiance};
  font-size: 45px;
  text-align: center;
  padding-bottom: 1.75rem;

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
  max-width: 800px;
  padding: 4rem 0;
  margin: 0 auto;

  @media (max-width: ${screenSizes.smallTablet}) {
    padding-bottom: 10rem;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 500px;

  @media (max-width: ${screenSizes.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${screenSizes.mobile}) {
    align-items: center;
    flex-direction: column;
  }
`;

const ProjectBox = styled.a`
  z-index: 98;
  position: relative;
  text-decoration: none;
  color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${azureRadiance};
  margin: 19px;
  height: 180px;
  width: 180px;

  &:hover {
    border: 1px solid ${white};

    .project-name {
      color: ${azureRadiance};
    }

    .tech-stack {
      color: ${azureRadiance};
    }

    .date {
      color: ${white};
    }
  }

  &:nth-child(1n + 7) {
    display: none;
  }

  @media (max-width: ${screenSizes.mobile}) {
    height: 200px;
    width: 200px;

    &:nth-child(1n + 4) {
      display: none;
    }
  }
`;

const ProjectName = styled.div`
  font-size: 17px;
  text-align: center;
  padding: 0.5rem 0.25rem;

  @media (max-width: ${screenSizes.tablet}) {
    padding-top: 0;
  }

  @media (max-width: ${screenSizes.mobile}) {
    padding: 0 0.5rem 0.5rem;
  }
`;

const Date = styled.div`
  color: ${azureRadiance};
  font-size: 14px;
  text-align: center;
  padding: 0.25rem;
`;

const TechStack = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 0.25rem;
`;

const ProjectWithDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4px;
  width: 300px;
  height: 220px;
  border: 1px solid ${white};
  color: ${azureRadiance};
  visibility: ${({ isHovered }) => (isHovered > -1 ? 'visible' : 'hidden')};

  @media (max-width: ${screenSizes.tablet}) {
    display: none;
  }
`;

const Icon = styled.img`
  display: none;
  position: absolute;
  width: 15px;
  bottom: 4px;
  right: 6px;

  @media (max-width: ${screenSizes.tablet}) {
    display: block;
  }
`;

const Projects = ({ title, descriptions, projectsList, scrollToComponent }) => {
  const [hovered, setHovered] = useState(-1);

  const { rightArrow } = useStaticQuery(graphql`
    query {
      rightArrow: file(relativePath: { eq: "right-arrow.svg" }) {
        publicURL
      }
    }
  `);

  const renderProject = (project, index) => (
    <ProjectBox
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener norefferer"
      onMouseEnter={() => setHovered(index)}
      onClick={() => setHovered(-1)}
      onMouseLeave={() => setHovered(-1)}
    >
      <ProjectName className="project-name">{project.name}</ProjectName>
      <Date className="date">{project.date}</Date>
      <TechStack className="tech-stack">{project.techStack.join(', ')}</TechStack>
      <Icon src={rightArrow.publicURL} />
    </ProjectBox>
  );

  return (
    <MainContainer>
      <MainText {...scrollToComponent}>{title}</MainText>
      <ProjectWithDescription>
        <ProjectsContainer>{projectsList.map(renderProject)}</ProjectsContainer>
        <Description isHovered={hovered}>{descriptions[hovered]}</Description>
      </ProjectWithDescription>
    </MainContainer>
  );
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  projectsList: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.string,
      techStack: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollToComponent: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    current: PropTypes.object,
  }).isRequired,
};

export default Projects;
