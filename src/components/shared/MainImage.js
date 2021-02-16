import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const StyledImage = styled(Img)`
  width: 100%;
  height: 100%;
`;

const MainImage = () => {
  const { mainImage } = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <StyledImage fluid={mainImage.childImageSharp.fluid} />;
};

export default MainImage;
