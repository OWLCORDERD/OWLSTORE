import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Banner from 'components/Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './main.scss';
import ClothesPeed from '../ClothesPeed/ClothesPeed';
import '../../assets/GlobalStyle.scss';

const Main = (): JSX.Element => {
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;
  return (
    <Container>
      <Navbar />
      <section>
        <Banner />
        <ClothesPeed />
      </section>
    </Container>
  );
};

export default Main;
