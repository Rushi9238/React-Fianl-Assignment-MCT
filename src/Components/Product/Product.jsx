import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { GlobaleData } from '../../App'
import { productData } from '../../redux/action'
import { categoryHandler } from '../../Contstant/ProductDataAPI'
import '../../CSS_files/Product.css'
import { useSelector } from 'react-redux'



const Product = () => {
  const dispatch=useDispatch()
   const category=useSelector((ele)=>ele.categaryCartData)
  console.log(category);

  // const context = useContext(GlobaleData)
  // const { category } = context
  const [categoryName, setCategoryName] = useState(category[0])
  const [productlist, setProductlist] = useState([])

  useEffect(() => {
    categoryHandler(setProductlist,categoryName)
  }, [categoryName])

  return (
    <>
      <div className='product'>
        <div className="prodct-Nav">
          <ul>
            {category.map((ele) => {
              return <>
                <Link key={ele.id} to={''}  onClick={()=>{
                            setCategoryName(ele)
                        }} >
                  <li>{ele && ele}</li>
                </Link>
              </>
            })}
          </ul>
        </div>
        <div className="product-containe">
          <ul>
            {productlist.map((ele)=>{

                return <Link key={ele.id} to={`/productdetails/${ele.id}`} onClick={()=>{
                  // console.log(ele);
                  dispatch(productData(ele))
                }}><li>{ele && ele.title}</li></Link>
                
            })}
            </ul>
            

        </div>

      </div>
    </>
  )
}

export default Product
