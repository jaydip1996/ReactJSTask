import React, {Component} from 'react';
import FooterHeading from "./FooterHeading";
import FooterContent from "./FooterContent";
import LoginBtn from "./LoginBtn";
import SignupBtn from "./SignupBtn";
import instaLogo from "../../assets/images/PackitUp_instagram.png"
import fbLogo from "../../assets/images/PackitUp_facebook.png"
import twiterLogo from "../../assets/images/PackitUp_twitter.png"
import linkedinLogo from "../../assets/images/PackitUp_linkedin.png"
import pinterestLogo from "../../assets/images/PackitUp_pinterest.png"
import tumblrLogo from "../../assets/images/PackitUp_tumblr.png"

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col-md-3 col-sm-12 justify-content-center d-flex voffset9 boffset7">

                        <ul style={{listStyle: 'none'}}>
                            <li>
                                <FooterHeading content={"PackitUp"}/>
                            </li>
                            <li>
                                <FooterContent content="Home"/>
                            </li>
                            <li>
                                <FooterContent content="About"/>
                            </li>
                            <li>
                                <FooterContent content="For Business"/>
                            </li>
                            <li>
                                <FooterContent content="Partners"/>
                            </li>
                            <li>
                                <FooterContent content="Contact/Imprint"/>
                            </li>
                            <li>
                                <FooterContent content="Blog"/>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 justify-content-center d-flex voffset9 boffset7">
                        <ul style={{listStyle: 'none'}}>
                            <li>
                                <FooterHeading content={"Support"}/>
                            </li>
                            <li>
                                <FooterContent content="Legal"/>
                            </li>
                            <li>
                                <FooterContent content="Terms of Services"/>
                            </li>
                            <li>
                                <FooterContent content="Privacy Policy"/>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 justify-content-center d-flex voffset9 boffset7">
                        <div>
                            <FooterHeading content={"Follow us"} mr={'mr-3'}/>
                            <div className="row justify-content-around mb-3">
                                    <img className="img-fluid" style={{width:'50px', height:'50px'}} src={instaLogo} alt={"fbLogo"} />
                                    <img className="img-fluid" style={{width:'50px', height:'50px'}} src={fbLogo} alt={"fbLogo"} />
                            </div>
                            <div className="row justify-content-around mb-3">
                                    <img className="img-fluid" style={{width:'50px', height:'50px'}} src={twiterLogo} alt={"fbLogo"} />
                                    <img className="img-fluid" style={{width:'50px', height:'50px'}} src={linkedinLogo} alt={"fbLogo"} />
                            </div>
                            <div className="row justify-content-around mb-3">
                                    <img className="img-fluid" style={{width:'50px', height:'50px'}} src={pinterestLogo} alt={"fbLogo"} />
                                    <img className="img-fluid" style={{width:'50px', height:'50px'}} src={tumblrLogo} alt={"fbLogo"} />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 justify-content-center d-flex voffset9 boffset7">
                        <div>
                            <FooterHeading content={"Use PackitUp!"}/>
                            <LoginBtn width={'100%'} height={'2em'} mt={'mt-1'}/>
                            <SignupBtn width={'100%'} height={'2em'} mt={'mt-3'}/>
                        </div>
                    </div>

                </div>

                <div className="bg-dark">
                    <p className="small font-weight-bold text-center text-white m-0 pt-3 pb-5">© 2020 PackitUp IVS /
                        CVR: 37546372</p>
                </div>
            </div>
        );
    }
}

export default Footer;