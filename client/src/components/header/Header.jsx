import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ logo }) => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <Link to="/">
            {logo && <img src={`${process.env.REACT_APP_SERVER_URL}/api${logo}`} alt="Логотип мобильной лотереи" />}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
