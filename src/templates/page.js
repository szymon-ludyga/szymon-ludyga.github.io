import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Hero from 'components/full-components/Hero';
import Qualifications from 'components/full-components/Qualifications';
import Projects from 'components/full-components/Projects';
import Education from 'components/full-components/Education';
import Job from 'components/full-components/Job';
import Contact from 'components/full-components/Contact';
import ShapesContainer from 'components/full-components/ShapesContainer';

import useScroll from 'utils/useScroll';
import screenSizes from 'utils/variables';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
  }
`;

const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  @media (max-width: ${screenSizes.tablet}) {
    z-index: 4;
  }

  @media (max-width: ${screenSizes.smallTablet}) {
    justify-content: center;
  }
`;

const IndexPage = ({ pageContext }) => {
  const [toQualifications, scrollToQualifications] = useScroll();
  const [toProjects, scrollToProjects] = useScroll();
  const [toEducation, scrollToEducation] = useScroll();
  const [toJob, scrollToJob] = useScroll();
  const [toContact, scrollToContact] = useScroll();
  const [toHero, scrollToHero] = useScroll();

  const {
    seoTitle,
    seoDescription,
    navigationLinks,
    main,
    qualifications,
    projects,
    education,
    job,
    contact,
  } = pageContext;

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <Navbar
        navigationLinks={navigationLinks}
        toComponent={[toQualifications, toEducation, toJob, toProjects, toContact, toHero]}
      />
      <ShapesContainer />
      <Hero {...main} scrollToComponent={scrollToHero} />
      <AlignRight>
        <Qualifications {...qualifications} scrollToComponent={scrollToQualifications} />
      </AlignRight>
      <FlexContainer>
        <Education {...education} scrollToComponent={scrollToEducation} />
        <Job {...job} scrollToComponent={scrollToJob} />
      </FlexContainer>
      <Projects {...projects} scrollToComponent={scrollToProjects} />
      <Contact scrollToComponent={scrollToContact} />
      <Footer {...contact} />
    </Layout>
  );
};

IndexPage.propTypes = {
  pageContext: PropTypes.shape({
    seoTitle: PropTypes.string.isRequired,
    seoDescription: PropTypes.string.isRequired,
    navigationLinks: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        name: PropTypes.string,
      })
    ).isRequired,
    main: PropTypes.shape({
      firstMainText: PropTypes.string.isRequired,
      secondMainText: PropTypes.string.isRequired,
      optionalMainText: PropTypes.string.isRequired,
      typedTextContent: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    qualifications: PropTypes.shape({
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
    }),
    projects: PropTypes.shape({
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
    }),
    education: PropTypes.shape({
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
    }),
    job: PropTypes.shape({
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
    }),
    contact: PropTypes.shape({
      contactLinks: PropTypes.shape({
        github: PropTypes.string,
        linkedin: PropTypes.string,
        mail: PropTypes.string,
      }).isRequired,
    }),
  }).isRequired,
};

export default IndexPage;
