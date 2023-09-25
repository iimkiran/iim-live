
import { memo } from "react";
import uc from "../../Assets/uc2-removebg-preview.png"
import "./style.css"
const HeaderComponent = () => {
    return <>
        <div className="header-container">
            <div className="header-child1">
                <div className="company-container">
                    <h2>
                        India Insurance Mart
                    </h2>
                    <p>Best place to find the <span className="plan">Smart</span> policy</p>
                </div>
                <div className="message-container">
                    <span className="message">
                        Website is Under Development,
                    </span>
                    <span className="message">We will be back soon...</span>
                </div>
            </div>
            <div className="header-child2">
                <img src={uc} alt="uc-logo" className="uc-image" />
            </div>
        </div>
    </>
}

export default memo(HeaderComponent);