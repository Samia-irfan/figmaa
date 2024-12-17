import Image from "next/image"

export default function Features(){
    return(
        <div className="w-full h-[598px] py-[60px] px-[80px] gap-4 flex flex-row justify-center">


            <div className="w-[634px] h-[478px] bg-[#2A254B]">
                <div className="flex flex-col text-white items-center justify-between mt-[64px] ml-[64px] mb-[375px] mr-[187px]">
                    <div className="w-[383px] text-white h-[39px] flex items-center text-center">
                    <h1 className="font-normal flex text-center text-[32px] text-white leading-[39.36px] ">It started with a small idea</h1>
                    </div>
                    <br />
                    <div>
                    <p className="font-normal text-[16px] flex text-left">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                    </div>
                    
                    <div className="w-[170px] h-[76px] py-4 px-8 flex justify-end items-end mt-[190px] mr-[210px]">
                       
                <div className="w-[170px] h-[56px] bg-white bg-opacity-15 hover:bg-blue-950">


                <button className="mt-4 w-[106px] h-[24px] text-sm ">View collection</button>

                </div>
               </div>  
                </div>
            </div>


            <div className="w-=[630px]">

              <Image src="/Sofa.png" alt="" width={630} height={478} />

            </div>

        </div>
    )
}