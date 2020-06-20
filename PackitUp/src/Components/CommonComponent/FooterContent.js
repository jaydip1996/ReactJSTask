import React, {Component} from 'react';

class FooterContent extends Component {
    render() {
        return (
            <p className="footerContent">{this.props.content}</p>
        );
    }
}

export default FooterContent;