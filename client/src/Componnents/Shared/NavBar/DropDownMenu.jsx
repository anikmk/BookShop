import { Link } from 'react-router-dom';
import userLogo from '../../../../public/user.png'
import useAuth from '../../../hooks/useAuth';
const DropDownMenu = () => {
    const {user,logOut} = useAuth();
    const userImage = user?.photoURL || userLogo;
    
    const handleLogout = async() => {
       try{
        await logOut();
       }
       catch(err){console.log(err.message)}
        
    }
    return(
<ul className="menu menu-horizontal px-1 z-20">
      <li>
        <details>
          <summary><img className='w-10' src={userImage} alt="" /></summary>
          <ul className="p-2">
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
            <li className='bg-red-300 rounded-lg'><a onClick={handleLogout}>Log Out</a></li>
          </ul>
        </details>
      </li>
    </ul>
    )
}
export default DropDownMenu;