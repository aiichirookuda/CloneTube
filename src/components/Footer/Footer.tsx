import React from 'react';
import Style from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={Style.footer}>
      <span>
        favicon: <a href="https://icons8.jp/">ICONS8</a>
      </span>
    </div>
  );
};
