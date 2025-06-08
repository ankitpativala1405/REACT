import React from "react";

const BookAppointmentS1 = () => {
  return (
    <section className="w-full bg-gray-200">
      <div className="mx-auto container ">
        <div className="w-full flex flex-row mx-auto">
          <div className="ml-[-25px]">
            <img src="/public/Book_Appointment_1.jfif" alt="" />
          </div>
          <div class="bg-gray-100">
            <div class="container p-5 bg-gray-200 rounded">
              <h1 class="text-2xl mb-5 font-bold  text-center">
                BOOK AN APPOINTMENT
              </h1>
              <form class="space-y-4">
                <div> <input type="text" id="name" class="mt-1 p-2 w-full border border-red-500 rounded"
                    placeholder="Name*" required/>                   
                </div>
                <div><input type="tel" id="mobile" placeholder="Mobile Number*"
                    class="mt-1 p-2 w-full border border-red-500 rounded" required/>  
                </div>
                <div><input type="email" id="email" placeholder="Email Id*"
                    class="mt-1 p-2 w-full border border-red-500 rounded" required/>
                </div>
                <div><input type="text" id="wedding-date" placeholder="Wedding Date* (DD-MM-YYYY)" 
                     className="mt-1 p-2 w-full border border-red-500 rounded" required />
                </div>
                <div><input type="text" id="state" placeholder="State*"
                    class="mt-1 p-2 w-full border border-red-500 rounded"/>
                </div>
                <div><input type="text" id="city" placeholder="Enter City*"
                    class="mt-1 p-2 w-full border border-red-500 rounded" required/>
                </div>
                <div><input type="text" id="pincode" placeholder="Enter Pincode*"
                    class="mt-1 p-2 w-full border border-red-500 rounded" required/>
                </div>
                <div>
                  <label class="block font-medium" for="captcha">
                    Captcha 8 + 1 =
                  </label>
                  <input type="text" id="captcha" class="mt-1 p-2 w-full border rounded" required/>
                </div>
                <div class="text-[15px]">
                  <label for="terms">By proceeding, I agree to the
                    <a href="#" class="text-blue-600"> Terms & Conditions&nbsp;</a>,
                    <a href="#" class="text-blue-600"> Cookie Notice</a> and 
                    <a href="#" class="text-blue-600"> Privacy Notice</a>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="age-confirm" required class="mr-2"/>
                  <label for="age-confirm">I confirm that I am 18 years old or older</label>
                </div>
                <div>
                  <input type="checkbox" id="marketing" class="mr-2" />
                  <label for="marketing">
                    I agree to receiving marketing communications (WhatsApp,
                    SMS, Email) from Lakme salon & the Trusted Unilever Brands.
                  </label>
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentS1;
