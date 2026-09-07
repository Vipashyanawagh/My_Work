import React from 'react'

function Home() {

  const data =
    {
        id:2,
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=70",
        model:'Vivo T3x 5G',
        brand:'Vivo',
        price:23999,
        space:'12 GB RAM | 256 GB ROM',
        camera:'108MP + 13MP + 2MP | 50MP Front Camera',
        battery:'5000 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:false,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"

    };
  
  return (
    <div className="  w-[200px] ml-4">
      <div className="row">
        <div className="col-2 border ml-4 ">
          <div >
            <img className="h-[200px] w-[150px] pl-4 mt-2 " src={data?.img} alt=""/>
          </div>
          <div>
          <div className=" flex justify-between px-2 ">
          <p className="m-0 font-bold "> {data?.brand}</p> 
          <p className="m-0  font-bold ">{data?.model}</p>
          </div>
          </div>

          <div className = " ">
            <p className= "m-0 font-semibold pl-2 ">₹ {data?.price}</p>
            <p className="m-0 pl-2 text-sm font-semibold text-gray-800 ">{data?.space}</p>
          </div>

         <div>
          <button className="bg-blue-400 text-white py-1 px-4 rounded-md hover:bg-blue-500 text-center mt-2 mb-2 ml-6 ">Add To Cart </button>
         </div>

        </div>

      </div>
    </div>
  )
}

export default Home
