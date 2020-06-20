import React, {Component} from 'react';
import img1 from "../../assets/images/ForBusiness/PackitUp_business1.png"
import CmnBtnForBusiness from "./CmnBtnForBusiness";

class BannerSectionForBusiness extends Component {
    render() {
        return <div className="bannerForBusinessSection d-flex">
                <div className="col-md-4 align-self-center text-center">
                    <img style={{height:'55vh'}} src={img1} alt="img1"/>
                    <div>
                        <span className="dot" style={{backgroundColor:"#00B685"}} />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                </div>
                <div className="col-md-8 align-self-center">
                    <h1 className="bannerHeaderForBusiness">PackitUp for Business</h1>
                    <p className="bannerParagraphForBusiness">Reach exchange students and travelers around the world</p>
                    <CmnBtnForBusiness title={`hover`} content={`Get started for free`} />
                </div>
        </div>;
    }
}

export default BannerSectionForBusiness;