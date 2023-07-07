"use client";

import React from "react";
import { MdFlight } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { packageCardDetails } from "./constant";
import { Button, Card, Row, Col, Image } from "react-bootstrap";

export default function PackageCard() {
  return (
    <>
      <Row>
          {packageCardDetails.map((card) => (
            <>
            <Col lg={3} md={6} sm={12} className="my-2">
              <Card className="border-0">
                <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                  <div className="days px-2 py-1 rounded-3">{card?.days}</div>
                    <Card.Title>
                      {card.name}
                      <Card.Subtitle>{card?.para}</Card.Subtitle>
                    </Card.Title>
                    
                    <Card.Text className="price m-0 pb-1">
                    {card?.price}
                    <span> per person</span>
                  </Card.Text>
                  <div className="amenities d-flex  align-items-center justify-content-between">
                    <div className="amenities-item px-2 ">
                      <Image src="/images/flight-icon.png" alt="flight" />
                      <p >Flight</p>
                    </div>
                    <div className="amenities-item px-2 ">
                    <Image src="/images/room-icon.png" alt="flight" />
                      <p >Room</p>
                    </div>
                    <div className="amenities-item px-2">
                    <Image src="/images/food-icon.png" alt="flight" />
                      <p >Food</p>
                    </div>
                    <div className="amenities-item px-2 ">
                    <Image src="/images/transport-icon.png" alt="flight" />
                      <p>Transfer</p>
                    </div>
                  </div>
                  <div className="card-btn d-flex justify-content-between">
                    <a href="#" className="detail-btn rounded-3 px-2">
                        <Button type="button" className="px-0  pe-4">DETAILS </Button>     
                        <SlCalender />  
                    </a>
                    <div className="book-btn rounded-3">
                    <a href="#" className="book-btn rounded-3 px-2">
                        <Button type="button"  className="px-0  pe-2">BOOK ONLINE </Button>     
                        <SlCalender />  
                    </a>                     
                    </div>
                  </div>
                </Card.Body>
              </Card>
              </Col>
            </>
          ))}
        
      </Row>
    </>

    // <div className="card-grid">
    //   {packageCardDetails?.map((card) => (
    //     <div className="card" key={card?.id}>
    //       <img alt="img" src={card?.image} />
    //       <div className="card-bottom d-flex">
    //         <div className="days">{card?.days}</div>
    //         <p className="title">
    //           {card?.name} <br />
    //           {card?.para && <h6 className="info">{card?.para}</h6>}
    //         </p>
    //         <p className="price">
    //           {card?.price}
    //           <span> per person</span>
    //         </p>
    //         <div className="amenities">
    //           <div className="amenities-item d-flex">
    //             <MdFlight />
    //             <p>Flight</p>
    //           </div>
    //           <div className="amenities-item d-flex">
    //             <FaBed />
    //             <p>Flight</p>
    //           </div>
    //           <div className="amenities-item d-flex">
    //             <FaBed />
    //             <p>Flight</p>
    //           </div>
    //           <div className="amenities-item d-flex">
    //             <MdFlight />
    //             <p>Flight</p>
    //           </div>
    //         </div>
    //         <div className="card-btn d-flex">
    //           <div className="detail-btn d-flex">
    //             <Button type="button">DETAILS </Button>
    //             <SlCalender />
    //           </div>
    //           <div className="book-btn d-flex">
    //             <Button type="button">BOOK ONLINE </Button>
    //             <SlCalender />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}
