'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md bg-cover bg-center ">
       <div className=' flex flex-row items-center justify-between'>
        <div className=' md:w-4 h-4 md:top-[26px] left-7 flex justify-start '>
         <Image src="/image.png" alt="" width={22} height={22} className='ml-6 items-center'/>
        </div>

        <div className='md: w-4 h-4 top-[26px] left-7 flex justify-end '>
         <Image src="/cart.png" alt="" width={24} height={24} className='ml-6 items-center'/>
         <Image src="/avatar.png" alt="" width={16} height={16} className='ml-6 items-center'/> 

        </div>

        
        </div>

      <div className="container mx-auto px-4 py-3 flex md:flex-col items-center justify-between gap-7">
        {/* Logo */}
        <div className="text-2xl font-normal text-gray-800 ">
         Avion
        </div>

        

        <div className='w-full top-[70px] left-7 bg-gray-200 h-[1px] divide-x-4'>
            
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center w-[675px] h-[22px] top-[90px] left-[382px] gap-11">
          <Link href="/"
             className="text-gray-600 hover:text-gray-800">Plantpots
          </Link>
          <Link href="/Ceramics"
             className="text-gray-600 hover:text-gray-800">Ceramics
          </Link>
          <Link href="/Table"
             className="text-gray-600 hover:text-gray-800">Tables
          </Link>
          <Link href="/Chair"
            className="text-gray-600 hover:text-gray-800">Chairs
          </Link>
          <Link href="/Crookery"
            className="text-gray-600 hover:text-gray-800">Crockery
          </Link>
          <Link href="/Tableware"
            className="text-gray-600 hover:text-gray-800">Tableware
          </Link>
          <Link href="/Cultery"
            className="text-gray-600 hover:text-gray-800">Cultery
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <Image
              src={isOpen ? '' : '/menu.png'}
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-md`}
      >
        <div className="space-y-4 px-4 py-3">
          <Link href="/home"
             className="block text-gray-600 hover:text-gray-800">Home
          </Link>
          <Link href="/shop"
             className="block text-gray-600 hover:text-gray-800">Shop
          </Link>
          <Link href="/about"
             className="block text-gray-600 hover:text-gray-800">About
          </Link>
          <Link href="/contact"
             className="block text-gray-600 hover:text-gray-800">Contact
          </Link>
        </div>
      </div>
     
    </div>
  );
};
