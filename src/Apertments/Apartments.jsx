import "./Apartments.css";
import ApartmentCard from "../Cards/Apertments/ApartmentCard";
import Loader from "../Loader/Loader";
import UseAxios from "../Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getItemFromLS } from "../LocalStorage/localStorage";

const Apartments = () => {

    const axios = UseAxios()
    const token = getItemFromLS()

    const [page, setPage] = useState(0)
    const { data = [], isLoading } = useQuery({
        queryKey: ["allApartments", { page }],
        queryFn: async () => {
            const { data } = await axios.get(`/apartments?page=${page}`)
            return data
        }
    })


    const handleChangePage = (pageNum) => {
        setPage(pageNum)
        window.scroll(0, 0)


    }

    return (
        <>
            {
                isLoading ?
                    <Loader />

                    :


                    <div className="apartmentsCon">


                        <div className="apartmentsCards">
                            {data[0]?.map(data => <ApartmentCard key={data._id} data={data}></ApartmentCard>)}
                        </div>


                        <div className="paginationBtns">
                            {
                                Array(data[1] ? data[1] / 6 : 1).fill(0)?.map((num, index) => <button
                                    key={index}
                                    onClick={() => handleChangePage(index)}
                                    className={page == index ? "pageActive" : "pageNotActive"}
                                >{index + 1}</button>)
                            }
                        </div>


                    </div >
            }

        </>
    );
};

export default Apartments;