import React, {Component, Fragment} from 'react';
import ParagraphContainer from "../CommonComponent/ParagraphContainer";
import CmnBtnForBusiness from "../ForBusiness/CmnBtnForBusiness";

import packitUpOrganization1 from "../../assets/images/Partners/PackitUp_organisations.jpg";
import packitUpOrganization2 from "../../assets/images/Partners/PackitUp_organisations2.jpg";
import PackitUpPartners1 from "../../assets/images/Partners/HowItWorks/PackitUp_partners1.png";
import PackitUpPartners2 from "../../assets/images/Partners/HowItWorks/PackitUp_partners2.png";
import PackitUpPartners3 from "../../assets/images/Partners/HowItWorks/PackitUp_partners3.png";
import HowItWorkCrad from "./HowItWorkCrad";
class Index extends Component {
    render() {
        return (
            <Fragment>
                {/*Banner section*/}
                <div className="bannerPartnersSection">
                    <ParagraphContainer
                        paragraphHeader={`PackitUp for Organizations`}
                        pargraph={`Get a travel and network platform for your university, dorm or student organization, all for free!`}
                        classes={`text-center font-weight-bold`}
                    />
                    <div className="justify-content-center d-flex">
                        <CmnBtnForBusiness title={'hover'} content={"Contact us here!"}/>
                    </div>
                </div>

                {/*PackitUp community section*/}
                <div className="voffset4">
                    <ParagraphContainer
                        paragraphHeader={`Get PackitUp for your community for free`}
                        pargraph={`Get a travel and network platform for your university, dorm or student organization, all for free!`}
                        classes={`text-center`}
                    />
                </div>
                <div className="container-fluid voffset9 boffset9">
                    <div className="row position-relative justify-content-between pboffset9"
                         style={{backgroundColor: '#ECFBFD'}}>
                        <div className="col-md-8 pl-0 pr-0 col-sm-12 voffset7">
                            <div className="ml-auto mr-auto" style={{width: '795px'}}>
                                <h3 className="communitySubHeaders">
                                    Fun and Experiences
                                </h3>
                                <p className="communitySubContent">
                                    PackitUp helps exchange students, expats, internationals and locals to meet new
                                    people
                                    and discover places nearby or far away.
                                </p>
                            </div>
                            <div className="ml-auto mr-auto" style={{width: '795px'}}>
                                <h3 className="communitySubHeaders">
                                    Integration
                                </h3>
                                <p className="communitySubContent">
                                    We make it easier for people to integrate into their new or temporary environment
                                    and network with new people.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 pl-0 pr-0 col-sm-12">
                            <img className="imgRightFloatRounded img-fluid" style={{marginTop: '-5em'}}
                                 src={packitUpOrganization1} alt={"packitUpAbout1 one"}/>
                        </div>
                    </div>

                    <div className="row position-relative justify-content-between">
                        <div className="col-md-4 pl-0 pr-0 col-sm-12">
                            <img className="imgLeftFloatRounded img-fluid" style={{marginTop: '-5em'}}
                                 src={packitUpOrganization2} alt={"packitUpAbout1 one"}/>
                        </div>
                        <div className="col-md-8 pl-0 pr-0 col-sm-12 voffset7">
                            <div className="ml-auto mr-auto" style={{width: '795px'}}>
                                <h3 className="communitySubHeaders">
                                    Decentralization
                                </h3>
                                <p className="communitySubContent">
                                    Suffering from overtourism in certain areas? We can help distribute the hot spots
                                    more evenly and promote specific areas.
                                </p>
                            </div>
                            <div className="ml-auto mr-auto" style={{width: '795px'}}>
                                <h3 className="communitySubHeaders">
                                    Safety
                                </h3>
                                <p className="communitySubContent">
                                    It is a closed platform and only approved members can join. This ensures a high
                                    level of safety in travel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*How it works: section*/}
                <div className="mb-5">
                    <h3 className="communitySubHeaders">
                        How it works:
                    </h3>
                    <p className="communitySubContent">
                        PackitUp is FREE for communities and users.<br/>
                        Here is how your organisation can join the PackitUp family:
                    </p>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-around">
                        <HowItWorkCrad img={PackitUpPartners1} content={`Get in touch with us.`}/>
                        <HowItWorkCrad img={PackitUpPartners2} content={`We create the platform for you. You receive a link and a code for your members.`}/>
                        <HowItWorkCrad img={PackitUpPartners3} content={`You distribute the link and code. No additional work needed.`}/>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center mt-5 mb-5">
                    <CmnBtnForBusiness title={'hoverGrow'} content={`Get in touch!`}/>
                </div>
                <div className="howItWokrsSubBGImg" />
            </Fragment>
        );
    }
}

export default Index;