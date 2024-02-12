import "./BuildingLocation.css";
import HeadTitle from "../../Shared/HeadTitle/HeadTitle";

const BuildingLocation = () => {
    return (
        <div className="locationCon">

            <HeadTitle mainTitle={"LOCATION"}></HeadTitle>

            <div className="locationBox">


                {/* <div className="mapBox">
                        <a href="https://www.google.com/maps/place/Gulshan+Centre+Point,+Dhaka+1212/@23.7957357,90.4123732,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c7a654a23c8b:0xc4d611a3d262100d!8m2!3d23.7957308!4d90.4149481!16s%2Fg%2F12hk2gzw3?entry=ttu" target="_blank" rel="noreferrer">


                            <img className="mapImg" src="https://i.ibb.co/v3KRFDC/location.jpg" alt="" />

                        </a>
                    </div> */}

                <div className="mapBox">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.070464888674!2d90.40906107631453!3d23.744866500000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b889fc0d23c5%3A0x47800f528041da6f!2sCENTER%20POINT%20SHOPPING%20MALL!5e0!3m2!1sen!2sbd!4v1707746958022!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="locationInfo">
                    <h1>Location</h1>
                    <p>Gulshan Centre Point, Dhaka 1212</p>
                    <p style={{ margin: "25px 0 25px 0" }}>Center Point, graces the heart of Dhaka at Gulshan Centre Point (1212). Rising 300 feet with 1000 apartments within its 92,860 sqm expanse</p>

                    <a className="mapBtn" href="https://www.google.com/maps/place/Gulshan+Centre+Point,+Dhaka+1212/@23.7957357,90.4123732,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c7a654a23c8b:0xc4d611a3d262100d!8m2!3d23.7957308!4d90.4149481!16s%2Fg%2F12hk2gzw3?entry=ttu" target="_blank" rel="noreferrer">OPEN MAP</a>

                </div>
            </div >

        </div >
    );
};

export default BuildingLocation;