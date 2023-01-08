import NewsBoxes from "./NewsBoxes";
import NewSlideContent from "./NewSlideContent";

function NewSlider(){
    return(
        <div className="container-fluid flex justify-center">
            <div className="container">
                <div className="row columns-2 gap-x-10">
                    <div className="slider"><NewSlideContent /></div>
                    <div className="boxes"><NewsBoxes /></div>
                </div>
            </div>
        </div>
    );
}

export default NewSlider;