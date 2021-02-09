import React from 'react';
import styled from 'styled-components';
import { Overlay as UtilOverlay } from 'components/Styled/Layouts';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Inner = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Background2 = styled(UtilOverlay)`
  opacity: 0.85;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Background1 = styled(UtilOverlay)`
  opacity: 0.85;
  background-image: linear-gradient(305deg, #009cde, #00cf92);
`;

const Content = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = ({ children }) => (
  <Wrapper>
    <Inner>
      <Background1 />
      <Background2 />
      <Content>{children}</Content>
    </Inner>
  </Wrapper>
);

export default Overlay;
