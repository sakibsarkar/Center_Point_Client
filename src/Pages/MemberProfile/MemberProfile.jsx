import "./MemberProfile.css";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { getItemFromLS, removeItemFromLS } from "../../LocalStorage/localStorage";

const MemberProfile = () => {
    const { user, logOut } = useContext(Authcontext)


    const axios = UseAxios()
    const token = getItemFromLS()
    const { data: userInfo = [], isLoading } = useQuery({
        queryKey: ["useData"],
        queryFn: async () => {
            const { data: result } = await axios.get(`/member/data?token=${token}&&email=${user?.email ? user?.email : user?.displayName}`)
            const { data: aptData } = await axios.get(`/member/apartmentData?token=${token}&&id=${result?.apartment}`)
            return [result, aptData]
        }
    }
    )


    // _id, image, floor_no, block_name, apartment_no, rent, booked

    const date = new Date(userInfo[0]?.create ? userInfo[0].create : 0)
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
                            <p>Agreement accept date : {userInfo[0]?.agreementDate ? userInfo[0].agreementDate : "none"}</p>
                        </div>
                        <div>
                            <p>floor : {userInfo[1]?.floor_no ? userInfo[1].floor_no : "none"}</p>
                        </div>
                        <div>
                            <p>block : {userInfo[1]?.block_name ? userInfo[1].block_name : "none"}</p>
                        </div>
                        <div>
                            <p>Room : {userInfo[1]?.apartment_no ? userInfo[1].apartment_no : "none"}</p>
                        </div>
                    </div>

                    <div className="accountActivity">
                        <button className="profileLogout" onClick={() => handleLogout()}>Log out</button>
                        <button>Upate Profile</button>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default MemberProfile;