import React, {Component, Fragment} from 'react';

import BannerSection from "./BannerSection";
import ParagraphContainer from "../CommonComponent/ParagraphContainer";
import IntentionCard from "./IntentionCard";
import TeamMemberCard from "./TeamMemberCard";

import packitUpAbout1 from "../../assets/images/About/PackitUp_about1.jpg";
import packitUpVision from "../../assets/images/About/PackitUp_vision.jpg";
import packitUpWork from "../../assets/images/About/PackitUp_work.jpg";
import packitUpCities from "../../assets/images/About/PackitUp_cities.jpg";
import packitUpPeace from "../../assets/images/About/PackitUp_peace.jpg";
import packitUpMission from "../../assets/images/About/PackitUp_mission.jpg";
import jakubImg from "../../assets/images/About/TeamAvatar/jakub.jpg"
import rahimImg from "../../assets/images/About/TeamAvatar/rahim.jpg"
import aashishImg from "../../assets/images/About/TeamAvatar/aashish.jpg"
import harryImg from "../../assets/images/About/TeamAvatar/harry.jpg"
import katerinaImg from "../../assets/images/About/TeamAvatar/katerina.jpg"
import iraImg from "../../assets/images/About/TeamAvatar/ira.jpg"
import renskeImg from "../../assets/images/About/TeamAvatar/renske.jpg"
import maxImg from "../../assets/images/About/TeamAvatar/max.jpg"

class Index extends Component {
    render() {
        return (
            <Fragment>
                <BannerSection/>
                {/*What is PackitUp*/}
                <div className="container-fluid voffset9 boffset9">
                    <div className="row position-relative">
                        <div className="col-md-6 pl-0 pr-0 col-sm-12">
                            <ParagraphContainer cmnWidth={`475px`} backgroundColor={'#ECFBFD'}
                                                borderRadius={'0 40px 40px 0'} width={'135%'}
                                                paragraphHeader={[`What is PackitUp?`]}
                                                pargraph={[`PackitUp is a social network for travelers. With our app you find travel buddies and awesome trips around the world. And how do you do this? By getting in touch with each other through creating trips on a map.`,
                                                    <br/>, <br/>,
                                                    <br/>, `What's this for then? We want all of you to be able to find awesome people and go on great trips to cool places. Is it only for travelers? You can find someone for a trip around the world or for just a walk in a park around the corner. There are no boundaries!`]}/>
                        </div>
                        <div className="col-md-6 pl-0 pr-0 col-sm-12 overlay align-self-end">
                            <img className="imgBorderRadiusLeft img-fluid" style={{marginTop: '18em'}}
                                 src={packitUpAbout1} alt={"packitUpAbout1 one"}/>
                        </div>
                    </div>
                </div>

                {/*Vision and Mission section*/}
                <div className="container-fluid voffset9 boffset9" style={{backgroundColor: '#EEFBF6'}}>
                    <IntentionCard img={packitUpVision} header={'Vision'}
                                   content={'Enable every traveler anywhere in the world to find a buddy to travel with to every destination imaginable.'}/>
                    <IntentionCard img={packitUpMission} header={'Mission'}
                                   content={'Create a network that helps travelers connect with each other and get the absolute most out of their travel experiences.'}/>
                </div>

                {/*PackitUp supporting Section start here*/}
                <div className="container-fluid voffset9" style={{backgroundColor: '#EEFBF6'}}>
                    <div className="row pt-5 pb-5">
                        <div className="col-md-6 col-sm-12 align-self-center d-flex justify-content-center">
                            <ParagraphContainer
                                padding={`0`}
                                margin={'15px 49px'}
                                paragraphHeader={`PackitUp is committed to supporting a more sustainable and peaceful society.`}
                                pargraph={`The PackitUp founders, team and supporters are backing the Sustainable Development Goals as set out by the United Nations. We thoroughly believe that it is each and everyone's responsibility to do their part in providing a sustainable and peaceful environment for others, for ourselves and for future generations. The PackitUp team has selected 3 of the United Nations SDGs and integrated them into the company's strategy, goals and day-to-day operations. We don't want to just say it, we want to contribute and let actions speak for our committment.`}
                            />
                        </div>
                        <div className="sdgRight"/>
                    </div>
                </div>
                <div className="container-fluid boffset9" style={{backgroundColor: '#EEFBF6'}}>
                    <IntentionCard
                        img={packitUpWork}
                        header={'Sustainable Development Goal 8: Decent Work and Economic Growth'}
                        content={'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.'}/>
                    <IntentionCard
                        img={packitUpCities}
                        header={'Sustainable Development Goal 11: Sustainable Cities and Communities'}
                        content={'Make cities and human settlements inclusive, safe, resilient and sustainable.'}/>
                    <IntentionCard
                        img={packitUpPeace}
                        header={'Sustainable Development Goal 11: Sustainable Cities and Communities'}
                        content={'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.'}/>
                </div>

                {/*Team section*/}
                <div className="container">
                    <h1 className="teamHeader">TEAM </h1>
                    {/*Development Team*/}
                    <div className="boffset9">
                        <h1 className="teamHeader">Development</h1>
                        <div className="row">
                            <TeamMemberCard avatartImg={jakubImg} name={'Jakub'} designation={'CTO'}/>
                            <TeamMemberCard avatartImg={rahimImg} name={'Rahim'} designation={'Front End Development'}/>
                            <TeamMemberCard avatartImg={aashishImg} name={'Aashish'} designation={'Front End Development'}/>
                            <TeamMemberCard avatartImg={harryImg} name={'Harry'} designation={'Front End Development'}/>
                            <TeamMemberCard avatartImg={katerinaImg} name={'Katerina'} designation={'Design'}/>
                        </div>
                    </div>
                    {/*Marketing team*/}
                    <div className="boffset9">
                        <h1 className="teamHeader">Marketing</h1>
                        <div className="row">
                            <TeamMemberCard avatartImg={iraImg} name={'Ira'} designation={'CMO'}/>
                            <TeamMemberCard avatartImg={renskeImg} name={'Renske'} designation={'Sales & Marketing'}/>
                        </div>
                    </div>
                    {/*Operations team*/}
                    <div className="boffset9">
                        <h1 className="teamHeader">Operations</h1>
                        <div className="row">
                            <TeamMemberCard avatartImg={maxImg} name={'Max'} designation={'CEO'}/>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Index;