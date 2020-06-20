import React, {Component} from 'react';
import LoginBtn from "./LoginBtn";
import SignupBtn from "./SignupBtn";
import BannerHeader from "./BannerHeader";

class RoundedBannerContainer extends Component {

    render() {
        return <div className="roundedBannerContainer">
           <BannerHeader content = {[`Find Travel Buddies.`,<br />,`Discover new Destinations.`]} />
           <LoginBtn class="mt-3 mb-3"/>
           <SignupBtn class="mt-3 mb-3"/>
        </div>
    }
}
export default RoundedBannerContainer;