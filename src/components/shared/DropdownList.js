import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { white, codGray, azureRadiance } from 'utils/variables';
import '../../styles/dropdown.scss';

const DropdownWrapper = styled.div`
  display: none;
  width: 100%;

  ${({ isOpen }) =>
    isOpen &&
    css`
      z-index: 100;
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    `}
`;

const StyledRow = styled.div`
  color: ${white};
  padding: 1rem 0;
  background: ${codGray};
  border-bottom: 1px solid ${white};
  z-index: 1;

  :first-child {
    border-top: 1px solid ${white};
  }

  :hover {
    color: ${azureRadiance};
  }
`;

const DropdownList = ({ isOpen, onClick, toComponent, navigationLinks }) => (
  <DropdownWrapper isOpen={isOpen}>
    {navigationLinks.map((element, index) => {
      const onRowClick = () => {
        onClick();
        toComponent[index]();
      };

      return (
        <StyledRow className="dropdown" key={element.name} onClick={onRowClick}>
          {element.name}
        </StyledRow>
      );
    })}
  </DropdownWrapper>
);

DropdownList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  toComponent: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default DropdownList;
