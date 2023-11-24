import "./Announcements.css";
import AnnouncementCard from "../../Cards/AnnouncementCard/AnnouncementCard";
import UseAxios from "../../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { getItemFromLS } from "../../LocalStorage/localStorage";

const Announcements = () => {
    const axios = UseAxios()
    const token = getItemFromLS()

    const { data } = useQuery({
        queryKey: ["announcement"],
        queryFn: async () => {
            const { data: result } = await axios.get(`/announcements?token=${token}`)
            return result.reverse()
        }
    })
    console.log(data);
    return (
        <div className="announcementCon">
            <div className="announcementCardCon">
                {
                    data?.reverse().map(ann => <AnnouncementCard key={ann._id} data={ann}></AnnouncementCard>)
                }
            </div>
        </div>
    );
};

export default Announcements;
