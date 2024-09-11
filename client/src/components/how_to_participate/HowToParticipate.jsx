import React, { useState } from "react";
import style from "./HowToParticipate.module.scss";
import polygon from "../../assets/icons/polygon.svg";

const HowToParticipate = ({
  htpTitle1,
  htpDesc1,
  htpTitle2,
  htpDesc2,
  htpTitle3,
  htpDesc3,
  htpTitle4,
  htpDesc4,
}) => {
  const [showItem, setShowItem] = useState(0);

  return (
    <section className={style.how_to_participate}>
      <div className="container">
        <div className={style.how_to_participate__wrapper}>
          <h2>Как участвовать?</h2>

          <ul>
            <li onClick={() => setShowItem(0)}>
              <div className={style.how_to_participate__item__text}>
                <div>
                  <h3>{htpTitle1}</h3>
                  <img src={polygon} alt="polygon" />
                </div>

                {showItem === 0 && <p>{htpDesc1}</p>}
              </div>
            </li>

            <li onClick={() => setShowItem(1)}>
              <div className={style.how_to_participate__item__text}>
                <div>
                  <h3>{htpTitle2}</h3>
                  <img src={polygon} alt="polygon" />
                </div>

                {showItem === 1 && <p>{htpDesc2}</p>}
              </div>
            </li>

            <li onClick={() => setShowItem(2)}>
              <div className={style.how_to_participate__item__text}>
                <div>
                  <h3>{htpTitle3}</h3>
                  <img src={polygon} alt="polygon" />
                </div>

                {showItem === 2 && <p>{htpDesc3}</p>}
              </div>
            </li>

            <li onClick={() => setShowItem(3)}>
              <div className={style.how_to_participate__item__text}>
                <div>
                  <h3>{htpTitle4}</h3>
                  <img src={polygon} alt="polygon" />
                </div>

                {showItem === 3 && <p>{htpDesc4}</p>}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;
