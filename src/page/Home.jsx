import React, { useState } from "react";
import Rasm from "/images/image-product-1.jpg";
import Rasm2 from "/images/image-product-2.jpg";
import Rasm3 from "/images/image-product-3.jpg";
import Rasm4 from "/images/image-product-4.jpg";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../store/cartSlice";

const Home = () => {
  const rasm = [Rasm, Rasm2, Rasm3, Rasm4];
  const [tanlangan, setTanlangan] = useState(Rasm);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch()
  function nextTo() {
    for (let i = 0; i < rasm.length; i++) {
      if (rasm[i] === tanlangan) {
        if (rasm[i + 1]) {
          setTanlangan(rasm[i + 1]);
        } else {
          setTanlangan(rasm[0]);
        }
      }
    }
  }

  function backTo() {
    for (let i = 0; i < rasm.length; i++) {
      if (rasm[i] === tanlangan) {
        if (rasm[i - 1]) {
          setTanlangan(rasm[i - 1]);
        } else {
          setTanlangan(rasm[rasm.length - 1]);
        }
      }
    }
  }

  function handle(e) {
    document.getElementById("my_modal_1").close();
  }

  return (
    <div>
      <div className="home">
        <div className="container2">
          <div
            className="asosiy"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <img src={tanlangan} alt="" />
          </div>
          <div className="umumiy">
            {rasm.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                onClick={() => setTanlangan(item)}
              />
            ))}
          </div>
        </div>
        <div className="home_1">
          <span className="home_2">Sneaker Company</span>
          <h1 className="home_3">Fall Limited Edition Sneakers</h1>
          <p className="home_4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="home_5">
            <span>$125.00</span>
            <span>50%</span>
          </div>
          <span className="home_6">$250.00</span>
          <div className="home_7">
            <div className="home_8">
              <button onClick={()=>dispatch(cartSlice.actions.minus(1))}>-</button>
              <span>{count}</span>
              <button onClick={()=>dispatch(cartSlice.actions.plus(1))}>+</button>
            </div>
            <button  className="home_9" onClick={()=>dispatch(cartSlice.actions.umum(count))}>
              <IoCartOutline className="home_10" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <dialog id="my_modal_1" className="modal" onClick={(e) => handle(e)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ marginTop: "50px" }}>
              <div className="asosiy">
                <img src={tanlangan} alt=""style={{width: "440px", height: "440px"}}/>
                <div className="icons">
                  <FaArrowAltCircleLeft className="icon" onClick={backTo} />
                  <FaArrowAltCircleRight className="icon" onClick={nextTo} />
                </div>
              </div>
              <div className="umumiy">
                {rasm.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt=""
                    onClick={() => setTanlangan(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Home;
