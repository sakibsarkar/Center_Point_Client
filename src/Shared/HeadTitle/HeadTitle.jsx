import "./HeadTitle.css";

const HeadTitle = ({ mainTitle, subTitle = "Center Point" }) => {
    return (
        <div className="headingCon">
            <h1>{mainTitle}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

export default HeadTitle;