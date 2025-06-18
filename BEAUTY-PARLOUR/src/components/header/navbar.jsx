import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-[61px] z-2">
        <div className="w-full flex bg-black h-[55px] items-center justify-around">
          <ul className="flex text-white justify-around gap-15 text-nowrap">
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]"><Link to="/">INDEX</Link></a></li>
            <li className="relative group w-full">
              <a href="#" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">
                <Link to="/service">SERVICES</Link>
              </a>
              <ul className="absolute top-[100%] left-0 bg-white text-black min-w-[480px] rounded-md shadow-lg hidden group-hover:flex flex-row transition-all duration-500 z-30">
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">Services</h3>
                  <ul>
                    <li className="p-[75px]"></li>
                  </ul>
                </li>
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">Skin</h3>
                  <ul>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Skin Care - Treatments</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Body Care</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Skin Care</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Skin Care - Basics</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Skin Care - Depilation</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;All Skin Services</a></li>
                  </ul>
                </li>
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">Hair</h3>
                  <ul>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Form</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Hair Care</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Colors</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Styling</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Haircut</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;All Hair Services</a></li>
                  </ul>
                </li>
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">Makeup</h3>
                  <ul>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Styling</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Saree Drap</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Makeup</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;All Makeup Services</a></li>
                  </ul>
                </li>
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2 hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">Hands & Feet</h3>
                  <ul>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Hand Care</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Feet Care</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;Nails</a></li>
                    <li className="hover:text-red-600 px-2 py-1"><a href="#"><i className="fa-regular fa-circle text-[10px]"></i>&nbsp;&nbsp;All Hand & Feet Services</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]"><Link to="/bridal">BRIDAL</Link></a></li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">SHOP PRODUCTS</a></li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">RUNWAY REWARDS</a></li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">OFFERS</a></li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]"><Link to="/bookappointment">BOOK APPOINTMENT</Link></a></li>
            <li className="w-full"><span className="text-red-700">|</span> &nbsp;&nbsp;&nbsp; <a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">BECOME A PARTNER</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;