import "./AnnouncementCard.css";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";

const AnnouncementCard = ({ data }) => {
    const { _id, title, description, date } = data
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


    return (
        <div className="anncWrapper">
            <div className="anncCard" onClick={handleOpen}>
                <div className="bellIcon">
                    <HiOutlineBellAlert />
                </div>
                <h1>{title}</h1>

                {
                    description?.length > 55 ?
                        <p>${description.slice(0, 56)} <span className="seemore">...see more</span></p> :
                        <p>{description}</p>
                }

                <p>{date}</p>
            </div>

            <div className="anncModal">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                {title}
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                {description}
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>

        </div>
    );
};

export default AnnouncementCard;