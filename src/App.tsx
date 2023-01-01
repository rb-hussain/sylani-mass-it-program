import './App.css';
import FooterMain from './components/Footer/FooterMain';

import Navbar from './components/header/Navbar';
import Courses from './components/HomePage/courses/Courses';
import SliderSection from './components/HomePage/Slider/Slider';
function App() {
  return (
    <div>
      <Navbar />
      <SliderSection  />
      <Courses />
      <FooterMain />
    </div>
  );
}
export default App;
