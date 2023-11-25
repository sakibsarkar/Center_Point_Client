import "./Signup.css";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import ToastSuccess from "../../Toast/ToastSuccess";
import UseAxios from "../../Axios/UseAxios";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaImages } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { addtoLS } from "../../LocalStorage/localStorage";
import { uploadImage } from "../../upLoadImg/uploadImage";

const Signup = ({ location }) => {

    const [imgName, setImgName] = useState("Choose your photo")
    const [error, setError] = useState("")


    const { createAccountWithEmail, naviGateLocation, waitForUser, setWaitForUser } = useContext(Authcontext)

    const navigate = useNavigate()

    const address = naviGateLocation?.state ? naviGateLocation?.state : "/"

    const axios = UseAxios()

    const handleSetImgName = (e) => {
        const imgName = e.target.files[0].name
        if (imgName.length > 20) {
            return setImgName(`${imgName.slice(0, 19)}...`)
        }

        setImgName(imgName)
    }



    const handelSignup = async (e) => {
        e.preventDefault()
        const form = e.target
        const image = form.image.files[0]
        const fname = form.Fname.value
        const lname = form.Lname.value
        const fullName = `${fname} ${lname}`
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value


        // regex
        const capital = /[A-Z]/;
        const special = /[\W_]/

        if (password.length < 6) {
            return setError("*password shold be atleast 6 character")
        }

        if (!capital.test(password)) {
           
            return setError("* A capital letter required")
        }

        if (!special.test(password)) {
        
            return setError("* A special character required")
            // return toast.error("password should contain atleast r")
        }


        if (password !== confirm) {
            return setError("password didn't match")
        }
        try {
            setError("")
            const { data } = await uploadImage(image)
            // console.log(data.display_url);

            const { user } = await createAccountWithEmail(email, password)

            await updateProfile(user, {
                displayName: fullName,
                photoURL: data?.display_url
            })

            const { data: token } = await axios.post("/user/token", { email: email })
            addtoLS(token)

            const userData = { email: email, role: "user", name: fullName, apartment: "", agreementDate: "" }

            const { data: up } = await axios.put(`/add/user/${email}`, userData)
            setWaitForUser(!waitForUser)
            navigate(address)
        }

        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: ''
            });
        }




    }
    return (
        <div className="signupCon">
            <h1>Signup</h1>
            <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
            <form className="signUpForm" onSubmit={handelSignup}>


                <div className="broFeilds">
                    <input type="text" required placeholder="First Name" spellCheck={false} name="Fname" />
                    <input type="text" required placeholder="Last Name" name="Lname" />
                </div>

                <div className="imgUploadBox">
                    <p> <FaImages />{imgName}</p>
                    <input accept="image/*" onChange={(e) => handleSetImgName(e)} name="image" type="file" required />
                </div>

                <input spellCheck={false} placeholder="Your Email" type="email" name="email" required />
                <input spellCheck={false} placeholder="Your Password" type="password" name="password" required />
                <p className="passError">{error}</p>
                <input spellCheck={false} placeholder="Confirm Your Password" type="password" name="confirm" required />

                <button>Sign Up</button>

                <SocialLogin marginT={33}></SocialLogin>
            </form>



        </div>
    );
};

export default Signup;