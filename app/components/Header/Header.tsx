import React from 'react'
import Navbar from '../Navbar/Navbar'
import msg from '@/app/message.json'

const Header = () => {
  return (
    <div className="w-screen">
      <Navbar />

      {/* Main Display Content */}
      <div className="header-wrapper w-full flex gap-4 flex-col lg:flex-row lg:gap-16 h-auto mt-5 p-4 sm:px-24">
        <div className="main-box h-[200px] w-full md:h-[350px] lg:min-w-[400px] lg:h-[500px] sm:h-[450px] bg-black">

        </div>

        {/* Featured Content */}
        <div className="h-auto">
          <div className="w-full mt-5 lg:mt-0">
            <h1 className="text-4xl">Featured</h1>
          </div>
            {
              msg.map((item  , key)=>{
                return   <div key={item.id} className=" w-full cursor-pointer sm:flex flex-col gap-5 ">
                <div className="contentWrapper mt-7 flex gap-7 w-full justify-start  ">
                  <div className="contentImage bg-gray-300 min-w-[120px] h-[100px] lg:w-[130px] lg:min-h-[110px]  sm:min-w-[200px] sm:min-h-[120px]"></div>
    
                  <div className="content flex flex-col gap-3">
                    <div className="text-lg lg:text-sm xl:text-lg font-extralight underline-offset-3">
                     {item.content}
                    </div>
                    <div className="authers flex gap-2 lg:text-xs">
                      <div className=" text-[#247AE1]">{item.author}</div> |
                      <div>{item.time}</div>
                    </div>
                  </div>
                </div>
              
              </div>
              })
            }
        
        
         
        </div>
      </div>
    </div>
  );
}

export default Header