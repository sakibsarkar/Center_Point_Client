import "./ManageCoupon.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaArrowsRotate } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const ManageCoupon = () => {
    const axios = UseAxios()
    const token = getItemFromLS()
    const [show, setShow] = useState(false)

    const { data, refetch } = useQuery({
        queryKey: ["manageCoupon"],
        queryFn: async () => {
            const { data: result } = await axios.get("/coupons")
            return result
        }
    })

    // active, coupon, _id, value 


    const handleCoupon = async (id, state) => {
        try {
            if (state) {
                await axios.put(`/coupon/unactive?id=${id}&&token=${token}`)
                refetch()
                Swal.fire({
                    title: "Successful!",
                    text: "Coupon validity changed",
                    icon: "success"
                });
                return
            }

            await axios.put(`/coupon/active?id=${id}&&token=${token}`)
            refetch()
            Swal.fire({
                title: "Successful!",
                text: "Coupon validity changed",
                icon: "success"
            });

        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="couponMangeCon">

            <h1>Manage Coupons</h1>

            <div className="couponBox">
                <img src="https://i.ibb.co/KsZtGTZ/6364b6fd26e298baeeb93c41-631546cb369d2220cc377cd5-Draw-Kit0001-Peach-Illustration-System-Thumbnail.png" alt="" />


                <table>
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Coupon.</th>
                            <th>Discount(%)</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            data?.map((coupon, index) => <tr key={coupon._id}
                                className={index % 2 == 0 ? "evenCell" : "oddCell"}
                            >
                                <td>{index + 1}</td>
                                <td>{coupon.coupon}</td>
                                <td>{coupon.value}</td>
                                <td className={coupon.active == true ? "couponStatus active" : "couponStatus unactive"}
                                    onClick={() => handleCoupon(coupon._id, coupon.active)}
                                >
                                    {coupon.active === true ? "active" : "Not Active"}
                                    <FaArrowsRotate className="rotate" />
                                </td>
                            </tr>)
                        }

                    </tbody>

                    <button className="couponAdd" onClick={() => setShow(true)}><CiSquarePlus />Add coupon</button>
                </table>


            </div>

            {
                show ?
                    <div className="couponModalCon">
                        <div className="couponModal">
                            <RxCross1 className="closeCouponModal" onClick={() => setShow(false)} />
                            <form action="">
                                <input type="text" placeholder="Coupon code" />
                                <input type="number" placeholder="Discount percentage" />
                                <textarea name="couponDes" placeholder="Coupon Description"></textarea>
                            </form>
                        </div>
                    </div>

                    :

                    ""
            }

        </div>
    );
};

export default ManageCoupon;