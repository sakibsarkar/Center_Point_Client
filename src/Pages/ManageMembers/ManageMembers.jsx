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
      const { data: result } = await axios.get(`/agreementReq?token=${token}&&role=${role}`)
      return result

    }
  })

  // _id,userName,userEmail,floor_no,block_name,apartment_no,rent,status


  return (
    <div className="manageMemberCon">
      <h1>aikhane shokol member der lish dekhano lagbe</h1>
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
              <td>{user.userName}</td>
              <td>{user.userEmail}</td>
              <td className="deleteCell"><MdDelete />Delete</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default ManageMembers;