import "./PaymentHistory.css";
import PaymentHistoryTable from "../../PaymentHistoryTable/PaymentHistoryTable";
import React, { useContext, useState } from "react";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineSearch } from "react-icons/md";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const PaymentHistory = () => {

    const [searchValue, setSearchValue] = useState("")
    const token = getItemFromLS()
    const axios = UseAxios()
    const { user } = useContext(Authcontext)

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
    return (
        <div>
            <div className="historyCon">

                <div className="tableContainer">
                    <div className="searchCon">
                        <input type="text" className="searchpayment" onKeyUp={handleSearch} name="search" placeholder='example  Jan/Feb ...' />
                        <MdOutlineSearch />
                    </div>



                    <table className="historyTable">

                        <thead>
                            <tr>
                                <th>Sl.</th>
                                <th>Email</th>
                                <th>Month</th>
                                <th>Amount</th>
                                <th>Transaction ID</th>
                            </tr>
                        </thead>

                        {
                            data?.map((history, index) => <PaymentHistoryTable key={history._id} searchValue={searchValue} history={history} index={index}></PaymentHistoryTable>)
                        }
                    </table>


                </div>


            </div>
        </div>
    );
};

export default PaymentHistory;