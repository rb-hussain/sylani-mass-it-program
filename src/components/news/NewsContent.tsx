
function NewsContent(){
    const newsHeading = "Latest Updates & Announcement";
    const newsPara ="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    return(
        
     <>
    <div className="container-fluid ">
        <div className="container">
            <div className="row text-center">
                <div className="news-content">
                <h1 className=" text-3xl px">{newsHeading}</h1>
                <p className=" px-40 py-5">{newsPara}</p>
                </div>
            </div>
        </div>
        </div>
     </>
    );
};


export default NewsContent;