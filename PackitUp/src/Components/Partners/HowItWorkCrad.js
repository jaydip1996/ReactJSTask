import React, {Component, Fragment} from 'react';
import Paragraph from "../CommonComponent/Paragraph";

class HowItWorkCrad extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-3">
                    <div className="col-10 ml-auto mr-auto">
                        <div className="d-flex">
                            <img className="ml-auto mr-auto" src={this.props.img} alt={"PackitUpPartners1IMG"}/>
                        </div>
                        <div className="ml-auto mr-auto">
                            <Paragraph classes={`text-center`} content={this.props.content}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HowItWorkCrad;