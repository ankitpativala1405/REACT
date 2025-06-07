const Navbar = () => {
  return (
    <>
      <div className="sticky top-[61px] z-2">
        <div className="w-full flex bg-black h-[55px] items-center justify-around">
          <ul className="flex text-white justify-around gap-15 text-nowrap">
            <li className="relative group">
              <a href="#" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">
                SERVICES
              </a>
              {/* Dropdown menu */}
              <ul className="absolute top-[100%] left-0 bg-white text-black min-w-[480px] rounded-md mt-3 shadow-lg hidden group-hover:block transition-all duration-500 z-3">
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2">Skin</h3>
                  <ul>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Skin Care - Treatments</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Body Care</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Skin Care</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Skin Care - Basics</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Skin Care - Depilation</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">All Skin Services</a></li>
                  </ul>
                </li>
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2">Hair</h3>
                  <ul>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Form</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Hair Care</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Colors</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Styling</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Haircut</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">All Hair Services</a></li>
                  </ul>
                </li>
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2">Makeup</h3>
                  <ul>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Styling</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Saree Drap</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Makeup</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">All Makeup Services</a></li>
                  </ul>
                </li>
                <li className="px-4 py-2">
                  <h3 className="font-bold mb-2">Hands & Feet</h3>
                  <ul>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Hand Care</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Feet Care</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Nails</a></li>
                    <li className="hover:bg-gray-200 px-2 py-1"><a href="#">All Hand & Feet Services</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">BRIDAL</a></li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">SHOP PRODUCTS</a></li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">RUNWAY REWARDS</a></li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">OFFERS</a></li>
            <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">BOOK APPOINTMENT</a></li>
            <li><span className="text-red-700">|</span> &nbsp;&nbsp;&nbsp; <a href="">BECOME A PARTNER</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;


// const Navbar = () => {
//   return (
//     <>
//       <div className="sticky top-[61px]">
//         <div className="w-full flex bg-black h-[55px] items-center justify-around">
//           <ul className="flex text-white justify-around gap-15 text-nowrap">
//             <li className="relative group">
//               <a
//                 href="#"
//                 className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]"
//               >
//                 SERVICES
//               </a>

//               {/* Dropdown menu */}
//               <ul className="absolute top-[100%] left-0 bg-white text-black min-w-[480px] rounded-md shadow-lg hidden group-hover:block transition-all duration-500 grid grid-cols-4">
//                 <li className="px-4 py-2">
//                   <h3 className="font-bold mb-2">Skin</h3>
//                   <ul>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Skin Care - Treatments</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Body Care</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Skin Care</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Skin Care - Basics</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Skin Care - Depilation</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">All Skin Services</a></li>
//                   </ul>
//                 </li>
//                 <li className="px-4 py-2">
//                   <h3 className="font-bold mb-2">Hair</h3>
//                   <ul>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Form</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Hair Care</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Colors</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Styling</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Haircut</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">All Hair Services</a></li>
//                   </ul>
//                 </li>
//                 <li className="px-4 py-2">
//                   <h3 className="font-bold mb-2">Makeup</h3>
//                   <ul>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Styling</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Saree Drap</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Makeup</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">All Makeup Services</a></li>
//                   </ul>
//                 </li>
//                 <li className="px-4 py-2">
//                   <h3 className="font-bold mb-2">Hands & Feet</h3>
//                   <ul>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Hand Care</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Feet Care</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">Nails</a></li>
//                     <li className="hover:bg-gray-200 px-2 py-1"><a href="#">All Hand & Feet Services</a></li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">BRIDAL</a></li>
//             <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">SHOP PRODUCTS</a></li>
//             <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">RUNWAY REWARDS</a></li>
//             <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">OFFERS</a></li>
//             <li><a href="" className="hover:text-red-600 border-b-2 border-transparent hover:border-red-600 pb-1 transition-all duration-[1000ms]">BOOK APPOINTMENT</a></li>
//             <li><span className="text-red-700">|</span> &nbsp;&nbsp;&nbsp; <a href="">BECOME A PARTNER</a></li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
