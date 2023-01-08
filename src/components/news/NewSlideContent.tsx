import firsImage from './newImages/one.jpg';
import Slider from 'react-slick';
import AnnoucementBtn from '../buttons/Announcement';

function NewSlideContent(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const firstSlideBtn = "Read More";

    return(
        <>
        <Slider {...settings}>
          <div className='sliderMainDiv '>
            <div className='flex basis-full items-center '>
              <div className="textSlider basis-2/4" >
                <h3 className='text-3xl font-sans font-medium px-2'>Donate us to support
                    flood-affected families in Pakistan
                </h3>
                <p className='px-2 pt-2'> Saylani Welfare is on the ground and already working with local communities to assess how best to support affected families, who urgently need food, Ration, shelter, bedding, Medical Facility and hygiene items.
                </p>
                <div className='px-4 pt-4'>
                <AnnoucementBtn btnText={firstSlideBtn}/>
                </div> 
              </div>
              <div className="basis-2/4" >
              <img src={firsImage} />
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
              <img src={firsImage} />
              </div>
            </div>
          </div>
        </Slider>

        </>
    );
}

export default NewSlideContent;