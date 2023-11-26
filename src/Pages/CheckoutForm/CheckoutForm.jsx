import "./CheckoutForm.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useRef, useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const CheckoutForm = () => {

    const { paymentObject } = useContext(Authcontext)

    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()
    const axios = UseAxios()
    const [price, setPrice] = useState(paymentObject?.rent)
    const [isCouponUsed, setIsCouponUsed] = useState(false)
    const [paymentLoading, setPaymentLoading] = useState(false)

    const couponRef = useRef(null)


    if (Object.keys(paymentObject).length === 0) {
        navigate("/dashboard/makePayment")
        return
    }



    const hanldeCouponCheck = async () => {
        const code = couponRef.current.value
        if (isCouponUsed) {
            return
        }
        if (!code) {
            Swal.fire({
                title: "You didn't applied any coupon",
                text: "",
                icon: "error"
            });

            return
        }

        try {
            const { data } = await axios.get(`/get/coupon?code=${code}`);
            if (data?.invalid) {
                Swal.fire({
                    title: "Invalid coupon Code",
                    text: "",
                    icon: "error"
                });

                return
            }
            if (!data?.active) {
                Swal.fire({
                    title: "Coupon is not available",
                    text: "",
                    icon: "error"
                });

                return
            }

            const discount = parseFloat(data.value)
            const discounedPrice = (price - (price * (discount / 100))).toFixed(2)
            setPrice(discounedPrice)
            Swal.fire({
                title: "Successfuly coupon added",
                text: "",
                icon: "success"
            });

            setIsCouponUsed(true)
        }
        catch (err) {
            Swal.fire({
                title: "something wrong",
                text: "",
                icon: "error"
            });
            console.log(err);
        }




    }


    const handlePay = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            console.log(error.message);
            Swal.fire({
                title: `${error.message}`,
                text: "",
                icon: "error"
            });
            return
        }

        setPaymentLoading(true)
        const { data } = await axios.post("/paymentIntent", { price: price })
        console.log(data);

        const { paymentIntent, error: err } = await stripe.confirmCardPayment(data?.client_secret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: paymentObject?.email || "anonymus"
                }
            }

        })


        if (err) {
            Swal.fire({
                title: "Error",
                text: err.message,
                icon: "error"
            });
        }

        if (paymentIntent.status === "succeeded") {
            Swal.fire({
                title: "Success",
                text: "successfully paid",
                icon: "success"
            });
        }

        setPaymentLoading(false)
    }

    return (
        <div className="cardPaymentContainer">
            <h1>Make your payment for ${price}</h1>
            <form onSubmit={(e) => handlePay(e)} className="finalPaymentBox">

                <div className="couponAply">
                    <input readOnly={isCouponUsed ? true : false} type="text" name="coupon" ref={couponRef} placeholder="COUPON CODE" className="couponFeild" />
                    <div onClick={hanldeCouponCheck} className={isCouponUsed ? "aplyBtn used" : "aplyBtn"}>aply</div>
                </div>
                <div className="cardBox">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <button type="submit" disabled={paymentLoading ? true : false}>
                    {
                        paymentLoading ?
                            <TbFidgetSpinner className="spinner"></TbFidgetSpinner>
                            :

                            "Pay"
                    }



                </button>
            </form>

        </div>
    );
};

export default CheckoutForm;