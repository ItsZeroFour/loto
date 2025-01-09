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
import Banner from "./components/banner/Banner";
import { useSearchParams } from "react-router-dom";
import { metaTags } from "../src/data/meta";

function App() {
  const [data, setData] = useState(null);
  const containerRef = useRef(null);
  const [os, setOs] = useState("");

  const [searchParams] = useSearchParams();

  const [externalId, setExternalId] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [gbid, setGbid] = useState("");
  const [utmCreative, setUtmCreative] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
  const [utmSource, setUtmSource] = useState("");

  const [tags, setTags] = useState(metaTags.default);

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

  useEffect(() => {
    function setUtmToLocalstorage() {
      localStorage.setItem("external_id", searchParams.get("external_id"));
      localStorage.setItem("utm_campaign", searchParams.get("utm_campaign"));
      localStorage.setItem("gbid", searchParams.get("gbid"));
      localStorage.setItem("utm_creative", searchParams.get("utm_creative"));
      localStorage.setItem("utm_term", searchParams.get("utm_term"));
      localStorage.setItem("utm_source", searchParams.get("utm_source"));
    }

    if (
      searchParams.get("external_id") &&
      searchParams.get("utm_campaign") &&
      searchParams.get("gbid") &&
      searchParams.get("utm_creative") &&
      searchParams.get("utm_term") &&
      searchParams.get("utm_source")
    ) {
      setUtmToLocalstorage();
    }

    setExternalId(
      searchParams.get("external_id") !== null
        ? searchParams.get("external_id")
        : localStorage.getItem("external_id")
    );
    setUtmCampaign(
      searchParams.get("utm_campaign") !== null
        ? searchParams.get("utm_campaign")
        : localStorage.getItem("utm_campaign")
    );
    setGbid(
      searchParams.get("gbid") !== null
        ? searchParams.get("gbid")
        : localStorage.getItem("gbid")
    );
    setUtmCreative(
      searchParams.get("utm_creative") !== null
        ? searchParams.get("utm_creative")
        : localStorage.getItem("utm_creative")
    );
    setUtmTerm(
      searchParams.get("utm_term") !== null
        ? searchParams.get("utm_term")
        : localStorage.getItem("utm_term")
    );
    setUtmSource(
      searchParams.get("utm_source") !== null
        ? searchParams.get("utm_source")
        : localStorage.getItem("utm_source")
    );
  }, [searchParams]);

  useEffect(() => {
    const checkOs = (agent) => {
      if (agent.indexOf("Android") > 0) {
        setOs("Android");
      }
    };

    checkOs(navigator.userAgent);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmContent = params.get("utm_content");

    if (utmContent && metaTags[utmContent]) {
      setTags(metaTags[utmContent]);
    }
  }, []);

  useEffect(() => {
    document.title = tags.title.replace(/&mdash;/g, "—");
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        tags.description.replace(/&mdash;/g, "—")
      );
    }
  }, [tags]);

  return (
    <div className="App">
      {os === "Android" && <Banner />}

      {!data ? (
        <div class="preloader">
          <div class="circle circle_green"></div>
          <div class="circle circle_red"></div>
        </div>
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
                externalId={externalId}
                utmCampaign={utmCampaign}
                gbid={gbid}
                utmCreative={utmCreative}
                utmTerm={utmTerm}
                utmSource={utmSource}
                tags={tags}
              />
              <GoldenBarrel
                title={data.golden_barrel_title}
                text1={data.golden_barrel_text_1}
                text2={data.golden_barrel_text_2}
                linkUrl={data.link_url}
                gbImage={data.golden_barrel_image.data.attributes.url}
                externalId={externalId}
                utmCampaign={utmCampaign}
                gbid={gbid}
                utmCreative={utmCreative}
                utmTerm={utmTerm}
                utmSource={utmSource}
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
                externalId={externalId}
                utmCampaign={utmCampaign}
                gbid={gbid}
                utmCreative={utmCreative}
                utmTerm={utmTerm}
                utmSource={utmSource}
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
                externalId={externalId}
                utmCampaign={utmCampaign}
                gbid={gbid}
                utmCreative={utmCreative}
                utmTerm={utmTerm}
                utmSource={utmSource}
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
