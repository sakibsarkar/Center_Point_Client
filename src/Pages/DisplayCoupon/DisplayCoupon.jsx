import "./DisplayCoupon.css";
import DisplayCouponCard from "../../Cards/DisplayCouponCard/DisplayCouponCard";
import HeadTitle from "../../Shared/HeadTitle/HeadTitle";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";

const DisplayCoupon = () => {
    const axios = UseAxios()
    const { data } = useQuery({
        queryKey: ["displayCoupons"],
        queryFn: async () => {
            const { data: result } = await axios.get("/all/coupon")
            return result

        }
    })


    return (
        <div className="couponWrapper">

            <HeadTitle mainTitle={"Coupon"} subTitle="Use coupon to pay rent"></HeadTitle>


            <div className="couponCon">
                {
                    data?.map(coupon => <DisplayCouponCard key={coupon._id} coupon={coupon}></DisplayCouponCard>)
                }



            </div>
        </div>
    );
};

export default DisplayCoupon;