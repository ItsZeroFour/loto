import { useEffect, useRef, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Head from "./components/head/Head";
import axios from "./utils/axios";
import GoldenBarrel from "./components/golden_barrel/GoldenBarrel";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
          <div className="page">
            <Header logo={data.logo.data.attributes.url} />
            <main data-scroll-container ref={containerRef}>
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
            </main>
            <Footer />
          </div>
        </LocomotiveScrollProvider>
      )}
    </div>
  );
}

export default App;
