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
            <h2 className="text-2xl font-semibold mb-4">Our Categories</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Skin</li>
              <li>Hair</li>
              <li>Makeup</li>
              <li>Hands & Feet</li>
              <li>Services - Men</li>
              <li>Services - Women</li>
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
