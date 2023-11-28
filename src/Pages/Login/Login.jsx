import "./Login.css";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { addtoLS } from "../../LocalStorage/localStorage";

const Login = () => {


    const [loginLoading, setLoginLoading] = useState(false)

    const { loginWithEmail, setNaviGateLocation, logOut, user, setWaitForUser, waitForUser } = useContext(Authcontext)
    const location = useLocation()
    setNaviGateLocation(location)


    const navigate = useNavigate()


    const axios = UseAxios()
    const handleLogin = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value

        try {
            setLoginLoading(true)
            await loginWithEmail(email, pass)
            const { data: token } = await axios.post("/user/token", { email: email })
            setWaitForUser(!waitForUser)
            addtoLS(token)
            setLoginLoading(false)
            Swal.fire({
                title: "Log in success ful",
                text: "",
                icon: "success"
            });
            navigate(location?.state ? location.state : "/")
        }
        catch (err) {
            setLoginLoading(false)


            if (user) {
                await logOut()
                Swal.fire({
                    icon: "error",
                    title: "opps..",
                    text: "something went wrong",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                return
            }

            Swal.fire({
                icon: "error",
                title: "opps..",
                text: "something went wrong, please check your email or password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

        }

    }

    return (
        <div className="logInCon">
            <div className="logInBox">
                <form className="logInForm" onSubmit={handleLogin}>
                    <div>
                        <h1>Log in</h1>
                        <p>Doesn't have account yet? <Link className="signup" to={"/signup"}>signup</Link></p>
                    </div>
                    <TextField name="email" type="email" required id="standard-basic" label="Email" variant="standard" />
                    <TextField name="password" type="password" required id="standard-basic" label="Password" variant="standard" />

                    <button>{loginLoading ? <ImSpinner9 className="spinner"></ImSpinner9> : "Log in"}</button>
                    <SocialLogin marginT={20}></SocialLogin>

                </form>

                <div className="logInLeftSide">
                    <img src="https://i.ibb.co/qxh3y4Z/login.png" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Login;