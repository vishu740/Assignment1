import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';

function Category(){

    const [nam , setNum]= useState();
    const [nam1 , setNum1]= useState();
    const [nam2 , setNum2]= useState();
    const [nam3 , setNum3]= useState();
    const [nam4 , setNum4]= useState();
    const [nam5 , setNum5]= useState();
    const [nam6 , setNum6]= useState();
    const [nam7 , setNum7]= useState();
  
  
    const [img , setImg]= useState();
    const [img1 , setImg1]= useState();
    const [img2 , setImg2]= useState();
    const [img3 , setImg3]= useState();
    const [img4, setImg4]= useState();
    const [img5, setImg5]= useState();
    const [img6, setImg6]= useState();
    const [img7, setImg7]= useState();
  
    useEffect(()=>{
      // alert("hi")
      async function getData(){
        const res=await axios.get(`https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`)
        setNum(res.data.data.products[1].name)
        // console.log(res.data.data.products[1])
        setNum1(res.data.data.products[3].name)
        setNum2(res.data.data.products[5].name)
        setNum3(res.data.data.products[7].name)
        setNum4(res.data.data.products[9].name)
        setNum5(res.data.data.products[8].name)
        setNum6(res.data.data.products[2].name)
        setNum7(res.data.data.products[6].name)
        
  
        // console.log(res.data.data.products)
        setImg(res.data.data.products[1].image[1])
        setImg1(res.data.data.products[3].image[1])
        setImg2(res.data.data.products[5].image[1])
        setImg3(res.data.data.products[7].image[1])
        setImg4(res.data.data.products[9].image[1])
        setImg5(res.data.data.products[8].image[1])
        setImg6(res.data.data.products[2].image[1])
        setImg7(res.data.data.products[6].image[1])
        console.log(res.data.data)
      }
      getData();
    })
  

    return(
        <div>

<section className="cardsection backcolor pt-3  auto-container">
  {/* <div className="container"> */}
  <div className="row m-0 ">
    <div className="col-lg-3 col-md-6 mb-3">
    <div className="card bggg">
      <div className="blackimg">
  <img className="card-img-top " src={img} alt="Card image cap"  />
  </div>
  <div className="card-body blackimg">
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
    <div className="col-lg-3 col-md-6 mb-3">
    <div className="card bggg">
    <div className="blackimg">
  <img className="card-img-top" src={img1} alt="Card image cap"  />
  </div>
  <div className="card-body">
  
    <p className="card-text text-white blackimg">{nam1}</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <div className="card bggg">
    <div className="blackimg">
  <img className="card-img-top" src={img2} alt="Card image cap"  />
  </div>
  <div className="card-body blackimg">
  
    <p className="card-text text-white ">{nam2}</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <div className="card bggg ">
    <div className="blackimg">
  <img className="card-img-top" src={img3} alt="Card image cap"  />
  </div>
  <div className="card-body blackimg">
  
    <p className="card-text text-white">{nam3}</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <div className="card bggg">
    <div className="blackimg">
  <img className="card-img-top" src={img4} alt="Card image cap"  />
  </div>
  <div className="card-body blackimg">
  
    <p className="card-text text-white">{nam4}</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <div className="card bggg">
      <div className="blackimg">
  <img className="card-img-top" src={img5} alt="Card image cap"  />
  </div>
  <div className="card-body blackimg">
  
    <p className="card-text text-white">{nam5}</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <div className="card bggg">
      <div className="blackimg">
      <img className="card-img-top" src={img6} alt="Card image cap"  />
      </div>
  <div className="card-body blackimg">
  
    <p className="card-text text-white">{nam6}</p>
  
  </div>
  <div className="d-flex justify-content-between paddinglr">
    <span className='text-white'>450</span>
    <div className="shopping">
      <img src="shopping-bag.png" />
    </div>
  </div>
</div>
    </div>
    <div className="col-lg-3 col-md-6 mb-3">
    <div className="card bggg">

    <div className="blackimg">
  <img className="card-img-top" src={img7} alt="Card image cap"  />
  </div>
  <div className="card-body blackimg">
  
    <p className="card-text text-white">{nam7}</p>
  
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
{/* </div> */}
</section>
        </div>
    )
}
export default Category;