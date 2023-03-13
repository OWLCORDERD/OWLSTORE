import UseFetch from 'components/CustomHooks/UseFetch';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClothesItem from './ClothesItem/ClothesItem';
import './ClothesItem/clothesItem.scss';

export interface clothesType {
  id: number;
  type: string;
  total: number;
}

export interface clothes {
  type: string;
  title: string;
  link: string;
  image: string;
  lprice: string;
  hprice: string;
  mallName: string;
  productId: string;
  productType: string;
  brand: string;
  maker: string;
  category1: string;
  category2: string;
  category3: string;
}

const ClothesPeed = (): JSX.Element => {
  const itemsData: clothes[] = UseFetch('http://localhost:3001/items');
  const itemsType: clothesType[] = UseFetch(
    'http://localhost:3001/ClotingType',
  );

  const PeedContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 5rem 0;
  `;

  const PeedItemBox = styled.div`
    position: relative;
    width: 1600px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  return (
    <PeedContainer>
      <PeedItemBox>
        <ClothesItem itemsDB={itemsData} example={itemsType} />
      </PeedItemBox>
    </PeedContainer>
  );
};

export default ClothesPeed;
