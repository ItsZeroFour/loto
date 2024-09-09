import React from "react";
import style from "./Advantages.module.scss";

const Advantages = ({
  advImage1,
  advText1,
  advImage2,
  advText2,
  advImage3,
  advText3,
  advImage4,
  advText4,
}) => {
  return (
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <ul>
            <li>
              <img
                src={`${process.env.REACT_APP_SERVER_URL}${advImage1}`}
                alt={advText1}
              />
              <p>{advText1}</p>
            </li>

            <li>
              <img
                src={`${process.env.REACT_APP_SERVER_URL}${advImage2}`}
                alt={advText2}
              />
              <p>{advText2}</p>
            </li>

            <li>
              <img
                src={`${process.env.REACT_APP_SERVER_URL}${advImage3}`}
                alt={advText3}
              />
              <p>{advText3}</p>
            </li>

            <li>
              <img
                src={`${process.env.REACT_APP_SERVER_URL}${advImage4}`}
                alt={advText4}
              />
              <p>{advText4}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
