import React, {Component, Fragment} from 'react';
import BannerSectionForBusiness from "./BannerSectionForBusiness";
import ParagraphContainer from "../CommonComponent/ParagraphContainer";
import PackitUpIntro2 from "../../assets/images/ForBusiness/PackitUp_intro2.jpg";
import PackitUpLocation from "../../assets/images/ForBusiness/PackitUp_location.jpg";
import PackitUpTiming from "../../assets/images/ForBusiness/PackitUp_timing.jpg";
import IntroCard from "./IntroCard";
import CmnBtnForBusiness from "./CmnBtnForBusiness";
import JoinPackitUpCard from "./JoinPackitUpCard";
import img1 from "../../assets/images/ForBusiness/PackitUp_business1.png";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <BannerSectionForBusiness/>

                <div className="container-fluid">
                    <div className="row justify-content-around">

                        {/*Header*/}
                        <div className="col-md-11 col-sm-12">
                            <ParagraphContainer
                                classes={`text-center`}
                                paragraphHeader={`Get your business on PackitUp`}
                                pargraph={`Reach our user group with your business, have your permanent marker with all the required information on our PackitUp map.`}
                            />
                        </div>

                        {/*Intro Section*/}
                        <div className="col-md-11 col-sm-12">
                            <div className="col-md-11 col-sm-12 ml-auto mr-auto"
                                 style={{backgroundColor: '#ECFBFD', borderRadius: '30px'}}>
                                <div className="row pt-5">
                                    <IntroCard
                                        introImg={PackitUpIntro2}
                                        introHeading={`Advertise to students, travelers and internationals`}
                                        introContent={`Reach our highly targeted uer group and engage with people who are looking for travel and leisure activities.`}
                                    />
                                    <IntroCard
                                        introImg={PackitUpLocation}
                                        introHeading={`Easy location targeting`}
                                        introContent={`Reach your target customer right where your business is located.`}
                                    />
                                    <IntroCard
                                        introImg={PackitUpTiming}
                                        introHeading={`The perfect timing`}
                                        introContent={`Promote your business to current and active users, all year round.`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <ParagraphContainer classes={`text-center`} paragraphHeader={`Join the PackitUp Family`}/>
                    <div className="row justify-content-center">

                        <div className="col-md-4 col-sm-12 mr-4">
                            <JoinPackitUpCard
                                header={`BASIC`}
                                listItm={[`Custom Business Marker`, `Direct traffic to your business`, `Offer discounts and promotions`, `Traffic, clicks and views report`]}
                                btnText={`Get business BASIC`}
                            />
                        </div>

                        <div className="col-md-4 col-sm-12 ml-4">
                            <JoinPackitUpCard
                                header={`PRO`}
                                listItm={[`BASIC features plus:`, `Additional profile features`, `Reviews and review answers`, `Strategic ad placements in the app`]}
                                btnText={`Get business PRO`}
                            />

                        </div>
                    </div>
                </div>

                <div className="container-fluid voffset9">
                    <div className="row mt-5 mb-5 justify-content-center ml-5 mr-5"
                         style={{
                             backgroundColor: '#EEFBF6',
                             borderRadius: '2em',
                             paddingTop: '14em',
                             paddingBottom: '14em'
                         }}>
                        <div className="col-md-3 align-self-center text-center">
                            <img style={{height: '60vh'}} src={img1} alt="img1"/>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <ParagraphContainer
                                paragraphHeader={`Join PackitUp Business`}
                                pargraph={`Your own custom business marker on the map.`}
                            />
                        </div>
                    </div>
                </div>

                <div className="container-fluid voffset9 boffset9">
                    <div className="d-flex justify-content-center">
                        <div>
                            <ParagraphContainer
                                cmnWidth={`634px`}
                                classes={`text-center`}
                                paragraphHeader={`Help our users get the most out of their travels!`}
                                pargraph={`Do you want to reach travelers around the world? Are you looking for new customers and want to strategically advertise your business?`}
                            />
                            <div className="d-flex justify-content-center">
                                <CmnBtnForBusiness title={`hoverGrow`} content={`Then join here!`} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;