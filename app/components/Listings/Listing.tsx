import Image from "next/image"

export default function Listing(){
    return(
        <div className="bg-cover bg-center h-[634px] flex flex-col gap-[10px]">
        
         <div className="mt-5 gap-12 flex flex-row items-center ml-64">

        <div className="md:w-[305px]  md:h-[462px]">
         <Image src="/Chair.png" alt="" width={305} height={375} />
         <br />
         <div className="w-[154px] h-[63px] gap-[8px]">
          <h1 className="font-normal text-xl leading-7">The Dandy chair</h1>
         </div>
         <div className="w-[24px] h-[27px]">
         <p className="text-[18px] font-normal leading-[17px]">£250</p>
         </div>
        </div>

        <div className="md:w-[305px]  md:h-[462px]">
         <Image src="/Vase.png" alt="" width={305} height={375} />
         <br />
         <div className="w-[154px] h-[63px] gap-[8px]">
          <h1 className="font-normal text-xl leading-7">Rustic Vase Set</h1>
         </div>
         <div className="w-[24px] h-[27px]">
         <p className="text-[18px] font-normal leading-[17px]">£125</p>
         </div>
        </div>

        <div className="md:w-[305px]  md:h-[462px]">
         <Image src="/Silky.png" alt="" width={305} height={375} />
         <br />
         <div className="w-[154px] h-[63px] gap-[8px]">
          <h1 className="font-normal text-xl leading-7">The Silky Vase</h1>
         </div>
         <div className="w-[24px] h-[27px]">
         <p className="text-[18px] font-normal leading-[17px]">£125</p>
         </div>
        </div>


        <div className="md:w-[305px]  md:h-[462px]">
         <Image src="/Lucy.png" alt="" width={305} height={375} />
         <br />
         <div className="w-[154px] h-[63px] gap-[8px]">
          <h1 className="font-normal text-xl leading-7">The Lucy Lamp</h1>
         </div>
         <div className="w-[24px] h-[27px]">
         <p className="text-[18px] font-normal leading-[17px]">£399</p>
         </div>
        </div>

         </div>
         <br />
          <br />
        <div className="w-[170px] h-[56px] py-4 px-8 bg-[#F9F9F9] ml-[870px] flex text-center items-center hover:bg-slate-200">
            <button className="w-[170px] h-[56px] ">View collection </button>
        </div>

        </div>
    )
}