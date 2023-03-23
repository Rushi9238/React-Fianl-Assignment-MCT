import React from 'react'
import '../../CSS_files/ProductDetails.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const ProductDetails = () => {
  const selectore = useSelector((state) => state.productcartData)
  const navigate = useNavigate();

 
 
  return (
    <>
        {
          selectore.length===0?<div  className='productDetails'>
          <h1>Data not Present Plasea reload the page</h1>
          </div>
          :
          <div className='productDetails'>
           <div className="productHeading">
            <h3 onClick={()=>navigate(-1)}>Back</h3>
              <h1>{selectore.category} Category</h1>
              {/* <Link to={'/product'}> back</Link> */}
            </div>
            <div className='bottom-discribe'>
              <div className="imgDiv">
                <img src={selectore.image} alt="" />
              </div>
              <div className="productDiscription">
                <div className="title">
                  <label>Product Name:</label>
                  <p>{selectore.title}</p>
                </div>
                <div className="price">
                  <label> Product Price:</label>
                  <p>{selectore.price}$</p>
                </div>
                <div className="description">
                  <label> Product Descripation:</label>
                  <p>{selectore.description}</p>
                </div>
                <div className="rating">
                  <label>Product Rating:</label>
                  <p>{selectore.rating.rate}</p>
                </div>

              </div>
            </div>
          </div>
        }



        {/* {mainData.filter(e => e.id == id).map((ele) => {
          // console.log(ele);
          return <>
           
          </>
        })} */}

      
    </>
  )
}

export default ProductDetails