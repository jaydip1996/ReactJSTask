import React, {Component} from 'react';
import Paragraph from "../CommonComponent/Paragraph";

class BannerSection extends Component {
    render() {
        return (
            <div className="aboutBannerImg" style={{paddingTop: '6em'}}>
                <div className="col-7 aboutBannerContainer">
                    <h1 className="aboutBannerContainerTitle">About PackitUp</h1>
                    <p className="aboutBannerContainerSubTitle">Making life better for travelers</p>
                    <Paragraph content={`Our vision, mission and team`} />
                </div>
            </div>
        );
    }
}

export default BannerSection;