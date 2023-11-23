import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
    return (
        <div>

            <Carousel autoPlay={true} interval={2500} infiniteLoop={true}>

                <div>
                    <img className="BannerImg" src="https://i.ibb.co/VgHM34P/GCP.jpg" alt="" />
                    <div className="bannerContent">
                        <div className="title">
                            <h1>The Dream Apartment</h1>
                            <h1 className="cp">Center Point</h1>
                            <p>Elevate your lifestyle and experience unparalleled sophistication in every detail. From sleek modern designs to timeless classics, our structures redefine luxury living. Explore a world where innovation meets aesthetics, and craftsmanship transforms spaces.</p>
                            <button>Appertment</button>
                        </div>
                    </div>
                </div>

                <div className="bannerSlide">
                    <img className="BannerImg" src="https://i.ibb.co/pLmD3Gb/centrepoint-united-group-dhaka-shopping-mall-6.jpg" alt="" />

                    <div className="bannerContent">
                        <div className="title">
                            <h1>A World of Elegance</h1>
                            <h1 className="cp">A Symphony of Style</h1>
                            <p>Immerse yourself in a symphony of style and substance where every detail is a testament to our commitment to excellence. At our core, we believe in creating environments that inspire, captivate, and elevate</p>
                            <button>Lets Book</button>
                        </div>
                    </div>
                </div>


                <div>
                    <img className="BannerImg" src="https://i.ibb.co/Qm36nDG/2021-07-07-1-1024x576.png" alt="" />
                    <div className="bannerContent">
                        <div className="title">
                            <h1>A peice of Heaven</h1>
                            <h1 className="cp">In Gulshan</h1>
                            <p>At our core, we believe in creating environments that inspire, captivate, and elevate. Explore the beauty of our spaces and embark on a journey where dreams take architectural form. Welcome to a realm of distinction, where craftsmanship meets innovation, and living is an art form</p>
                            <button>Lets Book</button>
                        </div>
                    </div>
                </div>
            </Carousel>


        </div>
    );
};

export default Banner;

