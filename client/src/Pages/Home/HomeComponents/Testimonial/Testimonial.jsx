import { FaUserCircle } from "react-icons/fa";

const Testimonial = () => {
  return (
   <div className="bg-green-100 pt-2">
     <div className="w-[80%] mx-auto my-16">
      <h1 className="text-4xl font-bold text-center mb-12">What Our Readers Say</h1>
      <div className="flex flex-col items-center gap-8">
        {/* Testimonial Slider */}
        <div className="carousel carousel-vertical rounded-box w-full md:w-1/2 h-96">
          <div className="carousel-item h-full flex flex-col items-center text-center">
            <FaUserCircle className="text-6xl text-gray-400 mb-4" />
            <div className="p-6 bg-base-200 rounded-lg shadow-lg">
              <p className="text-lg italic">
                This bookshop has a fantastic collection! I found rare books I couldnt get anywhere else. The customer service is top-notch.
              </p>
              <h4 className="text-right font-bold mt-4">- Sarah Khan</h4>
            </div>
          </div>
          <div className="carousel-item h-full flex flex-col items-center text-center">
            <FaUserCircle className="text-6xl text-gray-400 mb-4" />
            <div className="p-6 bg-base-200 rounded-lg shadow-lg">
              <p className="text-lg italic">
                Their delivery service is so fast! I got my books within two days. Highly recommended.
              </p>
              <h4 className="text-right font-bold mt-4">- Ahmed Rahman</h4>
            </div>
          </div>
          <div className="carousel-item h-full flex flex-col items-center text-center">
            <FaUserCircle className="text-6xl text-gray-400 mb-4" />
            <div className="p-6 bg-base-200 rounded-lg shadow-lg">
              <p className="text-lg italic">
                As a student, I appreciate their affordable pricing and the discounts on bulk orders. Great experience!
              </p>
              <h4 className="text-right font-bold mt-4">- Rina Das</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

   </div>
  );
};

export default Testimonial;
