import React, { useState } from "react";
// import axios from "axios";

function Contact() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!formData.fname || !formData.lname || !formData.email || !formData.phone || !formData.message) {
            setIsSuccess(false);
            setStatusMessage('All fields are required!');
            return; // Prevent submission if fields are empty
        }

        const data = new FormData();
        data.append('fname', formData.fname);
        data.append('lname', formData.lname);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('message', formData.message);

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbym9NFFJG4_BOsBJaB2nS8D-WFfidxy8IZl7o6l2ke0954qiofxxPXHXbfQs0Yf1zIj/exec', {
                method: 'POST',
                body: data,
            });
            const result = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setStatusMessage('Form submitted successfully!');
            } else {
                setIsSuccess(false);
                setStatusMessage('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            setIsSuccess(false);
            setStatusMessage('An error occurred. Please try again.');
        }
    };



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
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fname"
                                                    placeholder="First Name"
                                                    value={formData.fname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lname"
                                                    placeholder="Last Name"
                                                    value={formData.lname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    rows="5"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-light">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                {statusMessage && (
                                    <div
                                        style={{
                                            marginTop: '20px',
                                            padding: '10px',
                                            color: 'white',
                                            backgroundColor: isSuccess ? 'green' : 'red',
                                        }}
                                    >
                                        {statusMessage}
                                    </div>
                                )}
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
