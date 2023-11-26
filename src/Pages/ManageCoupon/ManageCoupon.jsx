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
    const [postLoading, setPostLoading] = useState(false)

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


    const handleAddCoupon = async (e) => {
        e.preventDefault()
        if (postLoading) {
            return
        }
        const form = e.target
        const coupon = form.code.value
        const value = form.discount.value
        const description = form.couponDes.value

        const obj = { coupon, value, active: true, description }

        setPostLoading(true)
        const { data } = await axios.post(`/add/coupon?token=${token}`, obj)
        refetch()
        setShow(false)
        setPostLoading(false)
        Swal.fire({
            title: "Successful!",
            text: "Coupon added",
            icon: "success"
        });


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
                            <form onSubmit={handleAddCoupon}>
                                <input required type="text" placeholder="Coupon code" name="code" />
                                <input required type="number" placeholder="Discount percentage" name="discount" />
                                <textarea required name="couponDes" placeholder="Coupon Description" ></textarea>
                                <button disabled={postLoading ? true : false} type="submit">{
                                    postLoading ? "Loading..." : "Add"
                                }</button>
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