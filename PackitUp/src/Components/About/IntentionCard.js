import React, {Component, Fragment} from 'react';
// import packitUpVision from "../../assets/images/About/PackitUp_vision.jpg";
import ParagraphContainer from "../CommonComponent/ParagraphContainer";

class IntentionCard extends Component {

    render() {
        // console.log(this.props);
        return (
            <Fragment>
                <div className="row" style={{paddingTop:'13em', paddingBottom:'13em'}}>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center align-self-center ml-auto mr-auto">
                        <img className="img-fluid intentionImg" src={this.props.img} alt={"packitUpVision"} />
                    </div>
                    <div className="col-md-6 col-sm-12 align-self-center">
                        <ParagraphContainer cmnWidth={`472px`} paragraphHeader={this.props.header} pargraph={this.props.content}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default IntentionCard;