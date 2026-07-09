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
    <div className=" ">
      <div className="row">
        <div className="col-3 border">
          <div>
            <img className="h-[200px] w-[150px]" src={data?.img} alt=""/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
