import "./MakeAnnouncement.css";
import Swal from "sweetalert2";
import UseAxios from "../../Axios/UseAxios";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const MakeAnnouncement = () => {

    const axios = UseAxios()
    const token = getItemFromLS()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        console.log(title, description);

        const date = new Date()
        const day = date.getUTCDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const today = `${day}/${month}/${year}`

        // makeAnnouncement

        try {
            await axios.post(`/makeAnnouncement?token=${token}`, { title, description, date: today })
            Swal.fire({
                title: "Successful!",
                text: "Succecfully announcement added",
                icon: "success"
            });

            form.reset()
        }

        catch (err) {
            Swal.fire({
                title: "oops!",
                text: "Something wrong",
                icon: "error"
            });

            console.log(err);
        }
    }

    return (
        <div className="announceMentCon">



            <form onSubmit={(e) => handleSubmit(e)}>

                <input required type="text" placeholder="Announcement title" name="title" />
                <textarea required type="text" spellCheck={false} placeholder="Description" name="description" />
                <button type="submit">Submit</button>
            </form>

            <div className="anccImg">
                <img src="https://i.ibb.co/DfrnxJq/a-salesperson-holds-a-megaphone-in-hand-and-announces-a-promotional-sale-to-invite-customers-to-buy.jpg" alt="" />
            </div>


        </div>
    );
};

export default MakeAnnouncement;