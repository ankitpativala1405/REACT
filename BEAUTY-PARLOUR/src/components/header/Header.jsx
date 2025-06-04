const Header = () => {
  return (
    <>
      <header className="w-full">
        <div className="w-full flex h-[55px] items-center justify-around bg-[#1a1a1a]">
          <div className="">
            <img src="/public/asset 0.png" alt="" className="w-[120px]" />
          </div>
          <div>
            <ul className="flex text-white justify-between gap-5 font-bold">
              <li className="border-b-2 border-red-500">Contact Us</li>
              <li className="border-b-2 border-red-500">Salon Locator </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
