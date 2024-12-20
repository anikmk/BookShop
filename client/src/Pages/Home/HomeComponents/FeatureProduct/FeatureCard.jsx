import { Link } from "react-router-dom";
import Loader from "../../../../Componnents/Shared/Loader/Loader";
import isImgNone from '../../../../assets/slider/download (1).jpeg'
const FeatureCard = ({data,isLoading}) => {
    const {bookName,img,description,price,_id} = data;
    if(isLoading) return <Loader />
    return <div>
        <div className="card card-compact bg-base-100 h-80 shadow-xl">
          <figure>
            <img className="object-fill"
              src={img || isImgNone}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <p>{description}</p>
            <div className="flex items-center justify-between">
            <div className="text-md font-semibold text-green-700">{price} Taka</div>
              <Link to={`/detailsPage?id=${_id}`}><button className="btn bg-green-500 text-white">Learn More</button></Link>
            </div>
          </div>
                </div>
    </div>
}
export default FeatureCard;