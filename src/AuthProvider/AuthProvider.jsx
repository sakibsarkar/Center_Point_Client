import UseAxios from "../Axios/UseAxios";
import auth from "../FirebaseConfig";
import axios from "axios";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getItemFromLS } from "../LocalStorage/localStorage";

export const Authcontext = createContext(null)

const AuthProvider = ({ children }) => {


    const [paymentObject, setPaymentObject] = useState({})
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState("")
    const [waitForUser, setWaitForUser] = useState(true)
    const [toast, setToast] = useState(null)
    const [role, setRole] = useState("")
    const [roleLoading, setRoleLoading] = useState(true)
    const [naviGateLocation, setNaviGateLocation] = useState("")//it will be use in register page we will set the value from log in page


    const token = getItemFromLS()
    // const axios = UseAxios()

    const googleAuthentication = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }


    const gitHubAuthentication = () => {
        setLoading(true)
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createAccountWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {

        onAuthStateChanged(auth, USER => {
            setUser(USER)

            if (USER) {
                axios.get(`http://localhost:5000/api/user/role?token=${token}&&email=${USER?.email}`)
                    .then(({ data }) => {

                        setRole(data?.role)
                        setRoleLoading(false)
                    })

            }
            setLoading(false)
        })




    }, [waitForUser, token])


    const items = {
        loading,
        googleAuthentication,
        gitHubAuthentication,
        setWaitForUser,
        user,
        logOut,
        loginWithEmail,
        createAccountWithEmail,
        toast,
        setToast,
        naviGateLocation,
        setNaviGateLocation,
        role,
        roleLoading,
        paymentObject,
        setPaymentObject
    }



    return (
        <Authcontext.Provider value={items}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;