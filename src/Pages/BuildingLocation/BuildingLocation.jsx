import "./BuildingLocation.css";
import HeadTitle from "../../Shared/HeadTitle/HeadTitle";
import Tilt from "react-parallax-tilt";

const BuildingLocation = () => {
    return (
        <div className="locationCon">

            <HeadTitle mainTitle={"LOCATION"}></HeadTitle>

            <div className="locationBox">

                <Tilt>
                    <div className="mapBox">
                        <a href="https://www.google.com/maps/place/Gulshan+Centre+Point,+Dhaka+1212/@23.7957357,90.4123732,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c7a654a23c8b:0xc4d611a3d262100d!8m2!3d23.7957308!4d90.4149481!16s%2Fg%2F12hk2gzw3?entry=ttu" target="_blank" rel="noreferrer">


                            <img className="mapImg" src="https://i.ibb.co/v3KRFDC/location.jpg" alt="" />

                        </a>
                    </div>
                </Tilt>

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