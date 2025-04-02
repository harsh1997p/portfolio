import React from 'react';
import Modal from './Modal';
import { useState } from 'react';


function Project() {
    const projects = [
        {
            id: 1,
            title: "Hotel Booking App",
            tag1: "WEBSITE",
            tag2: "APP",
            image: "../images/Hotel-Booking.png",
            link: "https://www.behance.net/gallery/188043731/Hotel-Booking-App"
        },
        {
            id: 2,
            title: "Food Delivery App",
            tag1: "APP",
            image: "../images/FoodDelivery.png",
            link: "https://www.behance.net/gallery/196974201/Food-Delivery-App"

        }
        ,
        {
            id: 3,
            title: "News Website",
            tag1: "WEBSITE",
            image: "../images/News-Website.png",
            link: "https://www.behance.net/gallery/210502495/Journal-Of-Supply-Chain-Media-Website"
        },
        {
            id: 4,
            title: "Petroleum Company Website",
            tag1: "WEBSITE",
            image: "../images/Petroleum-Company.png",
            link: "https://www.behance.net/gallery/212860079/Petroleum-Company-Website"

        },
        {
            id: 5,
            title: "HRMS",
            tag1: "APP",
            image: "../images/HRMS.png",
            link: "https://www.behance.net/gallery/196750573/HRMS-App"
        }
        ,
        {
            id: 5,
            title: "Go Kamp",
            tag1: "WEBSITE",
            image: "../images/Gokamp.png",
            link: "https://www.behance.net/gallery/188425617/Camping-website"

        }
       ,
        {
            id: 6,
            title: "Jetrise",
            tag1: "WEBSITE",
            image: "../images/jetrise.jpg",
            link: "https://www.behance.net/gallery/209909287/Jetrise-Private-Jet-Booking-Landing-Page"
        },
        {
            id: 7,
            title: "India Supply Chain Summit",
            tag1: "WEBSITE",
            image: "../images/indiasupply.png",
            link: "https://www.behance.net/gallery/210504819/India-Supply-Chain-Summit-Conference-Event-Website"
        },
        {
            id: 8,
            title: "Stationary Shop Website",
            tag1: "WEBSITE",
            image: "../images/secodi.png",
            link: "https://www.behance.net/gallery/196753235/Stationary-Shop-WebsiteF"
        },
        {
            id: 9,
            title: "Gateway Of Asia",
            tag1: "WEBSITE",
            image: "../images/incorporation.png",
            link: "https://www.behance.net/gallery/193456033/Incorporation-Service"
        },
        {
            id: 10,
            title: "Parjax - Window Arrangement Tehnology",
            tag1: "APP",
            image: "../images/parjax.png",
            link: "https://www.behance.net/gallery/222774679/Parjax-Window-Arrangement-Technology"
        },
    ]

    const Modaldata = [
        {
            id: 1,
            title: "Modal1",
            desc: "This is the modal body content."
        },
        {
            id: 2,
            title: "Modal2",
            desc: "This is the modal body content2."
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
                            <div className="head_title text-center" data-aos="flip-left" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="200" data-aos-once="true">
                                <h3>Projects</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            projects.map((projects) => (

                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="project_box" data-aos="flip-left" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="200" data-aos-once="true">
                                        <div className="project_img">
                                            <a type="button" href={projects.link}><img src={projects.image} className="img-fluid" alt="project" /></a>
                                        </div>

                                        <div className="info">
                                            <div className="tags">
                                                <span>{projects.tag1}</span>
                                            </div>
                                            <h4><a className="text-white" href={projects.link}>{projects.title}</a></h4>
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