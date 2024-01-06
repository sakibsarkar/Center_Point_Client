import "./PaymentHistory.css";
import PaymentHistoryTable from "../../PaymentHistoryTable/PaymentHistoryTable";
import React, { useContext, useRef, useState } from "react";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineSearch } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const PaymentHistory = () => {

    const [searchValue, setSearchValue] = useState("")
    const token = getItemFromLS()
    const axios = UseAxios()
    const { user } = useContext(Authcontext)

    const paymentHistoryRef = useRef(null)

    const { data } = useQuery({
        queryKey: ["myHistory"],
        queryFn: async () => {
            const { data: result } = await axios.get(`/member/payments?email=${user?.email}&&token=${token}`)
            return result
        }
    })

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase()
        setSearchValue(value)
    }


    const print = useReactToPrint({
        content: () => paymentHistoryRef.current,
    })

    return (
        <div>
            <div className="historyCon" ref={paymentHistoryRef}>

                <div className="tableContainer">
                    <div className="searchCon">
                        <input type="text" className="searchpayment" onKeyUp={handleSearch} name="search" placeholder='Search  Jan/Feb ...' />
                        <MdOutlineSearch />
                    </div>



                    <table className="historyTable">

                        <thead>
                            <tr>
                                <th>Sl.</th>
                                <th className="paymentEmail">Email</th>
                                <th>Month</th>
                                <th>Amount</th>
                                <th>Transaction ID</th>
                            </tr>
                        </thead>

                        {
                            data?.map((history, index) => <PaymentHistoryTable key={history._id} searchValue={searchValue} history={history} index={index}></PaymentHistoryTable>)
                        }
                    </table>

                    <button onClick={print} className="printBtn">Print</button>


                </div>


            </div>
        </div>
    );
};

export default PaymentHistory;