import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import logoImg from '../../assets/image/main_logo.png';
import '../../assets/GlobalStyle.scss';
import './navbar.scss';

const Navbar = (): JSX.Element => {
  const NavContainer = styled.div`
    position: relative;
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 4rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  `;

  const LogoSearchBox = styled.div`
    position: relative;
    width: 45rem;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Navmenu = styled.ul`
    position: relative;
    width: 40rem;
    height: 3rem;
  `;

  const MenuList = styled.li`
    display: inline-block;
    width: 20%;
    height: 100%;
    background-color: #fff;
    color: #000;
    font-size: 1.2rem;
    line-height: 3rem;
    margin-right: 2rem;
    text-align: center;
    font-family: 'Do Hyeon', sans-serif;

    &:hover {
      background-color: #000;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease-in;
    }

    &.active {
      background-color: #000;
      color: #fff;
    }
  `;
  return (
    <NavContainer>
      <LogoSearchBox>
        <div className="logo">
          <img src={logoImg} alt="" />
          <h1 className="title">OWL STORE</h1>
        </div>

        <div className="Search-box">
          <input type="text" placeholder="의류 키워드를 검색하세요." />
          <BiSearchAlt className="Search-button" />
        </div>
      </LogoSearchBox>

      <Navmenu>
        <MenuList className="active">HOME</MenuList>
        <MenuList>공지사항</MenuList>
        <MenuList>랭킹</MenuList>
        <MenuList>Style Peed</MenuList>
      </Navmenu>
    </NavContainer>
  );
};

export default Navbar;
