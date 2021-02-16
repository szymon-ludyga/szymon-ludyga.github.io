import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import screenSizes from 'utils/variables';
import useVisibility from 'utils/useVisibility';

const StyledImage = styled.img`
  ${({ resolution, isFixed }) =>
    resolution &&
    css`
      width: ${isFixed ? resolution.width : resolution.width + 5}px;
      height: ${isFixed ? resolution.height : resolution.height + 5}px;

      @media (max-width: ${screenSizes.tablet}) {
        width: ${resolution.width * 0.8}px;
        height: ${resolution.height * 0.8}px;
      }

      @media (max-width: ${screenSizes.mobile}) {
        width: ${resolution.width * 0.75}px;
        height: ${resolution.height * 0.75}px;
      }

      @media (max-width: ${screenSizes.smallMobile}) {
        width: ${resolution.width * 0.7}px;
        height: ${resolution.height * 0.7}px;
      }
    `};

  ${({ placement, isFixed, isVisible, zIndex }) =>
    isFixed
      ? css`
          position: relative;
          visibility: ${isVisible ? 'visible' : 'hidden'};
          z-index: ${zIndex};
        `
      : css`
          position: fixed;
          top: ${placement.fixed}px;
          left: ${placement.left - 2.5}px;
          visibility: ${isVisible ? 'visible' : 'hidden'};
          z-index: ${zIndex};

          @media (max-width: ${screenSizes.smallDesktop}) {
            left: ${placement.leftSmallDesktop}px;
          }

          @media (max-width: ${screenSizes.tablet}) {
            left: ${placement.leftTablet}px;
          }

          @media (max-width: ${screenSizes.smallTablet}) {
            left: ${placement.leftSmallTablet}px;
          }

          @media (max-width: ${screenSizes.mobile}) {
            left: ${placement.leftMobile}px;
          }

          @media (max-width: ${screenSizes.smallMobile}) {
            left: ${placement.leftSmallMobile}px;
          }
        `}
`;

const ShapeWrapper = styled.div`
  position: absolute;
  display: block;
  overflow: visible;
`;

const Wrapper = styled.div`
  position: absolute;

  ${({ placement }) =>
    placement &&
    css`
      top: ${placement.absolute}px;
      left: ${placement.left}px;

      @media (max-width: ${screenSizes.smallDesktop}) {
        top: ${placement.absoluteSmallDesktop}px;
        left: ${placement.leftSmallDesktop}px;
      }

      @media (max-width: ${screenSizes.tablet}) {
        top: ${placement.absoluteTablet}px;
        left: ${placement.leftTablet}px;
      }

      @media (max-width: ${screenSizes.smallTablet}) {
        top: ${placement.absoluteSmallTablet}px;
        left: ${placement.leftSmallTablet}px;
      }

      @media (max-width: ${screenSizes.mobile}) {
        top: ${placement.absoluteMobile}px;
        left: ${placement.leftMobile}px;
      }

      @media (max-width: ${screenSizes.smallMobile}) {
        top: ${placement.absoluteSmallMobile}px;
        left: ${placement.leftSmallMobile}px;
      }
    `}
`;

const Shape = ({ shapeWhite, shapeBlack, resolution, placement, zIndex }) => {
  const [isVisible, currentElement] = useVisibility(-placement.fixed - 3, 20, true, true);
  const [isVisibleBlack, currentElementBlack] = useVisibility(0);

  return (
    <ShapeWrapper>
      <StyledImage
        isVisible={isVisibleBlack}
        src={shapeBlack.publicURL}
        resolution={resolution}
        placement={placement}
        zIndex={zIndex}
      />
      <Wrapper ref={currentElementBlack} placement={placement}>
        <StyledImage
          ref={currentElement}
          isVisible={isVisible}
          src={shapeWhite.publicURL}
          resolution={resolution}
          placement={placement}
          zIndex={zIndex - 1}
          isFixed
        />
      </Wrapper>
    </ShapeWrapper>
  );
};

Shape.propTypes = {
  shapeWhite: PropTypes.shape({
    publicURL: PropTypes.string,
  }).isRequired,
  shapeBlack: PropTypes.shape({
    publicURL: PropTypes.string,
  }).isRequired,
  resolution: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  placement: PropTypes.shape({
    fixed: PropTypes.number,
    absolute: PropTypes.number,
    left: PropTypes.number,
    leftSmallTablet: PropTypes.number,
    absoluteSmallTablet: PropTypes.number,
    leftMobile: PropTypes.number,
    absoluteMobile: PropTypes.number,
    leftSmallMobile: PropTypes.number,
    absoluteSmallMobile: PropTypes.number,
  }).isRequired,
  zIndex: PropTypes.number.isRequired,
};

export default Shape;
