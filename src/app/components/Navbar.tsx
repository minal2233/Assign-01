import Image from "next/image";

export default function Navbar() {
  return (
      <nav className="w-[1322px] h-[58px] ml-[59px] flex font-Montserrat text-white font-bold p-4 tracking-normal">
        <h3 className="w-[187px] h-[58px] ml-[136px] py-[13px] pr-[35px] gap-[15px] flex text-2xl font-Montserrat font-bold tracking-normal">
          BrandName
        </h3>
        <div className="flex w-[815px] h-[58px] top-[4px] left-[100px] gap-[30px] text-[14px] font-Montserrat font-bold leading-6 tracking-normal">
          <ul className="w-[275px] h-[24px] mt-[17px] flex gap-[21px] text-[14px] font-Montserrat font-bold ">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul className="w-[110px] h-[52px] top-[3px] gap-[45px] leading-[22px] mr-[130px] flex text-sm font-Montserrat font-bold">
            <li className="py-[15px]">Login</li>
            <li><button className="w-[110px] h-[52px] px-[25px] py-[15px] font-Montserrat rounded-sm text-[14px] bg-[#23A6F0] text-[#FFFFFF]">JOIN US</button>
          </li></ul>
        </div>
      </nav>
      
  )}
  

