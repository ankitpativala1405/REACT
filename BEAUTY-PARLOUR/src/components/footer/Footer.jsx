import React from "react";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white px-30">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <h3 className="text-[1.3rem] font-black mx-auto pt-5">
              Caution Notice
            </h3>
            <p className="pt-5">
              <span className="font-black">Please Be Aware:&nbsp;&nbsp;</span>
              Cyber crime, particularly fraudulent communications through phone,
              SMS, WhatsApp, emails, etc. with third parties impersonating as a
              genuine organization or brand to financially dupe consumers is on
              the rise.
            </p>
            <p className="pt-5">
              Unilever does not request for payment for purchase of our products
              outside our platform for any promotional activity. We also do not
              request for payments to participate in any contest, luck draw,
              free gifts. Hence, we request all consumers to be cautious in the
              event of any such communications. You can reach out to our
              customer care listed on our platform to verify any suspicious
              activity.
            </p>
            <p className="pt-5 pb-3">
              <span className="font-black">Note:</span> You can also report any
              suspected fraudulent telecommunications on Chaksu Portal, to the
              Department of Telecommunications (DOT).
            </p>
            <hr />
            <img
              src="/public/asset 0.png"
              alt=""
              className="max-w-[130px] py-1.5"
            />
            <hr />
            {/* nav-link */}
            <div className="flex justify-around pt-5">
              <div>
                <h4 className="font-black text-[1.2rem]">About Us</h4>
                <ul>
                  <li>
                    <a href="">Stay up to date</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-[1.2rem]">Find Us</h4>
                <ul className="flex gap-[10px] mt-2 justify-center items-center">
                  <li>
                    <a
                      href="#"
                      className="bg-gray-500 p-2 rounded-lg flex items-center justify-center"
                    >
                      <i className="fa-brands fa-instagram text-black text-3xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-gray-500 p-2 rounded-lg flex items-center justify-center"
                    >
                      <i className="fa-brands fa-facebook text-black text-3xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-gray-500 p-2 rounded-lg flex items-center justify-center"
                    >
                      <i className="fa-brands fa-twitter text-black text-3xl"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-gray-500 p-2 rounded-lg flex items-center justify-center"
                    >
                      <i className="fa-brands fa-linkedin text-black text-3xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-[1.2rem]">Careers</h4>
              </div>
              <div>
                <h4 className="font-black text-[1.2rem]">Customer Service</h4>
                <ul>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-[1.2rem]">Legal</h4>
                <ul>
                  <li>
                    <a href="">Accessibility</a>
                  </li>
                  <li>
                    <a href="">Cookie Notice</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Studio-Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* icon section */}
            <div></div>
          </div>
        </div>
      </footer>
      <FooterBottom/>
    </>
  );
};

export default Footer;
