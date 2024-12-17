// import Image from "next/image";
// import Form from 'next/form'

export default function Signup(){
    return(
        <div className="w-full h-[444px] relative bg-cover bg-center flex flex-row"  style={{
            backgroundImage: 'url(/Window.png)', // Path to your background image
          }} >


            <div className="absolute bottom-[10%] right-[38%] transform-translate-x-[48%] w-full max-w-[500px] px-4 flex flex-row ">
                <input type="text"
                className="p-3 w-[354px] h-[56px] max-w-[400px] border border-gray-300 shadow-md focus:outline-none text-gray-700" 
                placeholder="your@email.com"/>
                <button className="bg-[#2A254B] text-white px-6 hover:bg-purple-900">Sign up</button>
                </div>
                 </div>
                 


    )
}