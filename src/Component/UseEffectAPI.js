import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../App.css';

function UseEffectAPI() {
  const [nam , setNum]= useState();
  const [nam1 , setNum1]= useState();

  useEffect(()=>{
    // alert("hi")
    async function getData(){
      const res=await axios.get(`https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`)
      setNum(res.data.data.products[0].name)
      setNum1(res.data.data.products[1].name)

    }
    getData();
  })




    return (
  <div className="bg-dark auto-container">
        <div className="topheader">
          <div className="logoname">
              <p >vishal kumar</p>
          </div>
          <div className="searchicon">
          {/* <p >vishal kumar</p> */}
<ul>
    <li><i className="fa fa-search" aria-hidden="true" style={{color:"white"}}></i></li>
    <li><i className="fa fa-search" aria-hidden="true" style={{color:"white"}}></i></li>
    <li><i className="fa fa-search" aria-hidden="true" style={{color:"white"}}></i></li>
</ul>
          </div>
  
        </div>
        <nav className="navbar navbar-expand-lg navbar-light backcolor">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
    <ul className="navbar-nav m-auto mt-2 mt-lg-0 text-white">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#">Bags</a>      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Travel</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Accesories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Gifting</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Jewelery</a>
      </li>
    </ul>
   
  </div>
</nav>
<section className="backcolor">
    <div className="d-flex flex-wrap">
    <img className="vector" src ="9.png"></img>
    <img className="vector" src ="8.png"></img>
    <img className="vector" src ="1.png"></img>
    <img className="vector" src ="2.png"></img>
    <img className="vector" src ="3.png"></img>
    <img className="vector" src ="4.png"></img>
    <img className="vector" src ="5.png"></img>
    <img className="vector" src ="6.png"></img>
    <img className="vector" src ="5.png"></img>



    </div>
</section>
<section className="cardsection backcolor pt-3  auto-container">
  <div className="container">
  <div className="row ">
    <div className="col-lg- mb-3">
    <div className="card bggg">
  <img className="card-img-top w-100" src="18.png" alt="Card image cap"  />
  <div className="card-body">
    <p className="card-text text-white">{nam}</p>
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg- mb-3">
    <div className="card bggg">
  <img className="card-img-top w-100" src="17.png" alt="Card image cap"  />
  <div className="card-body">
  
    <p className="card-text text-white">{nam1}</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg- mb-3">
    <div className="card bggg">
  <img className="card-img-top w-100" src="16.png" alt="Card image cap"  />
  <div className="card-body">
  
    <p className="card-text text-white">The Brown Metro Movers</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg- mb-3">
    <div className="card bggg ">
  <img className="card-img-top w-100" src="15.png" alt="Card image cap"  />
  <div className="card-body">
  
    <p className="card-text text-white">The Brown Metro Movers</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg- mb-3">
    <div className="card bggg">
  <img className="card-img-top w-100" src="14.png" alt="Card image cap"  />
  <div className="card-body">
  
    <p className="card-text text-white">The Brown Metro Movers</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg- mb-3">
    <div className="card bggg">
  <img className="card-img-top w-100" src="13.png" alt="Card image cap"  />
  <div className="card-body">
  
    <p className="card-text text-white">The Brown Metro Movers</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg- mb-3">
    <div className="card bggg">
  <img className="card-img-top w-100" src="12.png" alt="Card image cap"  />
  <div className="card-body">
  
    <p className="card-text text-white">The Brown Metro Movers</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg- mb-3">
    <div className="card bggg">
  <img className="card-img-top w-100" src="11.png" alt="Card image cap"  />
  <div className="card-body">
  
    <p className="card-text text-white">The Brown Metro Movers</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
  </div>
</div>
</section>
    </div>
    );
  }
  
  export default UseEffectAPI;