import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {

let res = [
  {
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2A0-Nwgr8SDEj6_X-g-IUJp5GTcvkZj3_SA&s",
    itemName : "Biryani",
    price : 200,
    quantity : "1kg"
  },
  {
    img : "https://media.istockphoto.com/id/504338599/photo/tender-beef-nihari.jpg?s=612x612&w=0&k=20&c=slp7Wnsi03ICCR3c-fBa0DxxhQjhPiV92PKXSdVOsmU=",
    itemName : "Nihari",
    price : 500,
    quantity : "1kg"
  },
  {
    img : "https://media.istockphoto.com/id/502759669/photo/halwa-puri-breakfast.jpg?s=612x612&w=0&k=20&c=pAVZBHulOXX7o3HOXgmRQAGsTFJuoAL3UbZirxLnpJg=",
    itemName : "Halwa pori",
    price : 50,
    quantity : "1 pori"
  },
  {
    img : "https://t3.ftcdn.net/jpg/03/24/50/54/360_F_324505480_RTE4AmVPsYP96f99g88gEwabe65mSvak.jpg",
    itemName : "Mandi",
    price : 1500,
    quantity : "1kg"
  },
  {
    img : "https://www.shutterstock.com/image-photo/chicken-karahi-roghni-naan-salad-600nw-2369258993.jpg",
    itemName : "Karhai",
    price : 600,
    quantity : "1 pao"
  },
]


if (res.itemName === "Biryani"){

}

  return (
    <>
   <div className='h-20 bg-red-600 flex justify-between items-center px-10'>
    <div className="logo text-2xl font-bold text-amber-100">Arsh E Murad</div>
<ul className='flex gap-4'>
  <li>Home</li>
  <li>About</li>
  <li>Contact Us</li>
  <li>Services</li>

</ul>
   </div>

<h1 className='text-5xl text-center font-bold my-2'>Hamza Food Resturant</h1>
<div className='flex gap-3 flex-wrap justify-center'>
{

let 

  res.map((arsh) => {
    return (
      <div className='border w-[300px] h-[250px] my-10'>

        
          <>
            <img src={arsh.img} className='w-[100%] h-[50%]' />
            <h1>Item Name : {arsh.itemName}</h1>
            <h3>Price : {arsh.price}</h3>
            <h3>Quantity : {arsh.quantity}</h3>
          </>
      </div>
    )
  })
}

</div>

<Home foodItem={res} />

    </>
  )
}

export default App
