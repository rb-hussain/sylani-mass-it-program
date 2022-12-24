import './App.css';
import FooterMain from './components/Footer/FooterMain';

import Navbar from './components/header/Navbar';
import SliderSection from './components/HomePage/Slider/Slider';
function App() {
  return (
    <div>
      <Navbar />
      <SliderSection  />
      <FooterMain />
    </div>
  );
}
export default App;
