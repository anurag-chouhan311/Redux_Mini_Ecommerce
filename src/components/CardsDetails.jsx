import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, DECREMENT, DELETE } from "../Redux/Actions/action";
const CardsDetails = () => {
  const { index } = useParams();
  const [newData, setNewData] = useState([]);
  const getData = useSelector((state) => state.cartReducer.cart);
  const filteredData = () => {
    const data = getData.filter((item, i) => {
      return i === parseInt(index);
    });
    setNewData(data);
  };

  useEffect(() => {
    filteredData();
    console.log(newData)
  }, [index]);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const dlt=(index)=>{
    dispatch(DELETE(index));
    navigate('/')
  }
  const send = (item) => {
    dispatch(ADD(item));
  };
  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
      <section className="container  mt-3">
        <div className="iteamsdetails">
          {
            newData && newData.map((item, index) => {
            return (
              <>
                <div className="items_img">
                  <img src={item.imgdata} alt="" />
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <b>Restaurant</b> : {item.rname}
                        </p>
                        <p>
                          <b>Price</b> : {item.price} RS
                        </p>
                        <p>
                          <b>Dishes</b> : {item.address}
                        </p>
                        <p>
                          <b>Total</b> : {item.price * item.qnty} RS
                        </p>
                        <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer", background:"#ddd", color:"#111"}}>
                        <span style={{fontSize:24}} onClick={item.qnty<=1 ? ()=>dispatch(dlt(index)) : ()=>dispatch(DECREMENT(item))}>-</span>
                        <span style={{fontSize:22}}>{item.qnty}</span>
                        <span style={{fontSize:24}} onClick={()=>send(item)}>+</span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <b>Rating</b> :{" "}
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {item.rating}★
                          </span>
                        </p>
                        <p>
                          <b>Order Review</b> : <span>{item.somedata}</span>
                        </p>
                        <p>
                          <b>Remove</b> :{" "}
                          <span>
                            <i onClick={()=>dlt(index)}
                              className="fas fa-trash"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            />
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })
          }
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
