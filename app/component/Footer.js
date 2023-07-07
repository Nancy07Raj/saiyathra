"use client";
import React from "react";
import "@/public/styles/footer.scss";
import Link from "next/link";
import { Row, Col, Image } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <div className="banner d-flex justify-content-center">
        <Row className="content d-flex m-5 p-4 w-75 rounded-4">
          <Col lg={3} md={6} sm={12} className="address-logo mt-3 ">
            <img src="/images/website-logo.png" alt="logo" />
            <div className="address">
              <p className="footer-title">ADDRESS:</p>
              <div className="detail fw-medium">
                <p>No:19,Subham Complex,</p>
                <p>North Park Street</p>
                <p>Chennai, Tamilnadu 600053</p>
              </div>
              <p className="phone fw-semibold">Phone: 044-35679022</p>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="userful-links d-flex flex-column mt-5"
          >
            <p className="footer-title">Userful Links</p>
            <Link href="#">Home</Link>
            <Link href="#">Flight</Link>
            <Link href="#">Hotel</Link>
            <Link href="#">Gallery</Link>
            <Link href="#">Contact Us</Link>
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="information d-flex flex-column mt-5"
          >
            <p className="footer-title">Information</p>
            <Link href="#">Tour Packages</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Condition </Link>
          </Col>
          <Col lg={3} md={5} sm={12} className="trip mt-5">
            <p className="footer-title">Recent Trips</p>
            <div className="trip-img">
              <Image src="/images/poster.jpg" alt="trip" fluid />
              <Image src="/images/poster.jpg" alt="trip" fluid />
              <Image src="/images/poster.jpg" alt="trip" fluid />
              <Image src="/images/poster.jpg" alt="trip" fluid />
              <Image src="/images/poster.jpg" alt="trip" fluid />
              <Image src="/images/poster.jpg" alt="trip" fluid />
            </div>
          </Col>
        </Row>
      </div>
      <div className="copyright d-flex">
        <p>
          &#169; 2023. All Right Reserved. Design and Develeoped by{" "}
          <Link href="https://www.webdads2u.com/" target="_blank">
            WEBDADS2U PVT LTD
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
