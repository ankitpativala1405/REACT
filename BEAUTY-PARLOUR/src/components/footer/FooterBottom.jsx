import React from "react";

const FooterBottom = () => {
  return (
    <>
      <section className="px-30 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <p>© 2025 Unilever. All rights reserved. </p>
            </div>
            <div>
              <ul className="flex gap-x-[30px] items-center">
                <li><a href="" rel="noreferrer">Terms and Conditions</a></li>
                <li><a href="" target="_blank" rel=""> Privacy Notice</a></li>
                <li><a href="" target="_blank" rel=""><img src="/public/asset 15.png" alt="" width="40px" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterBottom;
