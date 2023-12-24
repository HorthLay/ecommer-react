import React from 'react'
import {Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { HiOutlineReceiptPercent } from 'react-icons/hi2'
import { SiJordan  } from 'react-icons/si'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import Homeproduct from './homeproduct';

import './home.css'

 const Home = ({detail, view, close, setClose, addtocart}) => {
    const imageStyles = {
      width:'200px',

      // Add any other styles you need
    };
  return (
    <>
     {
      close ?
    <div className='product_detail'>
      <div className='container'>
        <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
        {
          detail.map((curElm) =>
          {
            return(
              <div className='productbox'>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
              </div>
              {/* try to fix card bug */}
              <div className='detail'>
                <h4>{curElm.Cat}</h4>
                <h2>{curElm.Title}</h2>
                <p>best Shoes and more perfectly shirt best look highshow to show the way that u are the coolest dude</p>
                <h3>{curElm.Price}</h3>
                <button onClick={() => addtocart (curElm)}>Add to Cart</button>
              </div>
              </div>
            )
          })
        }
        <div className='productbox'></div>
      </div>
    </div> :null
      }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Sport collection 2023</h2>
                <Link to='/product' className='link'>Shop Now<BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/slider.png' alt='silderimg'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/air2.png' alt='Shoes' style={imageStyles}></img>
          </div>
          <div className='detaii'>
            <p>23 product</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/blazer.png' alt='Shoes' style={imageStyles}></img>
          </div>
          <div className='detaii'>
            <p>23 product</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/shop3.png' alt='Shirt' style={imageStyles}></img>
          </div>
          <div className='detaii'>
            <p>23 product</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/shop2.png' alt='Shirt' style={imageStyles}></img>
          </div>
          <div className='detaii'>
            <p>23 product</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>arder about $1000</p>
          </div>
        </div>

        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Gaurenty</p>
          </div>
        </div>

        <div className='box'>
          <div className='icon'>
            <HiOutlineReceiptPercent />
          </div>
          <div className='detail'>
            <h3>Member discount</h3>
            <p>On Every Order</p>
          </div>
        </div>

        <div className='box'>
          <div className='icon'>
            <SiJordan />
          </div>
          <div className='detail'>
            <h3>Customer support</h3>
            <p>EveryTime Call support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Product</h2>
      <div className='container'>
      {
            Homeproduct.map((curElm) =>
            {
              return(
                
                <div className='box' key={curElm.id}>
                  <div className='img_box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                    <li  onClick={() => view (curElm)}><BsEye /></li>
                    <li><AiOutlineHeart /></li>
                    </div>
                  </div>
                  <div className='detail'>
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>${curElm.Price}</h4>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
        <h4>LATEST SPORT ADDED</h4>
        <h3>Nikey 2024 soft wear</h3>
        <p>400$</p>
      <Link to='./product' className='link'>Shop Now <BsArrowRight /></Link>
      </div>
      <div className='img_box'>
        <img src='./img/newadd.png' alt='sliderimg'></img>
      </div>
        </div>
    </div>
    </>
  )
}

export default Home