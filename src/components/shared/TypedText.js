import React, { useState, useEffect } from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import screenSizes, { azureRadiance } from 'utils/variables';

const TypedText = ({ content }) => {
  const [animatedComponent, setAnimatedComponent] = useState(null);

  useEffect(() => {
    import('react-typing-effect')
      .then(ReactTypingEffect => {
        const StyledTypingEffect = styled(ReactTypingEffect.default)`
          .cursor {
            color: ${azureRadiance};
            display: inline-block;
            transform: scale(0.45, 1.5);
            position: relative;
            font-size: 65px;
            top: -7px;

            @media (max-width: ${screenSizes.smallTablet}) {
              font-size: 42px;
              top: -5px;
            }
          }
        `;
        setAnimatedComponent(StyledTypingEffect);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, []);

  const renderAnimationComponent = TypingEffectComponent => {
    const StyledTypingEffectComponent = styled(TypingEffectComponent)`
      color: ${azureRadiance};
      font-size: 72px;

      @media (max-width: ${screenSizes.smallTablet}) {
        font-size: 50px;
      }
    `;

    return (
      <StyledTypingEffectComponent
        text={content}
        speed={150}
        eraseDelay={1500}
        typingDelay={200}
        cursorClassName="cursor"
        cursor="|"
      />
    );
  };

  return animatedComponent && renderAnimationComponent(animatedComponent);
};

TypedText.propTypes = {
  content: PropTypes.arrayOf(string).isRequired,
};

export default TypedText;
