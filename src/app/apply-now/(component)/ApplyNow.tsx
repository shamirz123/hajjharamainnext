import React from "react";
import { IoMdCheckbox } from "react-icons/io";

function ApplyNow() {
  return (
    <>
      <div className="section-page shop-checkout mb30">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-md-8">
              <h2 className="title-a mb40">Enter Your Detail</h2>
              <div className="row">
                <div className="col-sm-12">
                  <form action="#" className="form">
                    <div className="row mb20">
                      <div className="col-sm-6">
                        <label>
                          <input
                            type="text"
                            name="first_name"
                            required
                            className="form-control"
                            placeholder=" First Name *"
                            autoComplete="given-name"
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            name="company"
                            className="form-control"
                            placeholder=" Company Name (optional)"
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            name="user_address_1"
                            required
                            className="form-control"
                            placeholder=" Street Address *"
                            autoComplete="address-line1"
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            name="user_city"
                            required
                            className="form-control"
                            placeholder=" City / Town*"
                            autoComplete="address-level2"
                          />
                        </label>
                        <label>
                          <input
                            type="email"
                            name="user_email"
                            required
                            className="form-control"
                            placeholder=" Email Address *"
                            autoComplete="email"
                          />
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label>
                          <input
                            type="text"
                            name="last_name"
                            required
                            className="form-control"
                            placeholder=" Last Name *"
                            autoComplete="family-name"
                          />
                        </label>
                        <label>
                          <select className="form-control" autoComplete="country-name">
                            <option>United States</option>
                            {/* other country options */}
                          </select>
                        </label>
                        <label>
                          <input
                            type="text"
                            name="user_address_2"
                            className="form-control"
                            placeholder=" Apartment, Suite etc (optional)"
                            autoComplete="address-line2"
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            name="user_postcode"
                            className="form-control"
                            placeholder=" Postcode *"
                            autoComplete="postal-code"
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            name="phone_number"
                            className="form-control"
                            placeholder=" Phone Number *"
                            autoComplete="tel"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-sm-12">
                        <div className="text-2 mb0">
                          <div className="d-flex ">
                            <div className="icon">
                              <IoMdCheckbox />
                            </div>
                            <div>
                              <span> Create an account?</span>
                            </div>
                            <div>
                              <a href="#create_account" data-toggle="collapse">
                                {" "}
                                &nbsp; Click here!
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="create_account" className="collapse">
                          <div className="mb20" />
                          <div className="row">
                            <div className="col-sm-6">
                              <label>
                                <input
                                  type="password"
                                  name="password"
                                  required
                                  className="form-control"
                                  placeholder=" Password *"
                                  autoComplete="new-password"
                                />
                              </label>
                            </div>
                            <div className="col-sm-6">
                              <label>
                                <input
                                  type="password"
                                  name="password2"
                                  required
                                  className="form-control"
                                  placeholder="Confirm Password *"
                                  autoComplete="new-password"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="">
                    <div className="pull-left">
                      <form action="#" className="form">
                        <label>
                          <input
                            type="checkbox"
                            name="terms"
                            defaultValue="false"
                          />{" "}
                          I agree to the <a href="#">Terms and conditions</a>
                        </label>
                      </form>
                    </div>
                    <div className="pull-right xs-pull-left">
                      <button type="submit" className="btn-icon btn-e">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyNow;
