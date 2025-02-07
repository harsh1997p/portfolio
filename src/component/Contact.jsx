import React, { useState } from "react";
// import axios from "axios";

function Contact() {


    const social = [
        {
            id: 1,
            image: '../images/behance.png'
        },
        {
            id: 2,
            image: '../images/instagram.png'
        },
        {
            id: 3,
            image: '../images/linkedin.png'
        },

    ]
    return (
        <>
            <section id="contact" className="contact_wrap">

                <div className="container">
                    <div className="contact_box" data-aos="flip-left" data-aos-duration="1000" data-aos-offset="200" data-aos-once="true">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="head_title">
                                    <h3 className="mb-2">Let’s Talk About
                                        Your Projects!</h3>


                                </div>
                                <h4>If you would like to work with us or just want to get in touch, we’d love to hear from you!</h4>
                                <h3><a className="text-white" href="mailto:harshprajapati212@gmail.com">harshprajapati212@gmail.com</a></h3>
                                <div className="social_list mt-3">
                                    <ul className="list-unstyled list-inline">
                                        {
                                            social.map((sociallist) => (
                                                <li className="list-inline-item"><a href=""><img src={sociallist.image} className="img-fluid"
                                                    alt="behance" /></a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="fname" placeholder="First Name" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="phone" placeholder="Phone" />
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-light">Submit</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="shape">
                    <img src="images/shape8.png" className="img-fluid" alt="shape" />
                </div>
            </section>
        </>
    )
}

export default Contact;
