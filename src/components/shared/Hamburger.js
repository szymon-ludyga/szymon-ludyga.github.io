import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import screenSizes, { white } from 'utils/variables';

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: ${screenSizes.smallTablet}) {
    display: block;
    width: 33.3px;
    height: 25px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: ${white};
      border-radius: 2px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;

      :nth-child(1) {
        top: 0px;

        ${({ isOpen }) =>
          isOpen &&
          css`
            top: 10px;
            width: 0%;
            left: 50%;
          `}
      }

      :nth-child(2) {
        top: 10px;

        ${({ isOpen }) =>
          isOpen &&
          css`
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          `}
      }

      :nth-child(3) {
        top: 10px;

        ${({ isOpen }) =>
          isOpen &&
          css`
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
          `}
      }

      :nth-child(4) {
        top: 20px;

        ${({ isOpen }) =>
          isOpen &&
          css`
            top: 10px;
            width: 0%;
            left: 50%;
          `}
      }
    }
  }
`;

const Hamburger = ({ isOpen, onClick }) => (
  <HamburgerWrapper isOpen={isOpen} onClick={onClick}>
    <span />
    <span />
    <span />
    <span />
  </HamburgerWrapper>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
