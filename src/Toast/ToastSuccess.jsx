import "./Toast.css";
import { MdDone } from "react-icons/md";

const ToastSuccess = ({ msg }) => {
    return (
        <div className="toastWrapper">
            <div className="toastContainer">

                <div className="successIcon">
                    <MdDone></MdDone>
                </div>

                <h1>{msg}</h1>

            </div>
        </div>
    );
};

export default ToastSuccess;