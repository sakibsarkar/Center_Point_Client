import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
    const copyDate = new Date().getFullYear()
    return (
        <footer>

            <div className="socialLinks">
                <div className="socialLink">
                    <a href="/">
                        <GrFacebookOption />
                    </a>
                </div>
                <div className="socialLink">
                    <a href="/">
                        <FaTwitter />
                    </a>
                </div>
                <div className="socialLink">
                    <a href="/">
                        <FaYoutube />
                    </a>
                </div>
                <div className="socialLink">
                    <a href="/">
                        <IoLogoInstagram />
                    </a>
                </div>
                <div className="socialLink">
                    <a href="/">
                        <FaGooglePlusG />
                    </a>
                </div>
                <div className="socialLink">
                    <a href="/">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            <div className="footerLinks">
                <Link className="footerLink" to={"/"}>Home</Link>
                <Link className="footerLink" to={"/"}>Apartment</Link>
                <Link className="footerLink" to={"/"}>Profile</Link>
                <Link className="footerLink" to={"/"}>About</Link>
            </div>

            <div className="footerForm">
                <input type="text" />
                <button>Send</button>
            </div>


            <div className="copyRight">
                <p>Copyrighted by @centerpoint. All right reserved {copyDate}</p>
            </div>
        </footer>
    );
};

export default Footer;