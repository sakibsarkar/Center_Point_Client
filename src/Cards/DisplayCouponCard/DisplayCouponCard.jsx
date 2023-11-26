import "./DisplayCouponCard.css";
import Swal from "sweetalert2";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdContentCut } from "react-icons/md";
import { useCopyToClipboard } from "usehooks-ts";

const DisplayCouponCard = ({ coupon: couponData }) => {
    const { _id, coupon, value, active, description } = couponData
    const [copyValue, copy] = useCopyToClipboard()

    const handleCopy = () => {
        copy(coupon)
        Swal.fire({
            title: "Successfully copied to clip board",
            text: "",
            icon: "success"
        });
    }
    return (
        <div className="couponCard">

            <p>{coupon}</p>
            <div className="copyBtn" onClick={() => handleCopy()}>
                <MdOutlineContentCopy className="copyIcon"></MdOutlineContentCopy>
            </div>

            <div className="cutIcon">
                <MdContentCut></MdContentCut>
            </div>

        </div>
    );
};

export default DisplayCouponCard;