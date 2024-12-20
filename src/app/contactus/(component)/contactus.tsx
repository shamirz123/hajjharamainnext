"use client";
import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[A-Za-z]+$/; // Only allows alphabet characters

    // Reset field errors
    const errors = {
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      message: "",
    };

    if (!formData.firstName) {
      errors.firstName = "This field is required!";
    } else if (!namePattern.test(formData.firstName)) {
      errors.firstName = "First name should contain only letters.";
    }

    if (!formData.lastName) {
      errors.lastName = "This field is required!";
    } else if (!namePattern.test(formData.lastName)) {
      errors.lastName = "Last name should contain only letters.";
    }

    if (!formData.subject) {
      errors.subject = "This field is required!";
    }

    if (!formData.email) {
      errors.email = "This field is required!";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message) {
      errors.message = "This field is required!";
    }

    if (Object.values(errors).some((error) => error)) {
      setIsError(true);
      setFieldErrors(errors);
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
      setIsError(false);
      setErrorMessage("");
      setFieldErrors({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
      });
      // Here you can handle form submission, e.g., send data to your API
    }
  };

  return (
    <div className="section">
        <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          {/* Contact Information */}
          <div className="contact-box-wrapper">
            <div className="p-2">
              <div className="icon icon-4">
                <MdOutlineLocationOn />
              </div>
            </div>
            <div className="p-2">
              <p className="mb0">
                55 Cyan Avenue, Suite 65 <br /> Los Angeles, CA 8008
              </p>
            </div>
          </div>
          <div className="contact-box-wrapper">
            <div className="p-2">
              <div className="icon icon-4">
                <FaMobileAlt />
              </div>
            </div>
            <div className="p-2">
              <p className="mb0">0 800 55 22 55</p>
              <p className="mb0">0 800 77 21 85</p>
            </div>
          </div>
          <div className="contact-box-wrapper">
            <div className="p-2">
              <div className="icon icon-4">
                <FiClock />
              </div>
            </div>
            <div className="p-2">
              <p className="mb0">Mon - Fri: 9:00 - 18:00</p>
              <p className="mb0">Sat - Sun: Closed</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8">
          <div className="box-services-6">
            <iframe
              src="https://maps.google.com/maps?q=Burj-E-Noor+Plaza&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Dummy Iframe"
              width="100%"
              height="800px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-12 col-md-8 sm-box3">
          {isSubmitted && (
            <div className="alert alert-success">
              <span className="glyphicon glyphicon-ok" /> &nbsp;
              <strong>Success!</strong> Thank you for your message.
            </div>
          )}
          {isError && errorMessage && (
            <div className="alert alert-danger">
              <span className="glyphicon glyphicon-remove" /> &nbsp;
              <strong>Error!</strong> {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="form ajax-contact-form">
            <div className="row col-p10">
              <div className="col-sm-6">
                <label className="mb10">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="First Name"
                  />
                  {fieldErrors.firstName && (
                    <small className="form-message-error">{fieldErrors.firstName}</small>
                  )}
                </label>
              </div>
              <div className="col-sm-6">
                <label className="mb10">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Last Name"
                  />
                  {fieldErrors.lastName && (
                    <small className="form-message-error">{fieldErrors.lastName}</small>
                  )}
                </label>
              </div>
            </div>
            <div className="row col-p10">
              <div className="col-sm-6">
                <label className="mb10">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Subject *"
                  />
                  {fieldErrors.subject && (
                    <small className="form-message-error">{fieldErrors.subject}</small>
                  )}
                </label>
              </div>
              <div className="col-sm-6">
                <label className="mb10">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email Address *"
                  />
                  {fieldErrors.email && (
                    <small className="form-message-error">{fieldErrors.email}</small>
                  )}
                </label>
              </div>
            </div>
            <label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols={30}
                rows={4}
                className="form-control"
                placeholder="Message *"
              />
              {fieldErrors.message && (
                <small className="form-message-error">{fieldErrors.message}</small>
              )}
            </label>
            <div className="mb40" />
            <div className="">
              <div className="pull-left">
                <button type="submit" className="btn btn-icon btn-e">
                  <div className="d-flex align-items-center">
                    <div className="icon">
                      <MdOutlineEmail />
                    </div>
                    Send Message
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-4">
          <h3 className="title-small">Need help?</h3>
          <div className="br-bottom mb20" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae quaerat eveniet molestiae alias quis at eum inventore
            doloribus commodi beatae!
          </p>
          <div className="mb30" />
          <p>
            <a href="#" className="btn-d">
              Support forum
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  
  );
}

export default ContactUs;
