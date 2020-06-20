import React, {Component} from 'react';

class CmnBtnForBusiness extends Component {
    render() {
        return <button id={this.props.title} className="bannerButtonForBusiness">{this.props.content}</button>
    }
}

export default CmnBtnForBusiness;