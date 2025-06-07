import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const GiftCard = () => {
  return (
    <>
      <section className="py-25 flex mx-auto px-30 bg-[#e2e2e2] w-full">
        <div className="container mx-auto">
          <div className="flex gap-x-[35px]">
            <div>
              <img src="/public/asset 14.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-[2rem] font-black">GIFT CARDS FOR YOUR LOVED ONES</h2>
              <p className="pt-3 text-[1.2rem]">
                We know how difficult it is to think of a thoughtful gift for a
                loved one. How about gifting them some much-needed pampering?
                Get them a Lakmé Salon gift card today!
              </p>
              <Box sx={{ "& button": { m: 1 } }} className="mt-5">
                <div>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      width: "150px",
                      backgroundColor: "#EB212E",
                      fontWeight: 700,
                      transition: "transform 0.5s",
                      "&:hover": {
                        transform: "scale(1.1)",
                        backgroundColor: "white",
                        color: "#EB212E",
                        fontWeight: 700,
                        border: "1px solid #EB212E",
                      },
                    }}
                  >
                    {" "}
                    READ ME{" "}
                  </Button>
                </div>
              </Box>
              <p>*Terms & Conditions apply</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftCard;
