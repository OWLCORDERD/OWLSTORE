import React from 'react';
import './globalpeed.scss';
import profile from '../../assets/image/OwlCoderd.jpg';
import clothImg from '../../assets/image/GallaryBanner.jpg';

const GlobalPeed = (): JSX.Element => {
  return (
    <div className="GlobalPeed-container">
      <div className="SearchKeyword-Box">
        <span className="SearchKeyword-title">실시간 인기 검색어</span>

        <ul className="SearchKeyword-list">
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
          <li>
            <h1 className="keyword-no">1</h1>
            <p className="keyword-name">후드티</p>
          </li>
        </ul>
      </div>

      <div className="Global-StyleStory">
        <h1 className="StyleStory-title">OWLSTORE STYLE STORY</h1>

        <ul className="StyleStory-box">
          <li className="StyleStory-item">
            <div className="Style-imgBox">
              <div className="user-Profile">
                <img src={profile} alt="" />
              </div>

              <img src={clothImg} alt="" />
            </div>
          </li>

          <li className="StyleStory-item">
            <div className="Style-imgBox">
              <div className="user-Profile">
                <img src={profile} alt="" />
              </div>

              <img src={clothImg} alt="" />
            </div>
          </li>

          <li className="StyleStory-item">
            <div className="Style-imgBox">
              <div className="user-Profile">
                <img src={profile} alt="" />
              </div>

              <img src={clothImg} alt="" />
            </div>
          </li>

          <li className="StyleStory-item">
            <div className="Style-imgBox">
              <div className="user-Profile">
                <img src={profile} alt="" />
              </div>

              <img src={clothImg} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalPeed;
