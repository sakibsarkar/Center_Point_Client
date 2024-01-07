import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const Contact = () => {
    const form = useRef(null)

    const { user } = useContext(Authcontext)

    //user details 
    const user_name = user ? user?.displayName : ""
    const user_email = user ? user.email : ""

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_MAIL_JS_SERVICE_ID, import.meta.env.VITE_MAIL_JS_TPLT_ID, form.current, import.meta.env.VITE_MAIL_JS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contactContainer">

            <h1>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" required defaultValue={user_name} />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" required defaultValue={user_email} />
                </div>
                <div>
                    <p>Message</p>
                    <textarea name="message" required />
                </div>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Contact;