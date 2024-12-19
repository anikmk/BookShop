import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignIn = () => {
    const {loginUser} = useAuth();
    const navigate = useNavigate();
    const handleloginUser = async(e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
        try{
          await loginUser(email,password);
          navigate("/")
        }
        catch(err){toast.error("Some thing went wrong! Try again");}
      }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleloginUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
                new to here? <Link to={'/signUp'}>Register</Link>
            </div>
            <div className="divider">OR</div>
            <div className="flex items-center justify-center gap-4 cursor-pointer text-lg">
            <FcGoogle /> Google
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignIn;