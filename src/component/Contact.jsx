import React, { useState } from "react";
// import axios from "axios";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleSheetURL =
      "https://script.google.com/macros/s/AKfycbwRU5CLC5Rtf1LV9hXn6QL_7bmPrf2EU2C-oL-X2nwW95OMSOXMKl8dY2jUk0I4QrVj/exec"; // Replace with your actual Google Apps Script URL

    try {
      const response = await fetch(googleSheetURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatusMessage({
        message: "Form submitted successfully!",
        type: "success",
      });
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage({
        message: "Failed to submit the form. Try again!",
        type: "error",
      });
    }
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_t6n17ke", // Replace with your Service ID
        "template_vbt03rm", // Replace with your Template ID
        formData,
        "fZpEy2T57ypb0Bq_z" // Replace with your User ID
      )
      .then(() => {
        console.log("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  const social = [
    {
      id: 1,
      image: "../images/behance.png",
    },
    {
      id: 2,
      image: "../images/instagram.png",
    },
    {
      id: 3,
      image: "../images/linkedin.png",
    },
  ];
  return (
    <>
      <section id="contact" className="contact_wrap">
        <div className="container">
          <div
            className="contact_box"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-once="true"
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="head_title">
                  <h3 className="mb-2">Let’s Talk About Your Projects!</h3>
                </div>
                <h4>
                  If you would like to work with us or just want to get in
                  touch, we’d love to hear from you!
                </h4>
                <h3>
                  <a
                    className="text-white"
                    href="mailto:harshprajapati212@gmail.com"
                  >
                    harshprajapati212@gmail.com
                  </a>
                </h3>
                <div className="social_list mt-3">
                  <ul className="list-unstyled list-inline">
                    {social.map((sociallist) => (
                      <li className="list-inline-item">
                        <a href="">
                          <img
                            src={sociallist.image}
                            className="img-fluid"
                            alt="behance"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-sm-6">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-sm-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-sm-12 mt-3">
                      <button type="submit" className="btn btn-light">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

                {statusMessage.message && (
                  <div
                    className={`mt-3 p-2 text-center ${
                      statusMessage.type === "success"
                        ? "bg-success text-white"
                        : "bg-danger text-white"
                    }`}
                  >
                    {statusMessage.message}
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
  );
}

export default Contact;
