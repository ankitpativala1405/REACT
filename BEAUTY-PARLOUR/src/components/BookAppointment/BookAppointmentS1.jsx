import React, { useState, useEffect } from "react";

const BookAppointmentS1 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const random_1 = Math.floor(Math.random() * 10);
    const random_2 = Math.floor(Math.random() * 10);
    setNum1(random_1);
    setNum2(random_2);
    setCorrectAnswer(random_1 + random_2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaAnswer) !== correctAnswer) {
      alert("Captcha is incorrect. Please try again.");
      generateCaptcha();
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="w-full bg-gray-200">
      <div className="mx-auto container ">
        <div className="w-full flex flex-row mx-auto">
          <div className="ml-[-25px]">
            <img src="/public/Book_Appointment_1.jfif" alt="" />
          </div>
          <div className="bg-gray-100">
            <div className="container p-5 bg-gray-200 rounded">
              <h1 className="text-2xl mb-5 font-bold text-center">
                BOOK AN APPOINTMENT
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div><input type="text" id="name" className="mt-1 p-2 w-full border border-red-500 rounded"
                    placeholder="Name*" required/></div>
                <div><input type="tel" id="mobile" placeholder="Mobile Number*"
                    className="mt-1 p-2 w-full border border-red-500 rounded" required/></div>
                <div><input type="email" id="email" placeholder="Email Id*"
                    className="mt-1 p-2 w-full border border-red-500 rounded" required/></div>
                <div><input type="text" id="wedding-date" placeholder="Wedding Date* (DD-MM-YYYY)"
                    className="mt-1 p-2 w-full border border-red-500 rounded" required/></div>
                <div><input type="text" id="state" placeholder="State*"
                    className="mt-1 p-2 w-full border border-red-500 rounded" required/></div>
                <div><input type="text" id="city" placeholder="Enter City*"
                    className="mt-1 p-2 w-full border border-red-500 rounded" required/></div>
                <div><input type="text" id="pincode" placeholder="Enter Pincode*"
                    className="mt-1 p-2 w-full border border-red-500 rounded" required/></div>
                <div>
                  <label className="block font-medium" htmlFor="captcha">Captcha {num1} + {num2} = </label>
                  <input type="text" id="captcha" className="mt-1 p-2 w-full border rounded" value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)} required/>
                </div>
                <div className="text-[15px]">
                  <label htmlFor="terms">
                    By proceeding, I agree to the
                    <a href="#" className="text-blue-600">
                      {" "}
                      Terms & Conditions&nbsp;
                    </a>
                    ,
                    <a href="#" className="text-blue-600">
                      {" "}
                      Cookie Notice
                    </a>{" "}
                    and
                    <a href="#" className="text-blue-600">
                      {" "}
                      Privacy Notice
                    </a>
                  </label>
                </div>
                <div><input type="checkbox" id="age-confirm" required className="mr-2"/>
                  <label htmlFor="age-confirm"> I confirm that I am 18 years old or older</label>
                </div>
                <div>
                  <input type="checkbox" id="marketing" className="mr-2" />
                  <label htmlFor="marketing">
                    I agree to receiving marketing communications (WhatsApp,
                    SMS, Email) from Lakme salon & the Trusted Unilever Brands.
                  </label>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentS1;
