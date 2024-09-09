import React from "react";
import style from "./Head.module.scss";
import { Link } from "react-router-dom";

const Head = ({ title, desc, linkUrl, headBg }) => {
  return (
    <section className={style.head__cover}>
      <div
        className={style.head}
        style={{
          background: `url(${process.env.REACT_APP_SERVER_URL}${headBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className={style.head__wrapper}>
            <aside className={style.head__left}>
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <p className={style.head__desc}>{desc}</p>
              <Link to={linkUrl}>Принять участие</Link>
            </aside>

            <aside className={style.head__right}>
              <div>
                <h3>Джекпот</h3>
                <h2>от 900 000 000</h2>
              </div>

              <div>
                <h5>Призовой Фонд</h5>
                <h4>От 1 000 000 000</h4>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
