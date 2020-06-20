import React, {Component, Fragment} from 'react';
import RoundedBannerContainer from "../CommonComponent/RoundedBannerContainer";
import NavBar from "../CommonComponent/NavBar";
import ParagraphContainer from "../CommonComponent/ParagraphContainer";
import introImg1 from '../../assets/images/PackitUp_intro1.jpg';
import introImg2 from '../../assets/images/PackitUp_intro2.jpg';
import introImg3 from '../../assets/images/PackitUp_intro3.jpg';
import bgFooterImg from '../../assets/images/PackitUp_outro.jpg'
import mobImgMap from '../../assets/images/PackitUp_map.png';
import mobImgTrip from '../../assets/images/PackitUp_trip.png';
import mobImgUser from '../../assets/images/PackitUp_user.png';
import mobImgChat from '../../assets/images/PackitUp_chat.png';
import ParagraphHeader from "../CommonComponent/ParagraphHeader";
import Footer from "../CommonComponent/Footer";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                {/*1st section*/}
                <div className="bg-img container-fluid"><RoundedBannerContainer/></div>

                {/*2ed Section*/}
                <div className="container-fluid voffset9 boffset9">
                    <div className="row">
                        <div className="col-md-6 pl-0 pr-0 col-sm-12">
                            <ParagraphContainer
                                paragraphHeader={[`PackitUp is the new app for travellers around the world!`]}
                                pargraph={[`'Travel the world and meet up with like-minded people wherever you are. Find travel buddies anywhere and go on awesome trips to new destinations. Use PackitUp to travel better, safer and together.'`]}/>
                        </div>
                        <div className="col-md-6 pl-0 pr-0 col-sm-12">
                            <img className="imgBorderRadiusLeft img-fluid" src={introImg1} alt={"introImg one"}/>
                        </div>
                    </div>
                </div>

                {/*3rd section*/}
                <div className="container-fluid voffset9 boffset9">
                    <div className="row">
                        <div className="col-md-6 pl-0 pr-0 col-sm-12">
                            <div className="containerOverLapImg">
                                <div className="card-container-over-lap-img">
                                    <div className="cardOverLapImg">
                                        <img className="m-5" style={{height: "30em"}} src={mobImgMap}
                                             alt={"mobImgMap"}/>
                                    </div>
                                </div>
                                <div className="card-container-over-lap-img">
                                    <div className="cardOverLapImg">
                                        <img className="m-5" style={{height: "30em"}} src={mobImgTrip}
                                             alt={"mobImgTrip"}/>
                                    </div>
                                </div>
                                <div className="card-container-over-lap-img">
                                    <div className="cardOverLapImg">
                                        <img className="m-5" style={{height: "30em"}} src={mobImgUser}
                                             alt={"mobImgUser"}/>
                                    </div>
                                </div>
                                <div className="card-container-over-lap-img">
                                    <div className="cardOverLapImg">
                                        <img className="m-5" style={{height: "30em"}} src={mobImgChat}
                                             alt={"mobImgChat"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pl-0 pr-0 col-sm-12 align-self-center">
                            <ParagraphContainer paragraphHeader={[`The PackitUp App`]}
                                                pargraph={['Browse the map, find out what people are doing wherever you are or where you want to go. PackitUp shows you the trips that others have planned and you can create your own trips so others can see them.']}/>
                        </div>
                    </div>
                </div>

                {/*4th section*/}
                <div className="container-fluid voffset9 boffset9">
                    <div className="row position-relative">
                        <div className="col-md-6 pl-0 pr-0 col-sm-12">
                            <ParagraphContainer cmnWidth={`395px`} marginTop={'10em'} backgroundColor={'#ECFBFD'}
                                                borderRadius={'0 40px 40px 0'} width={'135%'}
                                                paragraphHeader={[`Meet your future`, <br/>, `Travel Buddies`]}
                                                pargraph={[`Check out who is behind the trips created on the map. Find out who your future travel buddy is, meet people nearby or look for like-minded travelers or locals. PackitUp helps you connect with others through planning long or short trips together.`]}/>
                        </div>
                        <div className="col-md-6 pl-0 pr-0 col-sm-12 overlay">
                            <img className="imgBorderRadiusLeft img-fluid" src={introImg2} alt={"introImg one"}/>
                        </div>
                    </div>
                </div>

                {/*5th section*/}
                <div>
                    <div className="voffset9 boffset9">
                        <div className="container-fluid text-center position-absolute introSection3ImgOverLay"
                             style={{marginTop: '23em'}}>
                            <img className="img-fluid" style={{borderRadius: '20px'}} src={introImg3}
                                 alt={"introImg3"}/>
                        </div>
                        <div className="container-fluid introSection3">
                            <div className="container">
                                <ParagraphContainer paragraphHeader={`Meet up and travel`}
                                                    pargraph={'Found an awesome trip? Maybe to a cafe nearby or to a national park far away? Met an awesome traveler? Get in touch, meet up and start traveling together!'}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/*6th section*/}
                <div className="bg-img2">
                    <div className="container d-flex justify-content-center">
                        <div className="roundedBannerContainerFooter d-flex flex-column">
                            <h3 className="font-weight-bold text-center mt-2" style={{fontSize: '2.5em'}}>Meet up and travel</h3>
                            <p className="text-center mt-2" style={{fontSize: '1.5em'}}>Start traveling</p>
                            <button className="footerBtn mt-2" type="button">Launch PackitUp</button>
                        </div>
                    </div>
                </div>

                {/*7th section*/}
                <Footer />

            </Fragment>
        );
    }
}

export default Index;