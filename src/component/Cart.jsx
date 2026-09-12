import React from 'react'
import Productist from "./data";
function Cart({filteredObject}) {

  console.log("cartAllProduct", cartAllProduct);
 console.log("filteredObject",cartAllProduct);
 
 const data={
        id:1,
        img:'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70',
        imgCousins:[
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/u/8/-original-imagugptptuacajg.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/c/p/-original-imagugptdmkvpwpm.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/f/r/2/-original-imagugptvr3dbzpb.jpeg?q=70'
        ],
        model:'vivo Y200 ',
        brand:'Vivo',
        price:21999,
        color:'',
        space:'8 GB RAM | 128 GB ROM',
        camera:'64MP + 2MP | 16MP Front Camera',
        battery:'4800 mAh Battery',
        count:1,
        isAdded:false,
        type:'Mobile',   
        isTrending:true,
        description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
    }

    const handleDecreament = () => {

    }

    const handleIncreament = () => {

    }
    const handleDeleteItem = () => {

    }

  return (
    <div className="bg-red-100 mt-3 mx-2 w-[850px]">
      
      <div className="row">

       {
        cartAllProduct?.map(() => {
          return (
             <div className="col-8 border flex gap-4 ">
          <div>
            <img  className="h-[200px] w-[200px] " src ={data?.img} alt={data?.model} />
          </div>
          <div>
          <div className="p-1 ">
            <h2 className="font-bold ">{data?.model.toUpperCase()}</h2>
          <p className="font-bold ">₹{data?.price}</p>
          <p className="font-bold font-size-12 ">{data?.space}</p>
          <p className="font-bold font-size-12 ">{data?.camera}</p>


           <div className= " flex gap-3 my-2  "> 
            <p className= " h-[30px] w-[30px] border px-2 rounded-sm pointer" onClick={handleDecreament} > - </p>
            <p className=" border h-[30px] w-[30px]  px-2  rounded-sm ">{data?.count}</p>
            <p className= " fs-10  h-[30px] w-[30px]  border px-2  rounded-sm " onClick={handleIncreament}> + </p>
          </div>

          </div>
          </div>

          <div className="flex justify-between my-2 pr-2  ">
            <p>{data?.description}</p>
            <p onClick={handleDeleteItem}><i class="fa-solid fa-trash"></i></p>
          </div>

         
         </div>
          )
        })
       }
        

      
      </div>
    </div>
  )
}

export default Cart