import "./SocialLogin.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { addtoLS } from "../../LocalStorage/localStorage";

const SocialLogin = ({ marginT = 0 }) => {
    const { googleAuthentication, gitHubAuthentication, user, naviGateLocation, setWaitForUser, waitForUser } = useContext(Authcontext)

    const axios = UseAxios()
    const navigate = useNavigate()
    const adress = naviGateLocation.state ? naviGateLocation.state : "/"

    const handleMediaLogin = async (media) => {
        const { user } = await media()
        const { data } = await axios.post("/user/token", { email: user?.email ? user.email : user.uid })
        addtoLS(data)
        const userData = { email: user?.email, role: "user", name: user?.displayName, apartment: "", agreementDate: "" }
        const { data: up } = await axios.put(`/add/user/${user?.email}`, userData)


        setWaitForUser(!waitForUser)
        Swal.fire({
            title: "Log in successful",
            text: "",
            icon: "success"
        });
        navigate(adress)

    }

    return (
        <div className="socialCon" style={{ marginTop: `${marginT}px` }}>

            <div className="or">
                <p>Or login with</p>
            </div>

            <div className="social" onClick={() => handleMediaLogin(gitHubAuthentication)}>
                <FiGithub></FiGithub>
            </div>
            <div className="social" onClick={() => handleMediaLogin(googleAuthentication)}>
                <FcGoogle></FcGoogle>
            </div>

        </div>
    );
};

export default SocialLogin;