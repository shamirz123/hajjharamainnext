import Image from "next/image";
import React from "react";
import { BsLifePreserver } from "react-icons/bs";
import { FaCheckSquare } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const AboutServices = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-6 sm-box3">
          <div className="box-services-2">
            <div className="box-left">
              <div className="icon icon-3 ">
                <FaCheckSquare />
              </div>
            </div>
            <div className="box-right">
              <h3 className="title-small">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="read more"
                  className="a-inherit"
                >
                  Responsive Design
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                temporibus quae, aliquid!
              </p>
              <div className="br-bottom"></div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="box-services-2">
            <div className="box-left">
              <div className="icon icon-3 ">
                <FaCheckSquare />
              </div>
            </div>
            <div className="box-right">
              <h3 className="title-small">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="read more"
                  className="a-inherit"
                >
                  Responsive Design
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                temporibus quae, aliquid!
              </p>
              <div className="br-bottom"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb50"></div>

      <div className="row">
        <div className="col-sm-12 col-md-6 sm-box3">
          <div className="box-services-2">
            <div className="box-left">
              <div className="icon icon-3 ">
                <FaCheckSquare />
              </div>
            </div>
            <div className="box-right">
              <h3 className="title-small">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="read more"
                  className="a-inherit"
                >
                  Responsive Design
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                temporibus quae, aliquid!
              </p>
              <div className="br-bottom"></div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="box-services-2">
            <div className="box-left">
              <div className="icon icon-3 ">
                <FaCheckSquare />
              </div>
            </div>
            <div className="box-right">
              <h3 className="title-small">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="read more"
                  className="a-inherit"
                >
                  Responsive Design
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                temporibus quae, aliquid!
              </p>
              <div className="br-bottom"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="simple-hr"></div>

      <div className="row col-p30">
        <div className="col-sm-6 xs-box">
          <div className="box-services-7">
            <h3 className="title-uppercased mt30 mb10">
              <div className="icon  icon-5 d-inline">
                <IoCartOutline />
              </div>
              Ecommerce
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              maiores repudiandae, accusantium reiciendis!
            </p>
            <p>
              <a href="#" className="read-more">
                read more <i className="icon arrow_carrot-2right"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="box-services-4 dark">
            <div className="bg-overlay"></div>
            <div className="row col-p0 p0">
              <div className="col-sm-12 p0">
                <h3 className="title title-medium title-shadow-a">
                  Top notch Support
                </h3>
                <p className="mb0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit cum
                  recusandae!
                </p>
              </div>
            </div>
            <div className="icon ">
              <BsLifePreserver />
            </div>
          </div>
        </div>
      </div>

      <div className="simple-hr"></div>

      <div className="row col-p30">
        <div className="col-sm-12 col-md-7 sm-box3">
          <h3 className="title-uppercased br-left mb30">Featured service</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            totam at itaque eveniet omnis laborum suscipit minima esse, amet
            quas quos, quasi dolor nisi obcaecati, illum eos atque delectus
            voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eius
            est nostrum voluptate dolor, fugit. Saepe neque, exercitationem
            nesciunt id.
          </p>
          <div className="br-bottom mt30 mb0"></div>
        </div>
        <div className="col-sm-12 col-md-5">
          <Image
            src="/assets/images/demo/p01.jpg"
            className="br2"
            alt="Service Image"
             width={200}
                height={200}
          />
        </div>
      </div>

      <div className="simple-hr"></div>

      <div className="row col-p30">
        <div className="col-sm-12 col-md-7 sm-box3 col-md-push-5">
          <h3 className="title-uppercased br-left mb30">
            Another Featured service
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            totam at itaque eveniet omnis laborum suscipit minima esse, amet
            quas quos, quasi dolor nisi obcaecati, illum eos atque delectus
            voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eius
            est nostrum voluptate dolor, fugit. Saepe neque, exercitationem
            nesciunt id.
          </p>
          <div className="br-bottom mt30"></div>
        </div>
        <div className="col-sm-12 col-md-5 col-md-pull-7">
          <Image
            src="/assets/images/demo/p04.jpg"
            className="br2"
            alt="Service Image"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
