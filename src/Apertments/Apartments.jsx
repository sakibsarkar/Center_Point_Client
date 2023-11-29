import "./Apartments.css";
import ApartmentCard from "../Cards/Apertments/ApartmentCard";
import Loader from "../Loader/Loader";
import UseAxios from "../Axios/UseAxios";
import { Pagination, Stack } from "@mui/material";
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



    // v1 pagination func
    const handleChangePage = (pageNum) => {
        setPage(pageNum)
        window.scroll(0, 0)


    }

    // v2 pagination func (material ui pagination)
    const handleCurrentPage = (event, value) => {
        setPage(value - 1)
        console.log(value);
        // window.scroll(0, 0)
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





                    </div >
            }

            <div className="paginationBtns">

                {/* v1 pagination */}

                {/* {
                                Array(data[1] ? data[1] / 6 : 1).fill(0)?.map((num, index) => <button
                                    key={index}
                                    onClick={() => handleChangePage(index)}
                                    className={page == index ? "pageActive" : "pageNotActive"}
                                >{index + 1}</button>)
                            } */}

                {/* v2 pagination */}

                <Stack spacing={2}>
                    <Pagination count={data[1] ? data[1] / 6 : 0} onChange={handleCurrentPage} variant="outlined" shape="rounded" showFirstButton showLastButton />

                </Stack>
            </div>

        </>
    );
};

export default Apartments;