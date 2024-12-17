import Image from "next/image"

export default function Footer(){
    return(
        <div className="flex flex-col bg-[#2A254B]" >

        <div className="w-full h-[380px] bg-[#2A254B] flex flex-row gap-28 justify-around">
         <div className="p-10 text-white">
            <div className="">
           <h1 className=" text-lg ">Menu</h1>
           </div>
           <div className="text-sm">
           <p className="">
            New arrivals <br />
           best sellers <br />
           Recently viewed <br />
           Popular this week <br />
           All products</p>
           </div>
         </div>

         <div className="text-white p-10">
            <div>
                <h1 className="text-lg">

                    Categories

                </h1>
            </div>

            <div>
                <p className="text-sm">

                    Crockery <br />
                    Furniture <br />
                    Homeware <br />
                    Plant pots <br />
                    Chairs <br />
                    Crockery

                </p>
            </div>
         </div>

         <div className="p-10 text-white">
           <div>
            <h1 className="text-lg">Our company</h1>
           </div>

           <div>
            <p className="text-sm">
                About us <br />
                Vacancies <br />
                Contact us <br />
                Privacy <br />
                Return Policy
            </p>
           </div>

         </div>


         <div className="p-10 text-white flex-c">
            <h1 className="text-lg">Join our mailing list</h1>
            <br />
            <div className="w-[627px] h-[56px] ">
            <input type="input" className="w-[509px] h-[56px] bg-white bg-opacity-15" placeholder="  your@email.com" />
            <button className="w-[118px] h-[56px] bg-white text-black hover:bg-slate-200">Sign up</button>
            </div>
            
            </div>
            
         

         </div>
         <div className='w-full top-[70px] left-7 bg-gray-200 h-[1px] divide-x-4'>
            
            </div>
            <br /><br />

          <div className="flex flex-row justify-between">
         <div className="divide-x-2 flex flex-col text-white">
          <h1>Copyright 2022 Avion</h1>
         </div>
         <div className="">
            <Image src="/Social.png" alt="" width={264} height={24} />
         </div>
         </div>


        
        
         

        </div>
    )
}