
function service() {
    const services = [{
        id: 1,
        image: '../images/uiux.png',
        title: "UI/UX Design"
    },
    {
        id: 2,
        image: '../images/webdes.png',
        title: "Web Design"
    },
    {
        id: 3,
        image: '../images/brand.png',
        title: "Branding"
    },
    {
        id: 4,
        image: '../images/logod.png',
        title: "Logo Design"
    },
    ]
    return (
        <>
            <section id="service" className="offer_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="head_title">
                                <h3 data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">What I Offer</h3>
                                <h3 data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">What I Offer2</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            services.map((services) => (
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service_box" data-aos="flip-left" data-aos-duration="500" data-aos-offset="100">
                                        <div className="icon">
                                            <img src={services.image} className="img-fluid" alt="icon" />
                                        </div>

                                        <h4 className="text-white">{services.title}</h4>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </section>
        </>
    )
}

export default service;