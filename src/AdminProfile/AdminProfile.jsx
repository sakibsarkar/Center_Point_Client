import "./AdminProfile.css";
import React, { useContext } from "react";
import UseAxios from "../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { FaUsersLine } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { getItemFromLS } from "../LocalStorage/localStorage";

const AdminProfile = () => {
    const { user, role } = useContext(Authcontext)
    const axios = UseAxios()
    const token = getItemFromLS()
    const { data, isLoading } = useQuery({
        queryKey: ["dashBoardData"],
        queryFn: async () => {
            const { data: result } = await axios.get(`/dashboard/data?token=${token}&&role=${role}`)
            return result
        }
    })


    console.log(data);
    return (
        <div>

            <div className="adminProfileTop">


                <div className="adminCard">
                    <div className="adminImgBox">
                        <img src={user.photoURL} alt="" />
                    </div>

                    <h1 className="adminName">{user?.displayName}</h1>
                    <h1 className="adminEmail">{user?.email}</h1>
                    <div className="shape" id="adminShape"></div>
                </div>

                <div className="bookedRoom dashCard">
                    <h1><FaUsersLine></FaUsersLine>Booked(%)</h1>
                    <p>{((data?.totalBooked / data?.total) * 100).toFixed(2)}%</p>
                </div>
                <div className="roomAvailable dashCard">
                    <h1><FaHouseChimney></FaHouseChimney>Available (%)</h1>
                    <p>{(((data?.total - data?.totalBooked) / data?.total) * 100).toFixed(2)} %</p>
                </div>


            </div>


            <div className="adminProfileMid">


                <div className="circle totalUser">
                    <p>Users</p>
                    <h1>{data?.totalUser}</h1>

                </div>

                <div className="circle totalMember">
                    <p>Members</p>
                    <h1>{data?.totalMember}</h1>

                </div>
                <div className="circle totalRoom">
                    <p>Room</p>
                    <h1>{data?.total}</h1>

                </div>


            </div>

        </div>
    );
};

export default AdminProfile;