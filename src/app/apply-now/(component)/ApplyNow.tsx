import Link from "next/link";
import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoGift } from "react-icons/io5";

function ApplyNow() {
  return (
    <>
      <div className="section-page shop-checkout mb30">
        <div className="container">
          <div className="row mb50">
            <div className="col-sm-12">
              <div className="d-flex flex-row">
                <div className="p-2">
                  <IoMdCheckboxOutline className="icon" />
                </div>
                <div className="p-2">Returning customer?</div>
                <div className="p-2">
                  <a href="#returning_customer" data-toggle="collapse">
                    &nbsp; Click here!
                  </a>
                </div>
              </div>

              <div id="returning_customer" className="collapse">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb20" />
                    <p>
                      If you have shopped with us before, please enter your
                      details in the boxes below. If you are a new customer
                      please proceed to the Billing &amp; Shipping section.
                    </p>
                    <div className="br-bottom mb30" />
                    <form action="#" className="form">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email_address"
                          required
                          className="form-control"
                          placeholder=" Email Address *"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          required
                          className="form-control"
                          placeholder=" Password *"
                        />
                      </div>
                      <label className="form-remember">
                        <input
                          type="checkbox"
                          name="remember"
                          defaultValue="yes"
                        />{" "}
                        Remember Password{" "}
                      </label>
                      <a href="#" className="forgot">
                        <small>Forgot your password?</small>
                      </a>
                      <div className="mt10">
                        <button type="submit" className="btn btn-icon btn-d">
                          <span className="icon">
                            <IoGift />
                          </span>{" "}
                          Login
                        </button>
                      </div>
                    </form>
                    <div className="simple-hr mb20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2 className="title-a mb40">Do you have a promotional code?</h2>
              <form action="#" className="form">
                <div className="row">
                  <div className="col-sm-3 xs-mb10">
                    <div className="form-group">
                      <input
                        type="text"
                        name="promo_code"
                        className="form-control mt0"
                        placeholder=" Promotional Code"
                        style={{ height: 44 }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <button type="submit" className="btn btn-icon btn-d">
                      <div className="icon d-inline">
                        <IoGift />
                      </div>{" "}
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="simple-hr" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-md-8">
              <h2 className="title-a mb40">Billing Address</h2>
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
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            name="user_city"
                            required
                            className="form-control"
                            placeholder=" City / Town*"
                          />
                        </label>
                        <label>
                          <input
                            type="email"
                            name="user_email"
                            required
                            className="form-control"
                            placeholder=" Email Address *"
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
                          />
                        </label>
                        <label>
                          <select className="form-control">
                            <option>United States</option>
                            <option value="Afganistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antigua & Barbuda">
                              Antigua &amp; Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bonaire">and so on...</option>
                          </select>
                        </label>
                        <label>
                          <input
                            type="text"
                            name="user_address_2"
                            className="form-control"
                            placeholder=" Apartment, Suite etc (optional)"
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            name="user_postcode"
                            className="form-control"
                            placeholder=" Postcode *"
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            name="phone_number"
                            className="form-control"
                            placeholder=" Phone Number *"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="text-2 mb0">
                          <i className="icon icon_box-checked" /> Create an
                          account?
                          <a href="#create_account" data-toggle="collapse">
                            {" "}
                            &nbsp; Click here!
                          </a>
                        </p>
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
                                  placeholder=" Confirm Password *"
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
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="simple-hr" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-md-8">
              <h2 className="title-a mb40">Shipping Address</h2>
              <p className="text-2 mb0">
                <i className="icon icon_box-checked" /> Ship to a different
                address?
                <a href="#different_address" data-toggle="collapse">
                  {" "}
                  &nbsp; Click here!
                </a>
              </p>
              <div id="different_address" className="collapse">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb20" />
                    <form action="#" className="form">
                      <div className="row">
                        <div className="col-sm-6">
                          <label>
                            <input
                              type="text"
                              name="first_name"
                              required
                              className="form-control"
                              placeholder=" First Name *"
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
                            />
                          </label>
                          <label>
                            <input
                              type="text"
                              name="user_city"
                              required
                              className="form-control"
                              placeholder=" City / Town*"
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
                            />
                          </label>
                          <label>
                            <select className="form-control">
                              <option>United States</option>
                              <option value="Afganistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antigua & Barbuda">
                                Antigua &amp; Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bonaire">and so on...</option>
                            </select>
                          </label>
                          <label>
                            <input
                              type="text"
                              name="user_address_2"
                              className="form-control"
                              placeholder=" Apartment, Suite etc (optional)"
                            />
                          </label>
                          <label>
                            <input
                              type="text"
                              name="user_postcode"
                              className="form-control"
                              placeholder=" Postcode *"
                            />
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="simple-hr" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="simple-hr" />
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
                    <i className="icon icon_cart_alt" /> Submit order
                  </button>
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
