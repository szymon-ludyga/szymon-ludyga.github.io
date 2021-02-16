import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Shape from 'components/shared/Shape';

import screenSizes from 'utils/variables';

const StyledShapeWrapper = styled.div`
  @media (max-width: ${screenSizes.smallTablet}) {
    display: none !important;
  }
`;

const ShapesContainer = () => {
  const {
    shapeWhite1,
    shapeBlack1,
    shapeWhite2,
    shapeBlack2,
    shapeWhite3,
    shapeBlack3,
    shapeWhite4,
    shapeBlack4,
    shapeWhite5,
    shapeBlack5,
  } = useStaticQuery(graphql`
    query {
      shapeWhite1: file(relativePath: { eq: "figures-white/shape4.svg" }) {
        publicURL
      }
      shapeBlack1: file(relativePath: { eq: "figures-black/shape-black4.svg" }) {
        publicURL
      }
      shapeWhite2: file(relativePath: { eq: "figures-white/shape2.svg" }) {
        publicURL
      }
      shapeBlack2: file(relativePath: { eq: "figures-black/shape-black2.svg" }) {
        publicURL
      }
      shapeWhite3: file(relativePath: { eq: "figures-white/shape.svg" }) {
        publicURL
      }
      shapeBlack3: file(relativePath: { eq: "figures-black/shape-black.svg" }) {
        publicURL
      }
      shapeWhite4: file(relativePath: { eq: "figures-white/shape3.svg" }) {
        publicURL
      }
      shapeBlack4: file(relativePath: { eq: "figures-black/shape-black3.svg" }) {
        publicURL
      }
      shapeWhite5: file(relativePath: { eq: "figures-white/shape5.svg" }) {
        publicURL
      }
      shapeBlack5: file(relativePath: { eq: "figures-black/shape-black5.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <>
      <StyledShapeWrapper>
        <Shape
          shapeWhite={shapeWhite5}
          shapeBlack={shapeBlack5}
          resolution={{ width: 266, height: 347 }}
          placement={{
            fixed: 100,
            absolute: 500,
            left: 1150,
            leftSmallDesktop: 880,
            leftTablet: 780,
            absoluteTablet: 570,
          }}
          zIndex={22}
        />
      </StyledShapeWrapper>
      <Shape
        shapeWhite={shapeWhite1}
        shapeBlack={shapeBlack1}
        resolution={{ width: 202, height: 272 }}
        placement={{
          fixed: 200,
          absolute: 650,
          left: 100,
          leftSmallDesktop: 60,
          leftTablet: 70,
          absoluteTablet: 650,
          leftSmallTablet: 130,
          absoluteSmallTablet: 600,
          leftMobile: 20,
          absoluteMobile: 650,
          leftSmallMobile: 3,
          absoluteSmallMobile: 630,
        }}
        zIndex={22}
      />
      <Shape
        shapeWhite={shapeWhite2}
        shapeBlack={shapeBlack2}
        resolution={{ width: 173, height: 184 }}
        placement={{
          fixed: 100,
          absolute: 2200,
          left: 250,
          leftSmallDesktop: 100,
          absoluteSmallDesktop: 2050,
          leftTablet: 80,
          absoluteTablet: 1950,
          leftSmallTablet: 70,
          absoluteSmallTablet: 2100,
          leftMobile: 30,
          absoluteMobile: 2210,
          leftSmallMobile: 20,
          absoluteSmallMobile: 2130,
        }}
        zIndex={20}
      />
      <Shape
        shapeWhite={shapeWhite3}
        shapeBlack={shapeBlack3}
        resolution={{ width: 282, height: 222 }}
        placement={{
          fixed: 300,
          absolute: 2350,
          left: 1000,
          leftSmallDesktop: 750,
          absoluteSmallDesktop: 2250,
          leftTablet: 670,
          absoluteTablet: 2500,
          leftSmallTablet: 50,
          absoluteSmallTablet: 2910,
          leftMobile: 150,
          absoluteMobile: 3190,
          leftSmallMobile: 120,
          absoluteSmallMobile: 3100,
        }}
        zIndex={18}
      />
      <StyledShapeWrapper>
        <Shape
          shapeWhite={shapeWhite4}
          shapeBlack={shapeBlack4}
          resolution={{ width: 254, height: 251 }}
          placement={{
            fixed: 300,
            absolute: 2950,
            left: 80,
            leftTablet: 50,
            absoluteTablet: 2800,
            leftSmallDesktop: 20,
            absoluteSmallDesktop: 2990,
          }}
          zIndex={16}
        />
      </StyledShapeWrapper>
    </>
  );
};

export default ShapesContainer;
