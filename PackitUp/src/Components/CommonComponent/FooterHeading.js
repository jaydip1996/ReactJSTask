import React, {Component} from 'react';

class FooterHeading extends Component {
    render() {
        const mr = this.props.mr;
        return (
            <p className={`footerHeading ${mr}`}>{this.props.content}</p>
        );
    }
}

export default FooterHeading;