import React from "react";
import style from "./Winners.module.scss";
import { Link } from "react-router-dom";

const Winners = ({
  winnerImg1,
  winnerTitle1,
  winnerCount1,
  winnerImg2,
  winnerTitle2,
  winnerCount2,
  winnerImg3,
  winnerTitle3,
  winnerCount3,
  winnersDescription,
  linkUrl,
  externalId,
  utmMedium,
  utmCampaign,
  gbid,
  utmCreative,
  utmTerm,
  utmSource,
}) => {
  return (
    <section className={style.winners}>
      <div className="container">
        <div className={style.winners__wrapper}>
          <h2>Победители</h2>

          <ul>
            <li>
              <div className={style.winner__item__image}>
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}${winnerImg1}`}
                  alt="Победитель мобильной лотереи 1"
                />
              </div>

              <h3>{winnerTitle1}</h3>
              <h4 dangerouslySetInnerHTML={{ __html: winnerCount1 }} />
            </li>

            <li>
              <div className={style.winner__item__image}>
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}${winnerImg2}`}
                  alt="Победитель мобильной лотереи 1"
                />
              </div>

              <h3>{winnerTitle2}</h3>
              <h4 dangerouslySetInnerHTML={{ __html: winnerCount2 }} />
            </li>

            <li>
              <div className={style.winner__item__image}>
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}${winnerImg3}`}
                  alt="Победитель мобильной лотереи 1"
                />
              </div>

              <h3>{winnerTitle3}</h3>
              <h4 dangerouslySetInnerHTML={{ __html: winnerCount3 }} />
            </li>
          </ul>

          <div className={style.winners__text}>
            <h3>Хочешь так же?</h3>
            <p>{winnersDescription}</p>
            <Link
              to={`${linkUrl}?external_id=${externalId}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&gbid=${gbid}&utm_creative=${utmCreative}&utm_term=${utmTerm}&utm_source=${utmSource}`}
            >
              Хочу так же
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winners;
