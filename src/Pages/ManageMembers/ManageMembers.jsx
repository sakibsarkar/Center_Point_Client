import "./ManageMembers.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const ManageMembers = () => {
  const { role } = useContext(Authcontext)
  const axios = UseAxios()
  const token = getItemFromLS()
  const { data = [{}], refetch } = useQuery({
    queryKey: ["agreementsReq"],
    queryFn: async () => {
      const { data: result } = await axios.get(`/all/members?token=${token}&&role=${role}`)
      return result

    }
  })

  // _id,email,role,create,timestamp,name,apartment


  const handleDeleteMember = async (aptId, email) => {

    try {
      await axios.put(`/member/delete?aptId=${aptId}&&token=${token}&&email=${email}`)
      refetch()
      Swal.fire({
        title: "Successful!",
        text: "Succecfully removed from member role",
        icon: "success"
      });

    }

    catch (err) {
      console.log(err);
    }


  }


  console.log(data);


  return (
    <>

      {
        data?.length > 0 ?
          <div className="manageMemberCon">

            <table>
              <thead>
                <tr>
                  <th className="slBlock">Sl.</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((user, index) => (
                  <tr key={index} className={index % 2 == 0 ? "normalBg" : "colorBg"}>
                    <td className="slBlock">{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="deleteCell" onClick={() => handleDeleteMember(user?.apartment, user?.email)}><MdDelete />Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div >
          :
          <div className="noMember">
            <img src="https://i.ibb.co/VSpbWyL/Getty-Images-1265041897.webp" alt="" />
            <h1>No member available</h1>
          </div>
      }

    </>
  );
};

export default ManageMembers;