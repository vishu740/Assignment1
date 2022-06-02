import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../App.css';

function UseEffectAPI() {




    return (
  <div className="bg-dark auto-container">
    <div className="d-none d-lg-block">
        <div className="topheader  ">
          <div className="logoname ml-3 ">
              <p className="" >Hidden brand</p>
          </div>
          <div className="searchicon pt-2">
          {/* <p >vishal kumar</p> */}
<ul>
    <li><i className="fa fa-search" aria-hidden="true" style={{color:"white"}}></i></li>
    <li><i className="fa fa-search" aria-hidden="true" style={{color:"white"}}></i></li>
    <li><i className="fa fa-search" aria-hidden="true" style={{color:"white"}}></i></li>
</ul>
          </div>
  
        </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light backcolor">
        <a className="navbar-brand medialogo d-lg-none text-white " style={{color:"black"}} href="#">Hidden brand</a>
  <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>

  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand d-none " style={{color:"black"}} href="#">Hidden brand</a>
    <ul className="navbar-nav m-auto mt-2 mt-lg-0 ">
      <li className="nav-item active">
        <a className="nav-link " href="#">Bags</a>      </li>
      <li className="nav-item">
        <a className="nav-link text-white " href="#">Travel</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white " href="#">Accesories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white " href="#">Gifting</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white " href="#">Jewelery</a>
      </li>
    </ul>
   
  </div>
</nav>
 </div>
    );
  }
  
  export default UseEffectAPI;