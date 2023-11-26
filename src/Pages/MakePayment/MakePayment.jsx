import "./MakePayment.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const MakePayment = () => {
    const { user, setPaymentObject } = useContext(Authcontext)
    const token = getItemFromLS()
    const axios = UseAxios()
    const [billMonth, setBillMonth] = useState("select Month")

    const navigate = useNavigate()




    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


    const { data = [], isLoading } = useQuery({

        queryKey: ["beforePayment"],
        queryFn: async () => {
            const { data: userData } = await axios.get(`/member/data?token=${token}&&email=${user?.email ? user?.email : user?.displayName}`)

            const { data: aptData } = await axios.get(`/member/apartmentData?token=${token}&&id=${userData?.apartment}`)

            return [userData, aptData]
        }
    })



    const handleProccedforPay = () => {

        if (billMonth == "select Month") {
            Swal.fire({
                title: "Error",
                text: "Select the billing month",
                icon: "error"
            });
            return
        }

        const payMentObj = { email: data[0]?.email, rent: data[1]?.rent, floor: data[1]?.floor_no, apartment: data[0]?.apartment, block: data[1]?.block_name, billMonth: billMonth, flatNumber: data[1]?.apartment_no }
        setPaymentObject(payMentObj)
        navigate("/payment")
    }



    // _id,email,role,name,create,timestamp,apartment,agreementDate
    // _id,image,floor_no,block_name,apartment_no,rent,booked
    return (
        <div className="beforePaymentCon">

            <h1>Make Your Payment</h1>

            {
                isLoading ?

                    <TailSpin
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    :

                    <div className="paymentBox">
                        <img src="https://i.ibb.co/KmJKnm0/istockphoto-1302890997-612x612-removebg-preview.png" alt="" />

                        <div className="paymentDetails">

                            <input type="text" readOnly defaultValue={data[0]?.email} />
                            <div className="brother">
                                <input type="text" readOnly defaultValue={`Floor : ${data[1]?.floor_no}`} />
                                <input type="text" readOnly defaultValue={`Block : ${data[1]?.block_name}`} />
                                <input type="text" readOnly defaultValue={`Apartment : ${data[1]?.apartment_no}`} />
                            </div>
                            <div className="brother">
                                <input type="text" readOnly defaultValue={`Rent : ${data[1]?.rent}$`} />
                                <select value={billMonth} onChange={(e) => setBillMonth(e.target.value)}>
                                    <option value="select Month">select Month</option>
                                    {
                                        months.map((month, index) => <option
                                            key={index}
                                            value={month}

                                        >{month}</option>)
                                    }
                                </select>
                            </div>
                            <button onClick={() => handleProccedforPay()}>Procced to pay</button>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MakePayment;