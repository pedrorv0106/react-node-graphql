import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import * as auth from 'utils/auth';
import ROUTES from 'config/routes';
import { LOGIN } from 'api/user';
import { Subtitle } from 'components/Styled/Typography';
import SpotifyLogin from 'components/SpotifyLogin';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
  const [login] = useMutation(LOGIN);
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const { data } = await login();
      const token = data.login.token;

      auth.setToken(token);
      history.push(ROUTES.HOME);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Subtitle>
        Experience great music together <br />
        with friends from around the world.
      </Subtitle>
      <br />
      <SpotifyLogin onClick={handleLogin} />
    </Wrapper>
  );
};

export default Login;
