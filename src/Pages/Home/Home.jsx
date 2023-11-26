import "./Home.css";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import BuildingLocation from "../BuildingLocation/BuildingLocation";
import DisplayCoupon from "../DisplayCoupon/DisplayCoupon";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <BuildingLocation></BuildingLocation>
            <DisplayCoupon></DisplayCoupon>
        </>
    );
};

export default Home;