import "./ApartmentCard.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { motion } from "framer-motion";
import { useContext } from "react";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { LuBuilding2 } from "react-icons/lu";
import { TbBuildingCommunity } from "react-icons/tb";
import { Navigate, useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const ApartmentCard = ({ data }) => {
    const { _id, booked, image, floor_no, block_name, apartment_no, rent } = data
    const { user } = useContext(Authcontext)

    const navigate = useNavigate()
    const token = getItemFromLS()
    const axios = UseAxios()

    const handleAgreement = async () => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        if (!user) {

            return navigate("/login")
        }

        if (booked === "true") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "room already got booked",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return
        }


        const date = new Date()
        const month = date.getMonth()
        const day = date.getDay()
        const year = date.getFullYear()

        const today = `${day} ${months[month]}. ${year}`

        const agreementData = {
            userName: user?.displayName,
            userEmail: user?.email,
            floor_no: floor_no,
            block_name: block_name,
            apartment_no: apartment_no,
            rent: rent,
            status: "pending",
            date: today,
            apartmentID: _id

        }

        await axios.post(`/agreement?token=${token}`, agreementData)

        Swal.fire({
            title: "success",
            text: "your agreement request has been send. please wait for confirm mation",
            icon: "success"
        });
    }

    return (
        // <div className="card">
        <motion.div className="card" animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ delay: 0.8, duration: 0.4 }}>
            <div className="apartmenImg">
                <img className="appImg" src={image} alt="" />
            </div>

            <div className="cardDetails">
                <p><span><TbBuildingCommunity />Floor No : </span> {floor_no}</p>
                <p><span><BsCalendar2WeekFill />Block : </span> {block_name}</p>
                <p><span><LuBuilding2 />Apartment NO : </span> {apartment_no}</p>
                <p><span><GrMoney />Rent :</span> ${rent}</p>
            </div>

            <div className="agreementBtn">
                <button onClick={handleAgreement}>Agreement</button>
            </div>
        </motion.div>
        /* </div> */
    );
};

export default ApartmentCard;
