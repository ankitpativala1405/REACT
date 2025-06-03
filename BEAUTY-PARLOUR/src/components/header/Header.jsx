import './Header.css'

const Header = () => {
  return (
    <>
      <header className="w-full min-h-screen">
        <div className="w-full flex bg-black h-[55px] items-center justify-around">
          <div className="">
            <img src="/public/asset 0.png" alt="" className="w-[120px]" />
          </div>
          <div>
            <ul className="flex bg-black text-white justify-between gap-5 font-bold">
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
