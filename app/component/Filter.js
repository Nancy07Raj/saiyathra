import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { VscListFilter } from "react-icons/vsc";
import { Select, DatePicker } from "antd";
import { Airport, PersonCount } from "./constant";
import { Button, Row, Col, Container } from "react-bootstrap";

export default function Filter() {
  return (
    <div className="banner-filter">
      <div className="top-banner">
        <img src="/images/Banner.jpg" alt="banner" className="img-fluid" />
      </div>
      <Container className="mb-5">
        <Row>
          <Col xl={1} lg={2} md={2} xs={4} className="p-0">
            <div className="filter-tab p-2 rounded-top-4 text-center ">
              Flights
            </div>
          </Col>
        </Row>
        <Row className="filter-search justify-content-center p-4">
          <Col
            lg={2}
            md={6}
            sm={12}
            className="py-lg-0 py-md-2 py-sm-2 py-xs-2"
          >
            <p>Flying from:</p>
            <Select
              placeholder="City or Airport"
              options={Airport}
              suffixIcon={<BiSolidDownArrow />}
            />
          </Col>
          <Col
            lg={2}
            md={6}
            sm={12}
            className="py-lg-0 py-md-2 py-sm-2 py-xs-2"
          >
            <p>To:</p>
            <Select
              placeholder="City or Airport"
              options={Airport}
              suffixIcon={<BiSolidDownArrow />}
            />
          </Col>
          <Col
            lg={2}
            md={6}
            sm={12}
            className="py-lg-0 py-md-2 py-xs-2 py-sm-2"
          >
            <p>Available date:</p>
            <DatePicker
              suffixIcon={<BiSolidDownArrow />}
              placeholder="Mm/Dd/Yy"
              format={(val) => val.format("DD/MM/YYYY")}
            />
          </Col>
          <Col
            lg={2}
            md={6}
            sm={12}
            className="py-lg-0 py-md-2 py-xs-2 py-sm-2"
          >
            <p>Returning:</p>
            <DatePicker
              suffixIcon={<BiSolidDownArrow />}
              placeholder="Mm/Dd/Yy"
              format={(val) => val.format("DD/MM/YYYY")}
            />
          </Col>
          <Col lg={1} md={6} xs={6} className="py-lg-0 py-md-2 py-xs-2 py-sm-2">
            <p>Adult:</p>
            <Select
              placeholder="1"
              options={PersonCount}
              suffixIcon={<BiSolidDownArrow />}
            />
          </Col>
          <Col lg={1} md={6} xs={6} className="py-lg-0 py-md-2 py-sm-2 py-xs-2">
            <p>Child:</p>
            <Select
              placeholder="1"
              options={PersonCount}
              suffixIcon={<BiSolidDownArrow />}
            />
          </Col>
          <Col
            lg={2}
            md={6}
            sm={12}
            className="filter-btn d-flex align-self-end align-items-center justify-content-center rounded-3 py-lg-0 py-md-2 py-sm-2 py-xs-2"
          >
            <VscListFilter />
            <Button type="button">Search Filter</Button>
          </Col>
        </Row>
        {/* <div className="filter d-flex">
          <div className="filter-tab">Flights</div>
          <div className="filter-select">
            <div className="d-flex select">
              <p>Flying from:</p>
              <Select
                placeholder="City or Airport"
                options={Airport}
                suffixIcon={<BiSolidDownArrow />}
              />
            </div>
            <div className="d-flex select">
              <p>To:</p>
              <Select
                placeholder="City or Airport"
                options={Airport}
                suffixIcon={<BiSolidDownArrow />}
              />
            </div>
            <div className="d-flex select">
              <p>Available date:</p>
              <DatePicker
                suffixIcon={<BiSolidDownArrow />}
                placeholder="Mm/Dd/Yy"
              />
            </div>
            <div className="d-flex select">
              <p>Returning:</p>
              <DatePicker
                suffixIcon={<BiSolidDownArrow />}
                placeholder="Mm/Dd/Yy"
              />
            </div>

            <div className="d-flex select">
              <p>Adult:</p>
              <Select
                placeholder="1"
                options={PersonCount}
                suffixIcon={<BiSolidDownArrow />}
              />
            </div>

            <div className="d-flex select">
              <p>Child:</p>
              <Select
                placeholder="1"
                options={PersonCount}
                suffixIcon={<BiSolidDownArrow />}
              />
            </div>
            <div className="search-btn d-flex">
              <VscListFilter />
              <Button type="button">Search Filter</Button>
            </div>
          </div>
        </div> */}
      </Container>
    </div>
  );
}
