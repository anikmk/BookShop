import { useState } from 'react';
import productImg from '../../../src/assets/slider/12.jpg'
import DynamicHeroSection from '../../Componnents/Shared/DynamicHeroSection/DynamicHeroSection';
import { useQuery } from "@tanstack/react-query";
import { getProductFilterData } from '../../Api/productApi';
import Loader from '../../Componnents/Shared/Loader/Loader';
import Container from '../../Componnents/Shared/Container/Container';
import ProductCard from './ProductCard';
const ProductPage = () => {
    const [category, setCategory] = useState('');
    const [searchText, setSearchText] = useState('');
    const [sorting, setSorting] = useState('');
    const [brand, setBrand] = useState('');
    const handleSearchDataSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        setCategory(form.categories.value); // Corrected from "categoris" to "categories"
    setSearchText(form.bookname.value);
    setBrand(form.brand.value);
    setSorting(form.sorting.value);
    }

    const { data: filterData = [],isLoading } = useQuery({
        queryKey: ['filterData',category,searchText,sorting,brand],
        queryFn: async () => await getProductFilterData(category,searchText,sorting,brand),
      })
      if(isLoading)return <Loader />
      console.log(filterData)

    return <div>
        <DynamicHeroSection img={productImg} pageTitle={'product page'}/>
        <div className='bg-neutral md:rounded shadow-lg w-[100%] md:w-3/4 md:left-[11%] absolute lg:bottom-16 md:-bottom-14 -bottom-20'>
            <div className='top-0 left-0 bg-primary w-8 h-[4px]'></div>
            <div className='top-0 left-0 bg-primary w-[4px] h-8'></div>
            <div className='right-0 bottom-0 bg-primary absolute w-8 h-[4px]'></div>
            <div className='right-0 bottom-0 bg-primary absolute w-[4px] h-8'></div>

            {/* user input form */}
            <form onSubmit={handleSearchDataSubmit}>
                <div className='p-4'>
                <label className='mb-2 block font-poppins text-lightText'>Search Book</label>
                <input name='bookname' type="text" className='border-slate-300 border focus:outline-none bg-transparent px-[4px] md:px-4 md:py-2 py-[3px] w-full rounded-lg text-[16px] mb-4' placeholder='searching your book here....'/>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-3 md:gap-5 w-full pb-5 pl-3 md:pl-5 pr-3 md:pr-5'>
                    <div className=''>
                        <label className='mb-2 block font-poppins text-lightText'>Categories</label>
                        <select name="categories" className='border-slate-300 border focus:outline-none bg-transparent px-[4px] md:px-4 md:py-2 py-[3px] w-full rounded-lg text-[16px]'>
                            <option value="">Default Category</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Historical">Historical</option>
                            <option value="Classic">Classic</option>
                            <option value="Romance">Romance</option>
                            <option value="Horror">Horror</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>
                    <div className=''>
                        <label className='mb-2 font-poppins text-lightText block'>Brand</label>
                        <input name="brand" className='w-full border-slate-300 border focus:outline-none bg-transparent px-[4px] md:px-4 md:py-2 py-[3px] rounded-lg text-[16px]' type="text" placeholder='search brand..'/>
                    </div>
                    <div className=''>
                        <label className='mb-2 font-poppins text-lightText block'>Price Range</label>
                        <select name="sorting" className='border-slate-300 border focus:outline-none bg-transparent px-[4px] md:px-4 md:py-2 py-[3px] w-full rounded-lg text-[16px]'>
                            <option value="">Default Sorting</option>
                            <option value="lowToHigh">Sort by price: Low to high</option>
                            <option value="highToLow">Sort by price: High to low</option>
                        </select>
                    </div>
                    <div className='mt-8'>
                        <button className='border-slate-300 border focus:outline-none bg-transparent hover:bg-primary hover:text-white px-[4px] md:px-4 md:py-2 py-[3px] w-full rounded-lg text-[16px] font-medium'>Search</button>
                    </div>
                </div>
            </form>
        </div>

        {/* all product render */}
        <div className='mt-52 mb-10 z-10'>
            <Container>
            <div className='text-center mb-10'>product</div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-4 place-items-center place-content-center gap-5'>
                        {
                            filterData.map((data) => 
                                <div key={data?._id}> <ProductCard data={data} isLoading={isLoading}/> </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
        
    </div>
}
export default ProductPage;