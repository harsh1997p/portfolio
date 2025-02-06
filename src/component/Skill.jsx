function Skill() {

    const skills = [
        {
            id: 1,
            image: '../images/ps.png',
            title: "Photoshop",
        },
        {
            id: 2,
            image: '../images/ai.png',
            title: "Illustrator",
        },
        {
            id: 3,
            image: '../images/figma.png',
            title: "Figma",
        },
        {
            id: 4,
            image: '../images/xd.png',
            title: "Adobe XD",
        },
        {
            id: 5,
            image: '../images/elementor.png',
            title: "Elementor",
        },
        {
            id: 6,
            image: '../images/html.png',
            title: "HTML",
        },
        {
            id: 7,
            image: '../images/css.png',
            title: "CSS",
        },
        {
            id: 8,
            image: '../images/jquery.png',
            title: "jquery",
        },
        {
            id: 9,
            image: '../images/js.png',
            title: "JavaScript",
        },
        {
            id: 10,
            image: '../images/bootstrap.png',
            title: "Bootstrap",
        },
        {
            id: 11,
            image: '../images/react.png',
            title: "React",
        },

    ]
    return (
        <>
            <section className="skill_wrap pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="head_title text-center">
                                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true">What I Bring to the Table</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            skills.map((skill) =>
                                <div className="col-6 col-sm-2 col-md-3 col-lg-2">
                                    <div className="skillbox" data-aos="flip-left" data-aos-duration="1000" data-aos-offset="100" data-aos-once="true">
                                        <div className="icon">
                                            <img src={skill.image} className="img-fluid" alt="skill" />
                                        </div>
                                        <h4>{skill.title}</h4>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}


export default Skill;