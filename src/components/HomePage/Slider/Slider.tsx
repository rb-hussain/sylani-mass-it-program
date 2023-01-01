import './slider.css';
import Slider from 'react-slick';
import AnnoucementBtn from '../../buttons/Announcement';
import SlideOne from './SliderImages/slide-one.jpg';
import SlideTwo from './SliderImages/slide-two.png';
function SliderSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const firstSlideBtn = "Read More";
  return (
      <div className='container-fluid flex justify-center'>
        <div className="container my-4">
        <Slider {...settings}>
          <div className='sliderMainDiv'>
            <div className='flex basis-full items-center '>
              <div className="textSlider basis-2/4" >
                <h3 className='text-3xl font-sans font-medium px-4'>Donate us to support
                    flood-affected families in Pakistan
                </h3>
                <p className='px-4 pt-4'> Saylani Welfare is on the ground and already working with local communities to assess how best to support affected families, who urgently need food, Ration, shelter, bedding, Medical Facility and hygiene items.
                </p>
                <div className='px-4 pt-4'>
                <AnnoucementBtn btnText={firstSlideBtn}/>
                </div> 
              </div>
              <div className="basis-2/4" >
                  <div className="avatar common-avatar">
                      <img src={SlideOne} />
                  </div>
                  <div className="avatar-one common-avatar">
                      <img src={SlideTwo} />
                  </div>
                  <div className="avatar-three common-avatar">
                  <img src={SlideTwo} />
                  </div>
                  <div className="avatar-two common-avatar">
                  <img src={SlideTwo} />
                  </div>
              </div>
            </div>
          </div>

          <div className='sliderMainDiv'>
            <div className='flex basis-full items-center '>
              <div className="textSlider basis-2/4" >
                <h3 className='text-3xl font-sans font-medium px-4'>Donate us to support
                    flood-affected families in Pakistan
                </h3>
                <p className='px-4 pt-4'> Saylani Welfare is on the ground and already working with local communities to assess how best to support affected families, who urgently need food, Ration, shelter, bedding, Medical Facility and hygiene items.
                </p>
                <div className='px-4 pt-4'>
                <AnnoucementBtn btnText={firstSlideBtn}/>
                </div> 
              </div>
              <div className="basis-2/4" >
              <img src={SlideTwo} />
              </div>
            </div>
          </div>

          <div className='sliderMainDiv '>
            <div className='flex basis-full items-center '>
              <div className="textSlider basis-2/4" >
                <h3 className='text-3xl font-sans font-medium px-4'>Donate us to support
                    flood-affected families in Pakistan
                </h3>
                <p className='px-4 pt-4'> Saylani Welfare is on the ground and already working with local communities to assess how best to support affected families, who urgently need food, Ration, shelter, bedding, Medical Facility and hygiene items.
                </p>
                <div className='px-4 pt-4'>
                <AnnoucementBtn btnText={firstSlideBtn}/>
                </div> 
              </div>
              <div className="basis-2/4" >
              <img src={SlideTwo} />
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
  );
}

export default SliderSection;
