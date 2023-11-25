import "./ManageMembers.css";
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
  const { data = [{}] } = useQuery({
    queryKey: ["agreementsReq"],
    queryFn: async () => {
      const { data: result } = await axios.get(`/all/members?token=${token}&&role=${role}`)
      return result

    }
  })

  // _id,email,role,create,timestamp,name,apartment


  const handleDeleteMember = async (aptId) => {

    try {
      await axios.put(`/member/delete?role=${role}&&token=${token}&&email=${data.email}`)
    }

    catch (err) {
      console.log(err);
    }


  }



  return (
    <div className="manageMemberCon">

      <table>
        <thead>
          <tr>
            <th>Sl.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={index % 2 == 0 ? "normalBg" : "colorBg"}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="deleteCell" onClick={() => handleDeleteMember(user?.apartment, user?.email)}><MdDelete />Delete</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >
  );
};

export default ManageMembers;