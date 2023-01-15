
function StaffContent(){
    const staffHeading ="Our Staff";
    const staffPara= "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    return(
        <>
         <div className="container-fluid my-10 flex justify-center">
            <div className="container">
                <div className="row">
                    <div className="columns-1">
                      <h1 className="text-center font-medium text-3xl px">{staffHeading}</h1>
                      <p className=" px-40 py-5">{staffPara}</p>  
                    </div>
                    <div className="row columns-4 my-8"></div>
                </div>
            </div>
        </div>

        </>
    );
    };
    
    export default StaffContent;