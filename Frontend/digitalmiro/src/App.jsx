import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { RiRefund2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import axios from 'axios';

const App = () => {


  const [product, setproduct] = useState([])

  const data = [{
    head : "Free Shipping" ,
    desc : "When order above $75",
    image:<TbTruckDelivery />
  },
  {
    head : "24/7 Support" ,
    desc : "Get support all day",
    image: <IoCall />
  },
  {
    head : "Refund" ,
    desc : "Get refund within 3 day",
    image: <RiRefund2Line />
  }]




  const callProduct = async () => {
    try {
      const response = await axios.get("https://digitalmitro-test.onrender.com/api/product");
      console.log(response.data); // Log the fetched data
      setproduct(response.data.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(
    ()=>{
      callProduct();
    },[]
  );



  return (
    <div className='min-h-[100vh] w-full bg-white'>
      <div className="hero h-screen w-full p-6 relative bg-[url('https://themewagon.github.io/fruitkha/assets/img/hero-bg.jpg')] bg-cover bg-center">
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="nav fixed w-full flex items-center justify-around z-10">
    <div className="logo w-[10%]">
      <img src="https://themewagon.github.io/fruitkha/assets/img/logo.png" alt="logo" />
    </div>
    <div className="text-xl text-white">
      <FaShoppingCart />
    </div>
  </div>

  <div className="herotext flex flex-col gap-6 items-center justify-center w-full h-full relative z-10">
    <h2 className="font-medium text-xl text-[#F28123]">FRESH & ORGANIC</h2>
    <h1 className="font-bold text-7xl text-white">Delicious Seasonal Fruits</h1>
    <div className="flex gap-3 mt-7">
      <button className="px-4 py-2 rounded-full border border-[#F28123] bg-[#F28123] text-white">
        Fruit Collection
      </button>
      <button className="px-4 py-2 rounded-full border border-[#F28123] text-white">
        Contact Us
      </button>
    </div>
  </div>
</div>

      <div className="product1 w-full min-h-[130vh]">
        <div className="box1 mb-28 bg-[#F5F5F5] py-12 px-6 flex justify-around">
          {data.map((item , index)=>{
            return(
              <div key={index} className='flex gap-4 items-center'>
            <div className='text-5xl text-[#F28123]'>
              {item.image}
            </div>
            <div className='flex flex-col gap-1 leading-none'>
              <h1 className='text-black font-bold text-2xl'>{item.head}</h1>
              <h2 className='text-gray-500'> {item.desc}</h2>
            </div>
          </div>
            )
          })}
        </div>
        <div className="product">
          <div className="texter w-full flex justify-center items-center">
              <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='font-bold text-5xl'><span className='text-[#F28123]'>Our</span> Products</h1>
                <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas <br /> itaque eveniet beatae optio.</p>
              </div>
          </div>
          <div className="cards-section w-full mt-24  flex justify-around">
               {product.map((item , index)=>{
                return(
                  <div key={index} className="card p-9 shadow-2xl hover:shadow-none rounded-md flex flex-col justify-center items-center gap-8">
                <div className='h-[24vh] w-[25vh] '>
                  <img src={item.image} className='w-full h-full object-cover' alt="" />
                </div>
                <div className='flex flex-col gap-1 justify-center items-center '>
                  <h1 className='font-bold text-3xl '>{item.name}</h1>
                  <h2 className='text-gray-500'>Per Kg</h2>
                  <h1 className='font-bold text-3xl '>${item.price}</h1>
                </div>
                <div>
                  <button className='flex items-center px-4 py-2 bg-[#F28123] rounded-full text-white gap-1'> 
                  <FaShoppingCart />
                    <h1>Add to cart</h1>
                  </button>
                </div>
               </div>
                )
               })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App