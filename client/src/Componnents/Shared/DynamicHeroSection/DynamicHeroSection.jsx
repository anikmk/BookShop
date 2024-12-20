import Proptypes from 'prop-types'
import { Link } from 'react-router-dom';

const DynamicHeroSection = ({pageTitle,img}) => {

    return (
        <div>
        <div className='pb-16'>
            <div className='relative'>
                <img src={img} alt="about page" className='w-full h-72 object-cover '/>
                
            <div className=' absolute md:bottom-44 bottom-32 left-[90px] md:left-[600px]'>
                <p data-aos="zoom-in" data-aos-delay="100" className=' text-3xl text-neutral font-medium md:text-5xl capitalize font-acme'>{pageTitle}</p>
                <div className='absolute -bottom-5 md:-bottom-10 flex items-center justify-center gap-4 left-[40px] md:left-[80px] '>
                
                <div className='w-3 h-3 bg-white rounded-full'></div>
                <Link to={'/'} title='Home' className='w-3 h-3 bg-white rounded-full'></Link>
                <div className='w-3 h-3 bg-white rounded-full'></div>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};
DynamicHeroSection.propTypes = {
    pageTitle:Proptypes.string,
    img:Proptypes.string
}

export default DynamicHeroSection;