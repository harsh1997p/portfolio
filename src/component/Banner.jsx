
function Banner() {
    return (
        <>
            <section id="home" className="banner_wrap" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className="lineshape">
                <img src="images/line_shape.png" className="img-fluid" alt="shape" />
                </div>
                <div className="shape2">
                    <img src="images/shape1.png" className="img-fluid" alt="shape" />
                </div>

                <div className="shape4">
                    <img src="images/shape3.png" className="img-fluid" alt="shape" />
                </div>
                <div className="shape5">
                    <img src="images/shape4.png" className="img-fluid" alt="shape" />
                </div>
                <div className="shape6">
                    <img src="images/shape5.png" className="img-fluid" alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="main_head">
                                {/* <h1>Hello, I am <span>Mark</span></h1> */}
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center py-4">
                        <div className="col-sm-6 text-center">
                            <div className="banner_img">
                                <img src="images/banner_img.png" className="img-fluid" alt="banner" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="banner_info">
                            <h1 className="text-anime-style-2">Hello, I am <span>Harsh</span></h1>
                                <h2>UI/UX Designer and
                                    Frontend Developer</h2>
                                <p>I have been working, i am proficient in ui design, user experience, researcher, web development.</p>
                                <a href="" className="btn btn-primary">Download CV <img src="images/download.svg" alt="download" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;