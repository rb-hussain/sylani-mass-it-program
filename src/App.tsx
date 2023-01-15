import './App.css';
import FooterMain from './components/Footer/FooterMain';

import Navbar from './components/header/Navbar';
import Courses from './components/HomePage/courses/Courses';
import SliderSection from './components/HomePage/Slider/Slider';
import News from './components/news/News';
import Staff from './components/staff/Staff';
function App() {
  return (
    <div>
      <Navbar />
      <SliderSection  />
      <Courses />
      <News />
      <Staff />
      <FooterMain />
    </div>
  );
}
export default App;
