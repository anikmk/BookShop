import Loader from "../../Componnents/Shared/Loader/Loader";
import isImgNone from '../../../src/assets/slider/download (1).jpeg'
import { Link } from "react-router-dom";
const ProductCard = ({data,isLoading}) => {
    const {bookName,img,description,_id} = data

    if(isLoading) return <Loader />
    return <>
        <div className="card card-compact bg-base-100 h-80 shadow-xl">
  <figure>
    <img className="object-fill"
      src={img || isImgNone}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/detailsPage?id=${_id}`}><button className="btn bg-green-500">Learn More</button></Link>
    </div>
  </div>
</div>
    </>
}
export default ProductCard;