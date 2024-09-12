import React from "react";
import style from "./WhereBuy.module.scss";
import { Link } from "react-router-dom";

const WhereBuy = ({
  wbTitle,
  wbItemTitle1,
  wbItemText1,
  wbItemTitle2,
  wbItemText2,
  wbItemTitle3,
  wbItemText3,
  wbItemTitle4,
  wbItemText4,
  linkUrl,
}) => {
  return (
    <section className={style.where_buy}>
      <div className="container">
        <div className={style.where_buy__wrapper}>
          <h2>{wbTitle}</h2>
          <p>
            Билеты «Мобильная лотерея» можно купить на{" "}
            <Link to={linkUrl}>сайте</Link> мобильной лотереи
          </p>

          <ul className={style.where_buy__list}>
            <li>
              <h3>{wbItemTitle1}</h3>
              <p>{wbItemText1}</p>
            </li>

            <li>
              <h3>{wbItemTitle2}</h3>
              <p>{wbItemText2}</p>
            </li>

            <li>
              <h3>{wbItemTitle3}</h3>
              <p>{wbItemText3}</p>
            </li>

            <li>
              <h3>{wbItemTitle4}</h3>
              <p>{wbItemText4}</p>
            </li>
          </ul>

          <div className={style.where_buy__link}>
            <Link to={linkUrl}>Купить билет</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereBuy;
