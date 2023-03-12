import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { clothes, clothesType } from '../ClothesPeed';
import './clothesItem.scss';

export interface dataType {
  itemsDB: clothes[];
  example: clothesType[];
}

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const div = e.currentTarget;

  const divId = div.id;

  const scrollZone = document.querySelector(
    '.scroll-container',
  ) as HTMLDivElement;

  const firstProduct = scrollZone?.querySelectorAll('img')[0] as HTMLElement;

  const ProductWidth: number = firstProduct.clientWidth + 20;

  scrollZone.scrollLeft += divId === 'left' ? -ProductWidth : ProductWidth;
};

const ClothesItem = ({ itemsDB, example }: dataType): JSX.Element => {
  const CoatFilter: clothes[] = itemsDB.filter(
    (itemsDB) => itemsDB.type === 'Coat',
  );

  return (
    <>
      <div className="Product-title">
        <h1>SEASON COAT</h1>
        <p>
          2022시즌 상품들을 리뉴얼하여 공구중입니다. <br />
          다양한 2023 시즌 코트 상품들을 재고준비 중이니 많은 관심 부탁드립니다.
        </p>
      </div>

      <div className="arrow-container">
        <button
          type="button"
          className="arrow-item"
          id="left"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <BsArrowLeftShort />
        </button>

        <button
          type="button"
          className="arrow-item"
          id="right"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <BsArrowRightShort />
        </button>
      </div>

      <div className="scroll-container">
        {CoatFilter.map((item) => {
          return (
            <div className="Product-itemBox" key={item.productId}>
              <div className="Product-Imgbox">
                <img src={item.image} alt="" />

                <div className="Product-View">
                  <h1>VIEW MORE</h1>
                </div>
              </div>

              <div className="Product-InfoBox">
                <div className="Product-brand">
                  <h1>{item.brand}</h1>
                </div>

                <div className="Product-name">
                  <h1>{item.title}</h1>
                </div>

                <div className="Product-Category">
                  <p>
                    {item.category2}[{item.category3}]
                  </p>
                </div>

                <div className="Product-price">
                  <h1>KRW {item.lprice}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ClothesItem;
