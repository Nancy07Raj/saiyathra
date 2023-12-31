"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Row,
  Col,
  NavDropdown,
  Navbar,
  Nav,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import "@/public/styles/header.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { PiTwitterLogoThin } from "react-icons/pi";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="header">
      <div className="top-header py-2">
        <Container>
          {/* <div className="contact">
            <p>FLIGHT PACKAGE : +91 - 89 39 080 222</p>
            <p>FLIGHT PACKAGE : +91 - 89 39 080 223</p>
          </div>
          <div className="social-media">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <PiTwitterLogoThin />
            <AiOutlineYoutube />
          </div> */}
          <Row>
            <Col>
              <div className="d-flex mr-3 justify-content-end ">
                <div className="contact me-2">
                  <p>FLIGHT PACKAGE : +91 - 89 39 080 222</p>
                  <p>FLIGHT PACKAGE : +91 - 89 39 080 223</p>
                </div>
                <span className="d-flex social-media ps-2 align-items-center">
                  <Image src="/images/facebook.png" alt="facebook" />
                  {/* <AiOutlineFacebook /> */}
                  {/* <AiOutlineInstagram /> */}
                  <Image src="/images/instagram.png" alt="Instagram" />
                  <Image src="/images/twitter.png" alt="twitter" />
                  {/* <PiTwitterLogoThin /> */}
                  {/* <AiOutlineYoutube /> */}
                  <Image src="/images/youtube.png" alt="youtube" />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar sticky="top" collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand to="/" className="logoNav">
            <Link href="/">
              {" "}
              <img src="/images/website-logo.png" alt="logo" width={220} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-4">
              <Nav.Link
                href="/"
                className={`${pathname === "/" ? "active" : ""}`}
              >
                HOME
              </Nav.Link>
              <Nav.Link href="/flight">FLIGHT</Nav.Link>
              <Nav.Link href="/hotel">HOTELS</Nav.Link>
              <Nav.Link href="/gallery">GALLERY</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
            <Button variant="outline-warning" className="d-flex">
              BOOK NOW
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
