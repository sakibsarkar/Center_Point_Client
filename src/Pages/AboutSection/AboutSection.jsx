import "./AboutSection.css";
import HeadTitle from "../../Shared/HeadTitle/HeadTitle";
import { GoDotFill } from "react-icons/go";
import { Parallax } from "react-parallax";

const AboutSection = () => {

    return (
        <div className="aboutCon">
            <HeadTitle mainTitle={"ABUT THE BUILDING"}></HeadTitle>






            <Parallax bgImage="https://www.united.com.bd/wp-content/uploads/2021/11/GCP.jpeg" strength={500}>
                <div className="aboutBanner ">
                    <h1>Center Point</h1>
                    <p>Precision design with eye-catching aesthetics. A postmodern masterpiece. Located at the heart of Gulshan 2, within easy reach of the diplomatic zones of Gulshan and Baridhara.</p>
                </div>
            </Parallax>




            <div className="aboutContent">


                <div className="buildingImg">
                    <img className="buildingBg" src="https://i.ibb.co/bWgj8zr/ananta-plaza-central-2-of-17-overlay-2.jpg" alt="" />

                    <img className="overflowImg" src="https://i.ibb.co/7Yg6d2p/GCP-16.jpg" alt="" />
                </div>


                <div className="buildingInfo">
                    <h1>Center Point</h1>
                    <p>Precision design with eye-catching aesthetics. A postmodern masterpiece. Located at the heart of Gulshan 2, within easy reach of the diplomatic zones of Gulshan and Baridhara.</p>

                    <div className="bulletPoints">
                        <div className="points">
                            <h3><GoDotFill />IDEA</h3>
                            <p>The attempt was to create a large built area that resonates with urban life SELECTED PROJECTS & transitions through people. The interlocking forms create a harmonious drama that imparts a sense of visual treat</p>
                        </div>
                        <div className="points">
                            <h3><GoDotFill />PROJECT</h3>
                            <p>The project adopts a large area over the roof level of the podium creating an urban courtyard with an idea of creating recreational rendezvous. The large exterior space is intended to merge with the interior spaces of the towers in order to employ a vibrant public realm</p>
                        </div>
                        <div className="points">
                            <h3><GoDotFill />Deatils</h3>
                            <p> In 2021, ABC Builders, led by architect Nazmul Islam Sakib, unveiled a modern marvel named "Center Point." This 92,860 square meter structure seamlessly blends Sakib's innovative design with ABC Builders' precision</p>
                        </div>
                        <div className="points">
                            <h3><GoDotFill />EXTERIOR</h3>
                            <p>"Center Point," the 2021 creation of ABC Builders and architect Nazmul Islam Sakib, stands at an impressive 300 feet, showcasing an exterior that seamlessly blends innovation and aesthetics. This 92,860 sqm masterpiece, housing 1000 apartments</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutSection;