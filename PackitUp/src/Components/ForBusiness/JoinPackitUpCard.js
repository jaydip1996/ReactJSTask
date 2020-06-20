import React, {Component, Fragment} from 'react';
import CmnBtnForBusiness from "./CmnBtnForBusiness";

class JoinPackitUpCard extends Component {
    render() {
        return (
            <Fragment>
                <div className="card text-center" style={{borderRadius:'30px', border:'none'}}>
                    <div className="card-header" style={{backgroundColor:'#00B685',borderRadius:'30px 30px 0 0', borderBottom:'unset'}}>
                        <h2 className="CardHeadingForBusiness">{this.props.header}</h2>
                    </div>

                    <div className="card-body" style={{backgroundColor:'#EEFBF6'}}>
                        <ul className="list-unstyled">
                            <li className="CardContentForBusiness">{this.props.listItm[0]}</li>
                            <li className="CardContentForBusiness">{this.props.listItm[1]}</li>
                            <li className="CardContentForBusiness">{this.props.listItm[2]}</li>
                            <li className="CardContentForBusiness">{this.props.listItm[3]}</li>
                        </ul>
                    </div>

                    <div className="card-footer text-muted" style={{backgroundColor:'#EEFBF6', borderRadius:'0 0 30px 30px', borderTop:'unset'}}>
                        <h3 className="contactForBusinessStyle">Contact us for free trials!</h3>
                        <CmnBtnForBusiness content={this.props.btnText} /><br />
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="priceServiceDetail text-decoration-none" style={{color: '#2a2d34', fontSize: '0.7em', margin: '0.7em 0'}} href="#">Pricing and Service Details</a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default JoinPackitUpCard;