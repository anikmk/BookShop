import DynamicHeroSection from "../../Componnents/Shared/DynamicHeroSection/DynamicHeroSection";
import NavLogo from "../../Componnents/Shared/NavBar/NavLogo";
import aboutImg from '../../assets/slider/about.jpeg';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <DynamicHeroSection pageTitle={"About Us"} img={aboutImg} />

      {/* About Us Content */}
      <div className="w-[80%] mx-auto my-16">
        <h2 className="text-4xl font-bold text-center mb-8">Welcome to <NavLogo text1={"BOOK"} text2={'SHOP'} /></h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Founded in 2022, we are your trusted companion for all your reading needs. Our mission is to connect readers 
          across Bangladesh with books that inspire, educate, and entertain. 
        </p>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              A diverse collection of books, including fiction, non-fiction, academic, and rare editions.
            </li>
            <li>
              Affordable pricing and exciting discounts for book lovers.
            </li>
            <li>
              Fast and reliable delivery across Bangladesh.
            </li>
            <li>
              Friendly customer support ready to assist you anytime.
            </li>
          </ul>
        </div>

        {/* Our Journey */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Journey</h3>
          <p className="text-lg text-gray-700">
            Starting from a small bookstore in Dhaka, we have grown into a nationwide bookshop that caters to the 
            unique needs of readers from all walks of life. From students seeking academic resources to enthusiasts 
            looking for the latest novels, we have something for everyone.
          </p>
        </div>

        {/* Our Vision */}
        <div>
          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700">
            At [Your Bookshop Name], we believe books have the power to transform lives. Our vision is to create a 
            community where every individual has access to knowledge and inspiration through reading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
