import React from 'react'
import ProductList from './data';

function Home({setProductId}) {

  const handleAddToCart = (id) =>{
   // alert("Product added to cart");
   
    setProductId(id);
  }

  return (
    <div className=" bg-gray-100   ">
      <div className="  grid grid-cols-6  mt-3   gap-2 ]">
        {
          ProductList?.map((product ,index ) => {
            console.log("product",product)
            return (
              <div className="  bg-white  rounded-md shadow-lg mt-3   ml-4 ">
                <div className="  col-12 w-[150px] h-[200px] " >
                  <img className="h-[200px] w-[150px] pl-4 mt-2 " src={product?.img} alt="" />
                </div>
                <div>
                  <div className=" flex justify-between px-2 my-2 ">
                    <p className="m-0 font-semibold  text-gray-800 "> {product?.brand}</p>
                    <p className="m-0  font-semibold   pl-3.5  text-gray-800 ">{product?.model}</p>
                  </div>
                </div>

                <div className=" ">
                  <p className="m-0 font-semibold  text-gray-700 pl-2 ">₹ {product?.price}</p>
                  <p className="m-0 pl-2 text-sm font-semibold text-gray-800 ">{product?.space}</p>
                </div>

                <div>
                  <button className="bg-blue-400 w-[150px] text-white py-1 px-4 rounded-md hover:bg-blue-500 text-center mt-2 mb-2 ml-3 " 
                  onClick={ ()=> handleAddToCart(product?.id)}
                  >
                    Add To Cart 
                  </button>
                </div>

              </div>
            )
          })
        }


      </div>
    </div>
  )
}


export default Home
