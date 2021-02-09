import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ROUTES from 'config/routes';
import SpotifyLogin from 'components/SpotifyLogin';
import { useAuth } from 'utils/auth';
import Chat from './Chat';

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const SongTitle = styled.h1`
  font-family: DollyDots;
  font-size: 35px;
  text-align: center;
  color: #ffeaaf;
`;

const Home = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <SongTitle>Blinding Lights - The Weeknd</SongTitle>
      {auth ? (
        <Chat roomId={1} />
      ) : (
        <Link to={ROUTES.LOGIN}>
          <SpotifyLogin />
        </Link>
      )}
    </Wrapper>
  );
};

export default Home;
