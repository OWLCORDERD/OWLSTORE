import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import './main.scss';

const Main = (): JSX.Element => {
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Main;
