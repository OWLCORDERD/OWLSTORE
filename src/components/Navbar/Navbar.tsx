import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import logoImg from '../../assets/image/main_logo.png';
import '../../assets/GlobalStyle.scss';
import './navbar.scss';

const Navbar = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const NavContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    z-index: 100;
    background-color: #fff;
  `;

  const NavLogo = styled.div`
    position: relative;
    width: 100%;
    height: 8vh;
    display: flex;
    padding: 0 5rem;
    justify-content: space-between;
    align-items: center;
  `;

  const Nav = styled.nav`
    position: relative;
    padding: 0 10rem;
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;

    &::before {
      position: absolute;
      width: 2px;
      height: 40%;
      background-color: rgba(255, 255, 255, 0.8);
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `;

  const Navmenu = styled.ul`
    position: relative;
    width: 100%;
    height: 7vh;
  `;

  const MenuList = styled.li`
    display: inline-block;
    width: 25%;
    height: max-content;
    color: #fff;
    font-size: 1rem;
    line-height: 7vh;
    text-align: center;
    font-family: 'Do Hyeon', sans-serif;
    cursor: pointer;
  `;
  return (
    <NavContainer>
      <NavLogo>
        <div className="logo">
          <img src={logoImg} alt="" />
          <h1 className="title">OWL STORE</h1>
        </div>
      </NavLogo>

      <Nav>
        <Navmenu>
          <MenuList>HOME</MenuList>
          <MenuList>WOMAN</MenuList>
          <MenuList>MEN</MenuList>
          <MenuList>BEST</MenuList>
        </Navmenu>

        <Navmenu>
          <MenuList>공지사항</MenuList>
          <MenuList>Style Peed</MenuList>
          <MenuList>커뮤니티</MenuList>
        </Navmenu>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
