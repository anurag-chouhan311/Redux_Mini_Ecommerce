import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardData from "./CardData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Actions/action";
const Cards = () => {
  const [data, setData] = useState(cardData);
  const dispatch = useDispatch();

  const send = (item) => {
    dispatch(ADD(item));
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add To Cart Project</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={item.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{item.rname}</Card.Title>
                <Card.Text>price : {item.price} RS</Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    onClick={() => send(item)}
                    className="col-lg-12"
                    variant="primary"
                  >
                    Add to cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
