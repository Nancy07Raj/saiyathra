"use client";

import React, { useRef, useEffect } from "react";
import "@/public/styles/home.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FcHeadset } from "react-icons/fc";
import PackageCard from "./component/PackageCard";
import Filter from "./component/Filter";
import { Input } from "antd";
import { TiLocationArrow } from "react-icons/ti";
import { Row, Col, Image } from "react-bootstrap";

export default function Home() {
  const btnFocus = useRef(null);

  useEffect(() => {
    btnFocus.current.focus();
  }, []);
  return (
    <div className="package-card">
      <Filter />
      <Container>
        <Row className="pb-5">
          <Col lg={4} md={4} xs={12}>
            <div className="feature-item py-3 d-flex align-items-center justify-content-center">
              <div className="pe-2">
                <img src="/images/hidden-fee-80.png" alt="Info" />
              </div>
              <div>
                <h5>Pay no hidden fees</h5>
                <p className="fw-medium">
                  Get a clear price breakdown, every step of the way
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <div className="feature-item py-3 d-flex align-items-center justify-content-center">
              <div className="pe-2">
                <img src="/images/more-flexibility-80.png" alt="Info" />
              </div>
              <div>
                <h5>Get more flexibility</h5>
                <p className="fw-medium">
                  Change yout travel dates with more Flexible ticket option*
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} xs={12}>
            <div className="feature-item py-3 d-flex align-items-center justify-content-center">
              <div className="pe-2">
                <img src="/images/customer-support-80.png" alt="Info" />
              </div>
              <div>
                <h5>24/7 Customer Support</h5>
                <p className="fw-medium">
                  Our Experience Specialists are always here to help
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* <div className="feature d-flex">
          <div className="feature-item d-flex">
            <div className="feature-para d-flex">
              <h5>Pay no hidden fees</h5>
              <p>Get a clear price breakdown, every step of the way</p>
            </div>
          </div>
          <div className="feature-item d-flex">
          <img src="/images/more-flexibility.png" alt="Info" />
            <div className="feature-para d-flex">
              <h5>Get more flexibility</h5>
              <p>Change yout travel dates with more Flexible ticket option*</p>
            </div>
          </div>
          <div className="feature-item d-flex">
          <img src="/images/customer-support.png" alt="Info" />
            <div className="feature-para d-flex">
              <h5>24/7 Customer Support</h5>
              <p>Our Experience Specialists are always here to help</p>
            </div>
          </div>
        </div> */}
      </Container>
      <Container className="mb-5">
        <h5 className="fw-medium">
          Shirdi Tour Package From Chennai, Bangalore, Coimbatore
        </h5>
        <p>Shirdi Flight Tour Package</p>
        <ButtonGroup className="btn-groups mb-4 p-1">
          <Button className=" rounded-2 mx-1" type="button" ref={btnFocus}>
            Chennai
          </Button>
          <Button
            className=" rounded-2 mx-1"
            type="button"
            onClick={() => btnFocus.current.blur()}
          >
            Bangalore
          </Button>
          <Button
            className=" rounded-2 mx-1"
            type="button"
            onClick={() => btnFocus.current.blur()}
          >
            Coimbatore
          </Button>
        </ButtonGroup>
        <PackageCard />
      </Container>
      {/* <div className="booknow-banner"> */}
      {/* <Container className="d-flex flex-sm-column flex-lg-row justify-content-between align-items-center py-2 px-4">
          <div className="booknow-content d-flex flex-column align-items-center">
            <img src="/images/aeroplane-1.png" alt="aeroplane-1" />
            <div className="booknow-title fs-1 fw-bold px-5 pb-4">Chennai</div>
            <p className="path px-2">Mumbai - Nashik - Shridi</p>
            <div className="booknow-info px-5 py-2 mb-4 rounded-3">
              Tour Package Starting @ 14,500
            </div>
            <Button type="button">BOOK NOW</Button>
          </div>
          <div className="animate-img">
            <img src="/images/footer-images.png" alt="footer-image" fluid />
          </div>
        </Container> */}
      <div className="booknow-banner">
        <Container className="py-2">
          <Row className="justify-content-center align-items-center">
            <Col lg={4} md={12} sm={12}>
              {/* <img src="/images/aeroplane-1.png" alt="aeroplane-1" />
                <div className="booknow-title fs-1 fw-bold px-5 pb-4">
                  Chennai
                </div>
                <p className="path px-2">Mumbai - Nashik - Shridi</p>
                <div className="booknow-info px-5 py-2 mb-4 rounded-3">
                  Tour Package Starting @ 14,500
                </div>
              <Button type="button">BOOK NOW</Button> */}
              <div className="booknow-content">
                <img
                  src="/images/aeroplane-1.png"
                  alt="aeroplane-1"
                  className="d-block mx-auto img-fluid"
                />
                <h4 className="text-center fs-1 fw-bold px-5 pb-4 booknow-title">
                  Chennai
                </h4>
                <h6 className="text-center path px-2">
                  Mumbai - Nashik - Shridi
                </h6>
                <h6 className="text-center booknow-info px-5 py-2 mb-4 rounded-3">
                  Tour Package Starting @ 14,500
                </h6>
                <Button type="button" className="d-block mx-auto">
                  BOOK NOW
                </Button>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <img
                src="/images/footer-images.png"
                alt="footer-image"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* </div> */}
      <div>
        {/* <Container className="py-5">
          <div className="touch-container">
            <Row className="touch-row">
              <Col lg={12} md={12} sm={12}>
                <span>
                  <img
                    src="/images/aeroplane 2.jpg"
                    className="touch-img"
                  ></img>
                </span>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12} className="touch-top ">
                <span>Keep in touch</span> <br />
                <h4>Travel with Us</h4>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 8, offset: 4 }}
                md={8}
                sm={12}
                className="touch-right"
              >
                <div className="touch-input d-flex justify-content-between align-items-center mx-4">
                  <div>
                    <Input
                      placeholder="Enter Your Email Address"
                      className="px-3 py-2"
                    />
                  </div>
                  <div className="touch-btn d-flex justify-content-between p-2 rounded-2 align-items-center">
                    <Button type="button">Send Us</Button>
                    <TiLocationArrow />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container> */}
        <Container className="touch-container">
          <div className="touch-border w-75 my-5"></div>
          <Row className="touch-content">
            <Col lg={4} className="touch-image">
              <Image src="/images/aeroplane 2.jpg" className="touch-img" />
            </Col>
            <Col lg={{ span: 6, offset: 6 }} className="touch-right-content">
              {/* <div className="touch-right"> */}
              <Row>
                <Col lg={6} md={6} className="touch-top">
                  <span>Keep in touch</span> <br />
                  <h4>Travel with Us</h4>
                </Col>

                <Col lg={12} md={8} className="d-flex touch-form my-2">
                  <Input
                    placeholder="Enter Your Email Address"
                    className="px-3 py-2"
                  />
                  <div className="touch-btn d-flex justify-content-between p-2 mx-2 rounded-2 align-items-center">
                    <Button type="button">Send Us</Button>
                    <TiLocationArrow />
                  </div>
                </Col>
              </Row>

              {/* </div> */}
            </Col>
          </Row>
        </Container>

        {/* <div className="keep-touch">
        <div className="touch">
                <h6>Keep in touch</h6>
                <p>Travel with us</p>
              </div>
              <div className="plane">
                <img src="/images/aeroplane-2.png" alt="aeroplane-2" />
              </div>
          <Container className="d-flex justify-content-end">
          
            <div className="touch-content">
              <div className="send-us d-flex">
                <Input placeholder="Enter Your Email Address" />
                <div className="sendus-btn d-flex">
                  <Button type="button">Send Us</Button>
                  <TiLocationArrow />
                </div>
              </div>
            </div>
           
          </Container>
          
        </div> */}
      </div>
    </div>
  );
}
