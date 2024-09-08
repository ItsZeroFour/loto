import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>Footer</div>
      </div>
    </footer>
  );
};

export default Footer;
