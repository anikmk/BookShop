import { FaBookReader } from "react-icons/fa";
const NavLogo = ({text1,text2}) => {
    return <>
    <a className="btn btn-ghost text-xl leading-none"><FaBookReader />{text1}<span className="text-green-500 leading-none">{text2}</span></a>
    </>
}
export default NavLogo;