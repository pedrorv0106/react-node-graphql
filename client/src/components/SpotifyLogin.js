import React from 'react';
import styled from 'styled-components';

import imgSpotify from 'assets/images/spotify.png';
import imgSpotify2x from 'assets/images/spotify@2x.png';
import imgSpotify3x from 'assets/images/spotify@3x.png';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 244px;
  height: 50px;
  border-radius: 25px;
  background-color: #2edb62;
  border: none;
  outline: none;
  cursor: pointer;

  span {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.88;
    color: #fff;
  }

  img {
    margin-left: 10px;
  }
`;

const SpotifyLogin = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <span>Login with</span>
    <img
      src={imgSpotify}
      srcSet={`${imgSpotify2x} 2x, ${imgSpotify3x} 3x`}
      alt="Spotify"
    />
  </Wrapper>
);

export default SpotifyLogin;
