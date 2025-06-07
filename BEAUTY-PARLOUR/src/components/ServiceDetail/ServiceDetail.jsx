const ServiceDetail = () => {
  return (
    <section className="w-full">
      {/* Hero Section with Background Image */}
      <div className="bg-black">
        <div className="bg-[url('/services.jpg')] bg-cover bg-center h-[300px] flex items-center mx-65 text-white justify-around">
          <h1 className="text-4xl font-bold text-red-600">SERVICES</h1>
          <h1 className="text-4xl font-bold">&nbsp;</h1>
          <h1 className="text-4xl font-bold">&nbsp;</h1>
          <h1 className="text-4xl font-bold">&nbsp;</h1>
        </div>
      </div>

      {/* Services List Section */}
      <div className="container mx-auto px-4 py-8 ">
        <div className="container mx-22 flex flex-row justify-between">
          <div>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li className="flex items-center justify-between mb-0"><li className="font-black text-[1.5rem]">Skin </li><i className="fa-solid fa-greater-than"></i></li><hr className="m-0 p-0 text-gray-400"/>
              <li className="flex items-center justify-between mb-0"><li className="font-black text-[1.5rem]">Hair</li><i className="fa-solid fa-greater-than"></i></li><hr className="m-0 p-0 text-gray-400"/>
              <li className="flex items-center justify-between mb-0"><li className="font-black text-[1.5rem]">Makeup</li><i className="fa-solid fa-greater-than"></i></li><hr className="m-0 p-0 text-gray-400"/>
              <li className="flex items-center justify-between mb-0"><li className="font-black text-[1.5rem]">Hands & Feet</li><i className="fa-solid fa-greater-than"></i></li><hr className="m-0 p-0 text-gray-400"/>
              <li className="flex items-center justify-between mb-0"><li className="font-black text-[1.5rem]">Services - Men</li><i className="fa-solid fa-greater-than"></i></li><hr className="m-0 p-0 text-gray-400"/>
              <li className="flex items-center justify-between mb-0"><li className="font-black text-[1.5rem]">Services - Women</li><i className="fa-solid fa-greater-than"></i></li><hr className="m-0 p-0 text-gray-400"/>
            </ul>
          </div>
          <div className="flex gap-x-[20px]">
            <div className="bg-white rounded-lg shadow overflow-hidden w-[17%]">
              <img
                src="/public/asset 9.jpeg"
                alt="Beauty Sutra Facial"
                className="rounded-t-lg transition-transform duration-500 hover:scale-110"
              />
              <h3 className="text-red-600 text-center text-lg font-bold py-4 ">
                Beauty Sutra Facial
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden w-[17%]">
              <img
                src="/public/asset 10.jpeg"
                className="rounded-t-lg transition-transform duration-500 hover:scale-110 "
              />
              <h3 className="text-red-600 text-center text-lg font-bold py-4">
                Ethereal Bloom Bridal
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden w-[17%]">
              <img
                src="/public/asset 11.jpeg"
                alt="Cut & Colour Collection"
                className="rounded-t-lg transition-transform duration-500 hover:scale-110"
              />
              <h3 className="text-red-600 text-center text-lg font-bold py-4 ">
                Cut & Colour Collection
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden w-[17%]">
              <img
                src="/public/asset 12.jpeg"
                alt="Everyday Glam Makeup"
                className="rounded-t-lg transition-transform duration-500 hover:scale-110"
              />
              <h3 className="text-red-600 text-center text-lg font-bold py-4 ">
                Everyday Glam Makeup
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
