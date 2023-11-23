import "./ApartmentCard.css";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { LuBuilding2 } from "react-icons/lu";
import { TbBuildingCommunity } from "react-icons/tb";

const ApartmentCard = ({ data }) => {
    const { _id, image, floor_no, block_name, apartment_no, rent } = data
    return (
        <div className="card">
            <div className="apartmenImg">
                <img src={image} alt="" />
            </div>

            <div className="cardDetails">
                <p><span><TbBuildingCommunity />Floor No : </span> {floor_no}</p>
                <p><span><BsCalendar2WeekFill />Block : </span> {block_name}</p>
                <p><span><LuBuilding2 />Apartment NO : </span> {apartment_no}</p>
                <p><span><GrMoney />Rent :</span> ${rent}</p>
            </div>

            <div className="agreementBtn">
                <button>Agreement </button>
            </div>

        </div>
    );
};

export default ApartmentCard;
