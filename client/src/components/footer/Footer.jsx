import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
import file from "../../assets/privacy_stoloto.pdf";

const Footer = ({ email, phone, footer_desc, logo }) => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <aside className={style.footer__left}>
            <Link to="/">
              <img
                src={`${process.env.REACT_APP_SERVER_URL}${logo}`}
                alt="Логотип Мобильная лотерея"
              />
            </Link>

            <Link to={`mailto:${email}`}>{email}</Link>
            <Link to={`tel:${phone}`}>{phone}</Link>

            <div className={style.footer__top__button}>
              <Link to="#head">На верх</Link>
            </div>
          </aside>

          <aside className={style.footer__right}>
            <p>{footer_desc}</p>
            <Link to={file} target="_blank">
              Политика в отношении обработки персональных данных
            </Link>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
