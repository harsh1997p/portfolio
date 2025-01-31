import React from 'react';
import Modal from './Modal';
import { useState } from 'react';

function Project() {
    const projects = [
        {
            id: 1,
            title: "Visionary Architec Portfolio",
            tag1: "WEBSITE",
            tag2: "UIUX",
            image: "../images/p1.png",

        },
        {
            id: 2,
            title: "Healthcare Portfolio",
            tag1: "WEBSITE",
            tag2: "UIUX",
            image: "../images/p2.png",

        }
        ,
        {
            id: 3,
            title: "Finance Portfolio",
            tag1: "WEBSITE",
            tag2: "UIUX",
            image: "../images/p3.png",

        }
    ]

    const Modaldata = [
        {
            id:1,
            title:"Modal1",
            desc:"This is the modal body content."
        },
        {
            id:2,
            title:"Modal2",
            desc:"This is the modal body content2."
        }
    ]
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleHide = () => setShowModal(false);
    return (
        <>
            <section id="project" className="projects_wrap pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="head_title text-center">
                                <h3>Projects</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            projects.map((projects) => (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="project_box" data-aos="flip-left" data-aos-duration="500" data-aos-offset="100" data-aos-delay="200">
                                        <div className="project_img">
                                            <a type="button" onClick={handleShow}><img src={projects.image} className="img-fluid" alt="project" /></a>
                                        </div>

                                        <div className="info">
                                            <div className="tags">
                                                <span>{projects.tag1}</span><span>{projects.tag2}</span>
                                            </div>
                                            <h4><a className="text-white" href="">{projects.title}</a></h4>
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }



                    </div>
                </div>

            </section>



            {
                Modaldata.map((Modaldata) => (
                    <Modal
                        show={showModal}
                        onHide={handleHide}
                        title={Modaldata.title}
                        body={Modaldata.desc}
                    />
                ))
            }

        </>
    )
}

export default Project;