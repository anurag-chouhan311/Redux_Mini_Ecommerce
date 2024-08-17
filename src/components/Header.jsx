import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import cart_gif from "../../public/cart.gif";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DELETE } from "../Redux/Actions/action";
const Header = () => {
  const [subTotal,setSubTotal]=useState(0);
  const getData = useSelector((state) => state.cartReducer.cart);
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const dispatch=useDispatch();

const dlt=(index)=>{
  dispatch(DELETE(index))
}
const total=()=>{
  let price=0;
  getData.map((item,index)=>{
    price=price+item.price;
    price*=item.qnty;
  })
  setSubTotal(price);
}

useEffect(()=>{
  total();
},[getData])
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          {/* <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add TO Cart
          </NavLink> */}
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light items-center"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>{" "}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length > 0 ? (
            <div
              style={{ width: "24rem", padding: 10 }}
              className="card_details"
            >
              <Table>
                <thead>
                  <tr>
                    <td>Photo</td>
                    <td>Restaurant Details</td>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink onClick={handleClose} to={`/cards/${index}`}>
                              <img
                                src={item.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{item.rname}</p>
                            <p>Price : {item.price} RS</p>
                            <p>Quantity : {item.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            >
                              <i onClick={()=>dlt(index)} className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td className="mt-5">
                            <i onClick={()=>dlt(index)}
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              className="fas fa-trash largetrash"
                            ></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total : {subTotal}RS</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ position: "relative", padding: 10, width: "24rem" }}
            >
              <i
                onClick={handleClose}
                className="fas fa-close smallclose"
                style={{
                  position: "absolute",
                  top: 2,
                  right: 23,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              />
              <p style={{ fontSize: 23 }}>Your cart is empty</p>
              <img
                src={cart_gif}
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
