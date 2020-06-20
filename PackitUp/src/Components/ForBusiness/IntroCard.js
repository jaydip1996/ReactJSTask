import React, {Component, Fragment} from 'react';

class IntroCard extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-4 col-sm-12">
                    <div className="introCardImgStyle align-self-center">
                        <img className='img-fluid' style={{borderRadius:"20px"}} src={this.props.introImg} alt={"PackitUpIntro2"} />
                    </div>
                </div>
                <div className="col-md-8 col-sm-12 align-self-center">
                    <h4 className="introCardHeader">{this.props.introHeading}</h4>
                    <p className="introCardContent">{this.props.introContent}</p>
                </div>

            </Fragment>
        );
    }
}

export default IntroCard;