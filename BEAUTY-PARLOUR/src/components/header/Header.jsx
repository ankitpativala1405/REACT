const Header = () => {
  return (
    <>
      <section className="bg-[#1a1a1a]">
        <section className="bg-[#1a1a1a] py-4">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
            <img src="/asset 0.png" alt="Logo" className="w-[120px]" />
            <ul className="flex text-white gap-5 font-bold">
              <li className="border-b-2 border-red-500 cursor-pointer">Contact Us</li>
              <li className="border-b-2 border-red-500 cursor-pointer">Salon Locator</li>
            </ul>
          </div>
        </section>

      </section>
    </>
  );
};

export default Header;
