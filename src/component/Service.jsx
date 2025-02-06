
function service() {
    const services = [{
        id: 1,
        image: '../images/uiux.png',
        title: "UI/UX Design",
        desc:"Crafting intuitive and visually appealing user experiences that enhance usability and engagement."
    },
    {
        id: 2,
        image: '../images/webdes.png',
        title: "Web Design",
        desc:"Designing modern, responsive websites that blend aesthetics with functionality for a seamless user experience."
    },
    {
        id: 3,
        image: '../images/brand.png',
        title: "Branding",
        desc:"Building strong brand identities with strategic design elements that resonate with your audience."
    },
    {
        id: 4,
        image: '../images/logod.png',
        title: "Logo Design",
        desc:"Creating unique and memorable logos that represent your brand’s vision and values."
    },
    ]
    return (
        <>
            <section id="service" className="offer_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="head_title">
                                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" data-aos-once="true">What I Offer</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            services.map((services) => (
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service_box" data-aos="flip-left" data-aos-duration="1000" data-aos-offset="100" data-aos-once="true">
                                        <div className="icon">
                                            <img src={services.image} className="img-fluid" alt="icon" />
                                        </div>

                                        <h4 className="text-white">{services.title}</h4>
                                        <p className="mb-0">{services.desc}</p>
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