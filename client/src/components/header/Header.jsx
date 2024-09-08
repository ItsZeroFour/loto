import React from "react";
import style from "./Header.module.scss";

const Header = ({ logo }) => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          {logo && <img src={`${process.env.REACT_APP_SERVER_URL}${logo}`} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
