const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="w-full flex bg-black h-[55px] items-center justify-around">
          <ul className="flex text-white justify-around gap-15">
            <li>SERVICES</li>
            <li>BRIDAL</li>
            <li>SHOP PRODUCTS</li>
            <li>RUNWAY REWARDS</li>
            <li>OFFERS</li>
            <li>BOOK APPOINTMENT</li>
            <li><span className="text-red-700">|</span> &nbsp;&nbsp;&nbsp; BECOME A PARTNER</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
