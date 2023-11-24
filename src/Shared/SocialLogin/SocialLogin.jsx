import "./SocialLogin.css";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";

const SocialLogin = ({ marginT = 0 }) => {
    return (
        <div className="socialCon" style={{ marginTop: `${marginT}px` }}>

            <div className="or">
                <p>Or login with</p>
            </div>

            <div className="social">
                <FiGithub></FiGithub>
            </div>
            <div className="social">
                <FcGoogle></FcGoogle>
            </div>

        </div>
    );
};

export default SocialLogin;