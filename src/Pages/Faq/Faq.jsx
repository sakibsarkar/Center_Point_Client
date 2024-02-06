import "./FAQ.css";
import FaqBox from "../../Cards/FaqBox/FaqBox";
import { useEffect, useState } from "react";

const Faq = () => {
    const [faq, setFaq] = useState([])
    const [shouldOpen, setShouldOpen] = useState(0)

    useEffect(() => {
        fetch("faq.json")
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])
    return (
        <div className="FAQ">

            <div className="faqHeading">
                <h1>FAQ</h1>
                <p>Frequently Asked <span className="text-[#fd5daa]">Questions</span></p>
            </div>


            <div className="holder">
                <div className="faqs">
                    {
                        faq?.map((item, index) => <FaqBox
                            key={index}
                            index={index}
                            shouldOpen={shouldOpen}
                            setShouldOpen={setShouldOpen}
                            faqData={item}

                        />)
                    }
                </div>

                <img src="https://i.ibb.co/q7VnLqH/faqs-concept-illustration-114360-5245.jpg" className="faqImg" />
            </div>


        </div>
    );
};

export default Faq;