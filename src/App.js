import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Qualification from "./components/Qualification";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
// import { gsap, CSSPlugin, Expo } from "gsap";

// gsap.registerPlugin(CSSPlugin);

const App = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const count = setInterval(() => {
  //     setCounter(
  //       counter < 100 ? counter + 1 : clearInterval(count),
  //       setCounter(100)
  //     );
  //   }, 25);
  // });
  return (
    <>
      <Preloader />
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Qualification />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
