import React from "react";
import style from "./GoldenBarrel.module.scss";
import goldenbarrel from "../../assets/images/golden_barrel.png";
import lotoExample from "../../assets/images/loto_gb.svg";
import { Link } from "react-router-dom";

const GoldenBarrel = ({
  title,
  text1,
  text2,
  linkUrl,
  gbImage,
  externalId,
  utmMedium,
  utmCampaign,
  gbid,
  utmCreative,
  utmTerm,
  utmSource,
}) => {
  return (
    <section className={style.golden_barrel}>
      <div className="container">
        <div className={style.golden_barrel__wrapper}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />

          <div className={style.golden_barrel__barrel}>
            <img
              src={`${process.env.REACT_APP_SERVER_URL}${gbImage}`}
              alt="Золотой боченок лото"
            />
          </div>

          <div className={style.golden_barrel__items}>
            <div className={style.golden_barrel__left}>
              <p>{text1}</p>
            </div>
            <div className={style.golden_barrel__right}>
              <p>{text2}</p>
            </div>
          </div>

          <div className={style.golden_barrel__example}>
            <img src={lotoExample} alt="Мобильное лото пример" />
          </div>

          <div className={style.golden_barrel__link}>
            <Link
              to={`${linkUrl}?external_id=${externalId}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&gbid=${gbid}&utm_creative=${utmCreative}&utm_term=${utmTerm}&utm_source=${utmSource}`}
            >
              Купить билеты
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenBarrel;
