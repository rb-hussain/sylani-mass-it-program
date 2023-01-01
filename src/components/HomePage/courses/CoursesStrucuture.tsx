import './courses.css'

function CoursesStructure(){
    return(
        <div className="cardbody pb-6 rounded-md shadow-lg shadow-gray-500">
            <div className="card">
                <div className="cardImg"><img src="https://gharana.pk/wp-content/uploads/2021/08/Free-Mobile-App-and-Web-Development-Course-Saylani-Courses-Adm.jpg" /></div>
                <div className="cardDetails pt-5 flex flex-wrap justify-center">
                    <div className="cardTitle">
                     <h4 className=" font-sans font-bold"> Web & App Design</h4>
                    </div>
                    <div className="cardDescription mt-3">
                    <p className='text-center'>We are committed to developing more than 1 million software developers</p>
                    </div>
                    <div className="cardFooter">
                        <div className="cardCta mt-3">
                           <button className="bg{#0d6efd} p-3 text-white  rounded-md"> Admission Form</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CoursesStructure;