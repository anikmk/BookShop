import { useQuery } from "@tanstack/react-query";
import Container from "../../../../Componnents/Shared/Container/Container";
import Heading from "../../../../Componnents/Shared/Heading/Heading";
import { getAllProduct } from "../../../../Api/sellerApi";
import FeatureCard from "./FeatureCard";

const FeatureProduct = () => {
    const {data:featureProducts = [],isLoading} = useQuery({
        queryKey:'featureProduct',
        queryFn:async()=> await getAllProduct()
    })
    return <div>
        <Container>
            <Heading heading={'choice your book and read'} subHeading={'Just for you'}/>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-4 place-items-center place-content-center gap-5'>
                        {
                            featureProducts.map((data) => 
                                <div key={data?._id}> <FeatureCard data={data} isLoading={isLoading}/> </div>
                            )
                        }
                    </div>
                </div>
            </Container>
    </div>

}
 export default FeatureProduct;