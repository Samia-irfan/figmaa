import Image from "next/image"

export default function Card(){
    return(
        <div className="bg-cover bg-center mt-4">
          <br /> <br />

          <div className=" top-80 left-[529px] mt-10 ml-[19px] mb-3 gap-[10px]">

            <h3 className="font-normal leading-[34.6px] text-[#2A254B] text-center text-2xl">What makes our brand different?</h3>

          </div>
          <br />

          
          <div className="mt-3 md:bg-cover md:bg-center flex md:flex-row gap-x-16 md:mt-20 p-8 md:ml-56 sm:w-[390px] sm:h-[1052px] sm:flex-col md:w-[1440px] md:h-[417px] ">


            <div className="Card-1 w-[342px] h-[196px] md:w-[309px] md:h-[244px] bg-[#F9F9F9]">

            <div className="items-center md:mt-6 md:ml-12 md:mr-4">
             <Image src="/Delivery.png" alt="Delivery" width={24} height={24} />
             <h1 className="font-normal leading-7 text-xl mt-3"> Next day as standard </h1>
             <br />
             <p>Order before 3pm and get <br /> your order the next day as <br /> standard</p>
            </div>

            </div>


            <div className="Card-2 w-[305px] h-[244px] bg-[#F9F9F9] ">

             <div className=" md:mt-6 md:ml-12 md:mr-4">
             <Image src="/check.png" alt="Check" width={24} height={24} />
             <h1 className="font-normal leading-7 text-xl mt-3">Made by true artisans</h1>
             <br />
             <p>Handmade crafted goods <br />made with real passion and <br />craftmanship</p>
             </div>

            </div>


            <div className="Card-3 w-[305px] h-[244px] bg-[#F9F9F9] ">

             <div className=" md:mt-6 md:ml-12 md:mr-4">
             <Image src="/Purchase.png" alt="Delivery" width={24} height={24} />
             <h1 className="font-normal leading-7 text-xl mt-3">Unbeatable prices</h1>
             <br />
             <p>For our materials and quality <br />you won’t find better prices <br />anywhere</p>
            </div>
            
            </div>



            <div className="Card-4 w-[305px] h-[244px] bg-[#F9F9F9] ">

             <div className=" md:mt-6 md:ml-12 md:mr-4">
             <Image src="/Sprout.png" alt="Delivery" width={24} height={24} />
             <h1 className="font-normal leading-7 text-xl mt-3">Recycled packaging</h1>
             <br />
             <p>We use 100% recycled to <br /> ensure our footprint is more <br /> manageable</p>
             </div>
           
            </div>




          </div>
    

        </div>
    )
}