import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {Button} from "./Styles/Button"
const Services = () => {
  return (
    <Wrapper className="section" >
<h2 className='Common-heading'>Our Services</h2>
<div className="container grid grid-three-column">
  <div className="card">
  <figure>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS-rtX014_QwZ_3KLJLtJ-T_OxOv3BjiOGQ&usqp=CAU' alt="" />
  </figure>
  <div className='card-data'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam.</p>
    <NavLink to="/service">
    <Button>Read More</Button>
    </NavLink>
  </div>
  </div>
  <div className="card">
  <figure>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTp2PbvkVsWDv4NhhQJTpVvZR00h3PxR16AQ&usqp=CAU' alt="" />
  </figure>
  <div className='card-data'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam.</p>
    <NavLink to="/service">
    <Button>Read More</Button>
    </NavLink>
  </div>
  </div>
  <div className="card">
  <figure>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MrQQ5EBJSgVS4-8ScWhh-h1my5J1IGWkMg&usqp=CAU' alt="" />
  </figure>
  <div className='card-data'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam.</p>
    <NavLink to="/service">
    <Button>Read More</Button>
    </NavLink>
  </div>
  </div>
  <div className="card">
  <figure>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUdU1mRVbeOMh2IErDOoNhNkazTSIrRVMzg&usqp=CAU' alt="" />
  </figure>
  <div className='card-data'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam.</p>
    <NavLink to="/service">
    <Button>Read More</Button>
    </NavLink>
  </div>
  </div>
  <div className="card">
  <figure>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAyI7XJL2GRpWvtv6lgS0ZYKTTBAovO-eTsQ&usqp=CAU' alt="" />
  </figure>
  <div className='card-data'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam.</p>
    <NavLink to="/service">
    <Button>Read More</Button>
    </NavLink>
  </div>
  </div>
  <div className="card">
  <figure>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GFxTaNPZNDFYfERww2_eY19fAEXTvXa8Gg&usqp=CAU' alt="" />
  </figure>
  <div className='card-data'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magnam.</p>
    <NavLink to="/service">
    <Button>Read More</Button>
    </NavLink>
  </div>
  </div>
  
  
</div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .Common-heading{
    margin-bottom: 3rem;
  }
  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    padding:2rem;
    .card-data {
      padding: 0 2rem;
    }
p{
    margin-bottom:1rem;
}
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`

export default Services