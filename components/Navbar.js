"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const links=[
  {
    href:'/',
    name:'Home',
  },
  {
    href:'/about',
    name:'About',
  },
  {
    href:'/movies',
    name:'Movies',
  },
  {
    href:'/contact',
    name:'Contact',
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F44336] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className='text-white text-xl'>NetFlix</h1>
          </div>
          <div className="hidden md:block">
            {
              links.map((value)=>{
                return(
                 <Link href={value.href} key={value.name} className='px-3 text-white'>{value.name} </Link>
                )
              })
            }
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleNavbar} className="focus:outline-none px-2 text-white" >
              
              {isOpen ? <AiOutlineClose/> : <AiOutlineMenu/> }
            </button>
          </div>
        </div>
      </div>
      {/* Responsive menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col ">
         
         {
              links.map((value)=>{
                return(
                 <Link href={value.href} key={value.name}  className='text-white ps-6 py-2 cursor-pointer'>{value.name} </Link>
                )
              })
            }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
