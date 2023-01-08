import './App.css';
import FooterMain from './components/Footer/FooterMain';

import Navbar from './components/header/Navbar';
import Courses from './components/HomePage/courses/Courses';
import SliderSection from './components/HomePage/Slider/Slider';
import News from './components/news/News';
function App() {
  return (
    <div>
      <Navbar />
      <SliderSection  />
      <Courses />
      <News />
      <FooterMain />
    </div>
  );
}
export default App;
