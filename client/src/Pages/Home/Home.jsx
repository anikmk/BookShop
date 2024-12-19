import Category from "./HomeComponents/Category/Category";
import ContactInfo from "./HomeComponents/ContactInfo/ContactInfo";
import Faq from "./HomeComponents/Faq/Faq";
import FeatureProduct from "./HomeComponents/FeatureProduct/FeatureProduct";
import HeroSection from "./HomeComponents/HeroSection/HeroSection";
import Testimonial from "./HomeComponents/Testimonial/Testimonial";

const Home = () => {

    return (
        <>
        <HeroSection />
        <FeatureProduct />
        <Testimonial />
        <Category />
        <Faq />
        <ContactInfo />
        </>
    );
};

export default Home;