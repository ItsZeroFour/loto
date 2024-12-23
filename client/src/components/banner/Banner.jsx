import React, { useState } from "react";
import style from "./style.module.scss";
import bannerimg from "../../assets/banner__logo.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  const [hideBanner, setHideBanner] = useState(false);

  return (
    <React.Fragment>
      {!hideBanner && (
        <div className={style.banner}>
          <div className={style.banner__wrapper}>
            <img src={bannerimg} alt="app logo" />

            <p>Узнавайте о выигрышах и специальных акциях в приложении!</p>

            <div>
              <Link
                to="https://redirect.appmetrica.yandex.com/serve/821741395332082462"
                target="_blank"
              >
                Скачать
              </Link>
              <button onClick={() => setHideBanner(true)} />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Banner;