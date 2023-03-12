import React from 'react';
import Bannervideo from '../../assets/video/bannerVideo.mp4';
import './banner.scss';

const Banner = (): JSX.Element => {
  return (
    <div className="Banner-container">
      <video src={Bannervideo} autoPlay muted loop />

      <div className="Banner-content">
        <p className="Banner-Subtitle">
          RENOMA BRAND x OWL STORE COLLABORATION
        </p>
        <h1 className="Banner-title">SPRING Blazer</h1>
        <h1 className="korean-info">
          레노마 & 올스토어 콜라보 23S 시즌 블레이저 출시
        </h1>
      </div>
    </div>
  );
};

export default Banner;
