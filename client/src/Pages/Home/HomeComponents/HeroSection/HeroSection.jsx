import img1 from '../../../../assets/slider/1.jpg'
import img2 from '../../../../assets/slider/2.jpg'
import img3 from '../../../../assets/slider/3.jpg'
import img4 from '../../../../assets/slider/4.jpg'
const HeroSection = () => {
    return <>
    <div className="carousel w-full max-h-96">
  <div id="item1" className="carousel-item w-full">
    <img
      src={img1}
      className="w-full object-cover" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={img2}
      className="w-full object-cover" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={img3}
      className="w-full object-cover" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={img4}
      className="w-full object-cover" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </>
}
export default HeroSection;