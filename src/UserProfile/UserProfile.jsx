import "./UserProfile.css";
import React, { useContext, useState } from "react";
import UseAxios from "../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { getItemFromLS, removeItemFromLS } from "../LocalStorage/localStorage";

const UserProfile = ({ data }) => {
    const { user, logOut } = useContext(Authcontext)


    const axios = UseAxios()
    const token = getItemFromLS()
    const { data: userInfo, isLoading } = useQuery({
        queryKey: ["useData"],
        queryFn: async () => {
            const { data: result } = await axios.get(`/user?token=${token}&&email=${user?.email ? user?.email : user?.displayName}`)
            return result
        }
    }
    )

    const date = new Date(userInfo?.create ? userInfo.create : 0)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()

    const handleLogout = async () => {

        logOut()
        removeItemFromLS()

    }

    return (
        <div className="profileContainer">

            <div className="profileCard">
                <div className="shape">

                </div>
                <div className="profileTop">
                    <div className="profileImgWrapper">
                        <div className="profileImgBox">
                            <img src={user.photoURL} alt="" />
                        </div>
                    </div>

                    <div className="profileInfo">
                        <h1>{user?.displayName}</h1>
                        <p><span>email : </span>{user?.email}</p>
                        <p><span>user since : </span>{day}/{month}/{year}</p>
                    </div>
                </div>


                <div className="profileBottom">
                    <div className="myApartmentInfo">
                        <div>
                            <p>Agreement accept date : {data?.accepted ? data.accepted : "none"}</p>
                        </div>
                        <div>
                            <p>floor : {data?.floor ? data.floor : "none"}</p>
                        </div>
                        <div>
                            <p>block : {data?.block ? data.block : "none"}</p>
                        </div>
                        <div>
                            <p>Room : {data?.room ? data.room : "none"}</p>
                        </div>
                    </div>

                    <div className="accountActivity">
                        <button className="profileLogout" onClick={() => handleLogout()}>Log out</button>
                        <button className="updateProfile">Upate Profile</button>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default UserProfile;