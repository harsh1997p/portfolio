function About() {
    return (
        <>
            <section className="marquee-text ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 px-0">
                            <marquee class="marq" direction="left" loop="">
                                <div className="text_content">
                                    <div class="text">
                                        Web Design
                                    </div>
                                    <div className="icon">
                                        <img src="images/Star.png" alt="icon" />
                                    </div>
                                    <div class="text">
                                        App Design
                                    </div>
                                    <div className="icon">
                                        <img src="images/Star.png" alt="icon" />
                                    </div>
                                    <div class="text">
                                        Branding
                                    </div>
                                    <div className="icon">
                                        <img src="images/Star.png" alt="icon" />
                                    </div>
                                    <div class="text">
                                        Logo Design
                                    </div>
                                    <div className="icon">
                                        <img src="images/Star.png" alt="icon" />
                                    </div>
                                    <div class="text">
                                        Frontend Development
                                    </div>
                                    <div className="icon">
                                        <img src="images/Star.png" alt="icon" />
                                    </div>
                                </div>

                            </marquee>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about_wrap pt-80 pb-80" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title">
                                <span>About Me</span>

                                {/* <h2> A passionate web designer turning ideas into visually tunning, user-friendly websites.</h2> */}
                                <h2>Having 3 years of Experience as a UI/UX Designer with a passion for crafting intuitive and visually
                                    appealing digital experiences. Creating responsive, visually appealing websites. Proficient in HTML, CSS,
                                    JavaScript, Adobe Creative Suite, wireframes, mockups, and prototypes to communicate design concepts
                                    effectively. Skilled in conducting user research, gathering feedback, and iterating designs based on
                                    insights. Strong advocate for user-centered design principles and processes. Collaborative team player with
                                    excellent communication and problem-solving skills. Ready to contribute to creating innovative solutions
                                    that delight users and drive business success.</h2>
                            </div>
                            {/* <p>Having 3 years of Experience as a UI/UX Designer with a passion for crafting intuitive and visually
                                appealing digital experiences. Creating responsive, visually appealing websites. Proficient in HTML, CSS,
                                JavaScript, Adobe Creative Suite, wireframes, mockups, and prototypes to communicate design concepts
                                effectively. Skilled in conducting user research, gathering feedback, and iterating designs based on
                                insights. Strong advocate for user-centered design principles and processes. Collaborative team player with
                                excellent communication and problem-solving skills. Ready to contribute to creating innovative solutions
                                that delight users and drive business success.</p> */}
                        </div>
                    </div>
                </div>

            </section>




        </>
    )
}

export default About;