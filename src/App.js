import './App.css';
import Header from "./pages/02_header/header";
import Main from "./pages/03_main/main";
import Preview from "./pages/04_preview/preview";
import Inform from "./pages/05_inform/inform";
import Bestsellers from "./pages/06_bestsellers/bestsellers";
import TopBar from "./pages/01_topBar/topBar";
import Footer from "./pages/09_footer/footer";
import {Slider} from "react-semantic-ui-range";

import SimpleSwiper from "./pages/testSlider";
import {useState} from "react";
import Gallery from './pages/07_gallery/gallery';
import About from './pages/08_about/about';
import Review from './pages/08_review/review';

function App() {
  const [value, setValue] = useState(5);
  const settings = {
    start: 2,
    min: 0,
    max: 10,
    step: 1,
    onChange: value => {
      setValue(value);
    }
  };

  return (
    <div>
      <TopBar/>
      <Header/>
      <Main/>
      <Inform/>
      <Bestsellers/>
      <About />
      <Review/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
