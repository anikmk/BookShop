import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react"
import { 
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut, } from "firebase/auth";

import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const google = new GoogleAuthProvider();
    const signinUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signinWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth,google)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };



    useEffect(() => {
      const unSubscrive = onAuthStateChanged(auth,(currentUser) => {
        console.log(currentUser);
        setUser(currentUser || null);

      })
    
      return () => {
        unSubscrive()
      }
    }, [])

    const authInfo = {
        user,
        signinUser,
        loginUser,
        logOut,
        signinWithGoogle,
        loading
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
 
}
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider