import { useQuery } from "@tanstack/react-query";
import { useState } from 'react'
import { getCategoryWiseData } from "../../../../Api/category";
import CategoryCard from "./CategoryCard";
const Category = () => {
  const [category,setCategory] = useState([]);
  console.log(category);
  const hanldeCategory = (category) => {
   setCategory(category)
  }
  const {data:categories = [],isLoading} = useQuery({
    queryKey:[category],
    queryFn:async()=>await getCategoryWiseData(category)
  })
  console.log(categories);
    return <div>
        <div role="tablist" className="tabs tabs-boxed">
  <input onClick={()=>hanldeCategory('Politics')} type="radio" name="my_tabs_2" role="tab" className="tab font-semibold text-md text-green-500 font-poppins" aria-label="Politics"  defaultChecked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
   <div className="grid grid-cols-2 md:grid-cols-4 place-content-center gap-5">
   {
    categories.map((data) => <CategoryCard key={data._id} data={data} isLoading={isLoading}/>)
   }
   </div>
  </div>

  <input
  onClick={()=>hanldeCategory('Economy')}
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab font-semibold text-md text-green-500 font-poppins"
    aria-label="Economy"
    />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="grid grid-cols-2 md:grid-cols-4 place-content-center gap-5">
   {
    categories.map((data) => <CategoryCard key={data._id} data={data} isLoading={isLoading}/>)
   }
   </div>
  </div>

  <input onClick={()=>hanldeCategory('Romance')} type="radio" name="my_tabs_2" role="tab" className="tab font-semibold text-md text-green-500 font-poppins" aria-label="Romance" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="grid grid-cols-2 md:grid-cols-4 place-content-center gap-5">
   {
    categories.map((data) => <CategoryCard key={data._id} data={data} isLoading={isLoading}/>)
   }
   </div>
  </div>
  <input onClick={()=>hanldeCategory('History')} type="radio" name="my_tabs_2" role="tab" className="tab font-semibold text-md text-green-500 font-poppins" aria-label="History" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="grid grid-cols-2 md:grid-cols-4 place-content-center gap-5">
   {
    categories.map((data) => <CategoryCard key={data._id} data={data} isLoading={isLoading}/>)
   }
   </div>
  </div>
</div>
    </div>

}
export default Category;