import "./Home.css";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import BuildingLocation from "../BuildingLocation/BuildingLocation";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <BuildingLocation></BuildingLocation>
        </>
    );
};

export default Home;