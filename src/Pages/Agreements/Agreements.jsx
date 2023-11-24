import "./Agreements.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const Agreements = () => {
    const { role } = useContext(Authcontext)
    const axios = UseAxios()
    const token = getItemFromLS()
    const { data = [{}], refetch, isLoading } = useQuery({
        queryKey: ["agreementsReq"],
        queryFn: async () => {
            const { data: result } = await axios.get(`/agreementReq?token=${token}&&role=${role}`)
            return result

        }
    })
    // _id,userName,userEmail,floor_no,block_name,apartment_no,rent,status
    const handlereject = async (id) => {


        try {
            axios.put(`/agreement/status?token=${token}&&id=${id}&&role=${role}`)
            refetch()
            Swal.fire({
                title: "Rejected!",
                text: "Agreement request has been rejected",
                icon: "success"
            });
        }

        catch (err) {
            console.log(err)
        }

    }

    const handleAccept = async (email, id, aptID) => {

        try {
            await axios.put(`/agreement/status?token=${token}&&id=${id}&&role=${role}`)
            await axios.put(`/user/role/update?token=${token}&&email=${email}&&role=${role}`)
            await axios.put(`/apartment/book?token=${token}&&id=${aptID}&&role=${role}`)
            refetch()
            Swal.fire({
                title: "Rejected!",
                text: "Agreement request has been rejected",
                icon: "success"
            });
        }
        catch (err) {
            console.log(err)
        }

    }


    return (
        <div className="agreementReqCon">
            {
                isLoading ?

                    ""
                    :

                    <table>
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>UserEmail</th>
                                <th>Floor</th>
                                <th>Block</th>
                                <th>Apartment No</th>
                                <th>Rent</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                data?.map((item, index) => <tr key={index} className={index % 2 == 0 ? "normalRow" : "colorRow"}>

                                    <td>{item.userName}</td>
                                    <td>{item.userEmail}</td>
                                    <td>{item.floor_no}</td>
                                    <td>{item.block_name}</td>
                                    <td>{item.apartment_no}</td>
                                    <td>{item.rent}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <button className="reject" onClick={() => handlereject(item._id)}>Reject</button>
                                        <button className="accecpt" onClick={() => handleAccept(item.userEmail, item._id, item.apartmentID)}>Accecpt</button>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
            }





        </div>
    );
};

export default Agreements;