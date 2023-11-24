import "./Login.css";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value

        console.log(email, pass);

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

                    <button>Login</button>
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