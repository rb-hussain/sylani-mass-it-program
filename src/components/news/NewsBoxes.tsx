function NewsBoxes(){
    return(
        <>
        <div className="container ">
            <div className="row  justify-center columns-2">

                <div className="box1 mb-5">
                <div className="content-overlay"></div>
                <img src="https://res.cloudinary.com/saylani-welfare/image/upload/v1672662640/website-images/dynamic/f0eb94d3-2d65-44ca-8b6c-8d26fe32181a.jpg" />
                </div>
                <div className="box1 ">
                <div className="content-overlay"></div>
                <img src="/img/n1.jpg" />
                </div>
                <div className="box1 mb-5 ">
                <div className="content-overlay"> </div>
                <img src="/img/n2.jpg" />
                <div className="boxContent">
                </div>
                </div>
                <div className="box1">
                <div className="content-overlay"></div>
                <img src="/img/n3.jpg" />
                </div>
            </div>
        </div>
        </>
    );
}

export default NewsBoxes;