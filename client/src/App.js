import { useEffect, useRef, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Head from "./components/head/Head";
import axios from "./utils/axios";
import GoldenBarrel from "./components/golden_barrel/GoldenBarrel";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Advantages from "./components/advantages/Advantages";
import Winners from "./components/winners/Winners";
import HowToParticipate from "./components/how_to_participate/HowToParticipate";
import WhereBuy from "./components/where_buy/WhereBuy";

function App() {
  const [data, setData] = useState(null);
  const containerRef = useRef(null);

  const getData = async () => {
    try {
      const { data } = await axios.get("/api/mobilnaya-lotereya?populate=*");

      setData(data.data.attributes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });

      return () => scroll.destroy();
    }
  }, []);

  console.log(data);

  return (
    <div className="App">
      {!data ? (
        <p>Загрузка...</p>
      ) : (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <div className="page" data-scroll-container ref={containerRef}>
            <Header logo={data.logo.data.attributes.url} />
            <main>
              <Head
                title={data.title}
                desc={data.description}
                linkUrl={data.link_url}
                headBg={data.head_bg.data.attributes.url}
              />
              <GoldenBarrel
                title={data.golden_barrel_title}
                text1={data.golden_barrel_text_1}
                text2={data.golden_barrel_text_2}
                linkUrl={data.link_url}
              />
              <Advantages
                advImage1={data.advantage_item_image_1.data.attributes.url}
                advText1={data.advantage_item_desc_1}
                advImage2={data.advantage_item_image_2.data.attributes.url}
                advText2={data.advantage_item_desc_2}
                advImage3={data.advantage_item_image_3.data.attributes.url}
                advText3={data.advantage_item_desc_3}
                advImage4={data.advantage_item_image_4.data.attributes.url}
                advText4={data.advantage_item_desc_4}
              />

              <Winners
                winnerImg1={data.winner_image_1.data.attributes.url}
                winnerTitle1={data.winner_title_1}
                winnerCount1={data.winner_count_1}
                winnerImg2={data.winner_image_2.data.attributes.url}
                winnerTitle2={data.winner_title_2}
                winnerCount2={data.winner_count_2}
                winnerImg3={data.winner_image_3.data.attributes.url}
                winnerTitle3={data.winner_title_3}
                winnerCount3={data.winner_count_3}
                winnersDescription={data.winners_description}
                linkUrl={data.link_url}
              />

              <HowToParticipate
                htpTitle1={data.how_to_participate_title_1}
                htpDesc1={data.how_to_participate_desc_1}
                htpTitle2={data.how_to_participate_title_2}
                htpDesc2={data.how_to_participate_desc_2}
                htpTitle3={data.how_to_participate_title_3}
                htpDesc3={data.how_to_participate_desc_3}
                htpTitle4={data.how_to_participate_title_4}
                htpDesc4={data.how_to_participate_desc_4}
              />

              <WhereBuy
                wbTitle={data.where_buy_title}
                wbItemTitle1={data.where_buy_item_title_1}
                wbItemText1={data.where_buy_item_text_1}
                wbItemTitle2={data.where_buy_item_title_2}
                wbItemText2={data.where_buy_item_text_2}
                wbItemTitle3={data.where_buy_item_title_3}
                wbItemText3={data.where_buy_item_text_3}
                wbItemTitle4={data.where_buy_item_title_4}
                wbItemText4={data.where_buy_item_text_4}
                linkUrl={data.link_url}
              />
            </main>

            <Footer
              email={data.email}
              phone={data.phone}
              footer_desc={data.footer_description}
              logo={data.logo.data.attributes.url}
            />
          </div>
        </LocomotiveScrollProvider>
      )}
    </div>
  );
}

export default App;
