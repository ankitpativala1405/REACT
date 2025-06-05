const Service = () => {
    return (
        <>
            <main>
                <div className="bg-[#e2e2e2] pt-5">
                    <h2 className="flex justify-center text-4xl text-bold font-[800] tracking-wider">TRENDSETTING SERVICES</h2>
                    <div className="flex justify-center pt-4">
                        <div className="bg-red-500 w-[35px] h-[10px]"></div>
                    </div>
                    <p className="flex justify-center text-[17px] text-center pt-5">Our runway experts have curated some of the most popular services at Lakmē Salon, just for you.<br />
                        Take your pick and head to your nearest salon and get started on your makeover!</p>
                </div>
                <div className="bg-[#e2e2e2] pt-15 flex justify-around pl-60 pr-60 pb-15">
                    <div className="bg-white rounded-lg shadow overflow-hidden" >
                        <img src="/public/asset 8.jpeg" alt="Pedicure & Manicure" className="rounded-t-lg transition-transform duration-500 hover:scale-110" />
                        <h3 className="text-red-600 text-center text-lg font-bold py-4 ">Pedicure & Manicure</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <img src="/public/asset 9.jpeg" alt="Beauty Sutra Facial" className="rounded-t-lg transition-transform duration-500 hover:scale-110" />
                        <h3 className="text-red-600 text-center text-lg font-bold py-4 ">Beauty Sutra Facial</h3>
                    </div>
                    <div className="bg-white/80 rounded-lg shadow overflow-hidden">
                        <img src="/public/asset 10.jpeg" className="rounded-t-lg transition-transform duration-500 hover:scale-110 " />
                        <h3 className="text-red-600 text-center text-lg font-bold py-4" >Ethereal Bloom Bridal</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <img src="/public/asset 11.jpeg" alt="Cut & Colour Collection" className="rounded-t-lg transition-transform duration-500 hover:scale-110" />
                        <h3 className="text-red-600 text-center text-lg font-bold py-4 ">Cut & Colour Collection</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <img src="/public/asset 12.jpeg" alt="Everyday Glam Makeup" className="rounded-t-lg transition-transform duration-500 hover:scale-110" />
                        <h3 className="text-red-600 text-center text-lg font-bold py-4 ">Everyday Glam Makeup</h3>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Service;
