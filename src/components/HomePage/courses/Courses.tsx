import CoursesStructure from "./CoursesStrucuture";

function Courses(){
    const courseHeading = "Our Courses"
    return(
        <div className="container-fluid my-10 flex justify-center">
            <div className="container">
                <div className="row">
                    <div className="columns-1">
                      <h1 className="text-center text-4xl font-medium">{courseHeading}</h1>  
                    </div>
                    <div className="row columns-4 my-8">
                        <CoursesStructure />
                        <CoursesStructure />
                        <CoursesStructure />
                        <CoursesStructure />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;