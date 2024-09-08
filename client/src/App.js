import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import axios from "./utils/axios";

function App() {
  const [logo, setLogo] = useState("");

  const getLogo = async () => {
    try {
      const { data } = await axios.get("/api/logo?populate=*");

      setLogo(data.data.attributes.logo.data.attributes.url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLogo();
  }, []);

  return (
    <div className="App">
      <div className="page">
        <Header logo={logo} />
        <main></main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
