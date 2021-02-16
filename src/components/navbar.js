import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Hamburger from 'components/shared/Hamburger';
import DropdownList from 'components/shared/DropdownList';
import screenSizes, { white, azureRadiance, codGray } from 'utils/variables';

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;

  @keyframes hide {
    from {
      top: 0;
    }
    to {
      top: -116px;
    }
  }

  @keyframes show {
    from {
      top: -116px;
    }
    to {
      top: 0;
    }
  }

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      top: -116px;
      animation: hide 1s;
    `}

  ${({ isSticky }) =>
    isSticky &&
    css`
      top: 0;
      animation: show 1s;
    `}
  width: 100%;
  background: ${codGray};
  z-index: 100;
`;

const SpaceBetween = styled.div`
  z-index: 100;
  margin: 0 auto;
  max-width: 1000px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMainNav = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  color: ${white};
  cursor: pointer;

  @media (max-width: ${screenSizes.smallTablet}) {
    font-size: 18px;
  }
`;

const Name = styled.div`
  margin-left: 30px;

  @media (max-width: ${screenSizes.smallTablet}) {
    margin-left: 25px;
  }
`;

const ColonWithSurname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Colon = styled.div`
  position: relative;
  top: -5px;
  font-size: 46px;
  line-height: 26px;

  @media (max-width: ${screenSizes.smallTablet}) {
    font-size: 36px;
    line-height: 18px;
  }
`;

const Surname = styled.div`
  color: ${azureRadiance};
  margin-left: 20px;

  @media (max-width: ${screenSizes.smallTablet}) {
    margin-left: 15px;
  }
`;

const BoxWrapper = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${screenSizes.smallTablet}) {
    display: none;
  }
`;

const NavbarBox = styled.div`
  z-index: 40;
  color: ${white};
  cursor: pointer;
  padding: 6px 10px;
  font-size: 17px;
  height: 18px;
  border: 1px solid ${white};
  margin-right: 36px;
  display: flex;
  align-items: center;

  :nth-child(2) {
    margin-bottom: 20px;
  }
`;

const Navbar = ({ navigationLinks, toComponent }) => {
  const [isOpen, setOpen] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);

  const onClick = useCallback(() => setOpen(!isOpen));

  useEffect(() => {
    /* eslint-disable no-undef */
    if (window) {
      const onScroll = e => {
        if (e.target.documentElement.scrollTop <= 110) {
          setCollapsed(false);
        }
        if (e.target.documentElement.scrollTop > 110 && e.target.documentElement.scrollTop < 700) {
          setCollapsed(true);
        }
        setStickyNavbar(e.target.documentElement.scrollTop > 700);
      };
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }
    /* eslint-enable no-undef */
  }, []);

  const renderBoxes = (element, index) => (
    <NavbarBox key={index} onClick={toComponent[index]}>
      {element.name}
    </NavbarBox>
  );

  return (
    <NavbarWrapper isSticky={stickyNavbar} isCollapsed={isCollapsed}>
      <SpaceBetween>
        <StyledMainNav onClick={toComponent[toComponent.length - 1]}>
          <Name>Szymon</Name>
          <ColonWithSurname>
            <Colon>:</Colon>
            <Surname>Ludyga</Surname>
          </ColonWithSurname>
        </StyledMainNav>
        <BoxWrapper>{navigationLinks.map(renderBoxes)}</BoxWrapper>
        <Hamburger onClick={onClick} isOpen={isOpen} />
      </SpaceBetween>
      <DropdownList
        onClick={onClick}
        toComponent={toComponent}
        navigationLinks={navigationLinks}
        isOpen={isOpen}
      />
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  toComponent: PropTypes.arrayOf(PropTypes.func).isRequired,
  navigationLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
