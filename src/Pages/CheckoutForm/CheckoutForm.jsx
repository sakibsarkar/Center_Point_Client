import "./CheckoutForm.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const CheckoutForm = () => {

    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()
    const axios = UseAxios()
    const { paymentObject } = useContext(Authcontext)


    if (Object.keys(paymentObject).length === 0) {
        navigate("/dashboard/makePayment")
        return
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
            console.log(error);
            return
        }

        const { data } = await axios.post("/paymentIntent", { price: paymentObject.rent })
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
    }

    return (
        <div>
            <form onSubmit={(e) => handlePay(e)}>
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
                <button>Pay</button>
            </form>

        </div>
    );
};

export default CheckoutForm;