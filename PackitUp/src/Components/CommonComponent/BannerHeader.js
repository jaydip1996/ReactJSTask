import React, {Component} from 'react';

class BannerHeader extends Component {
    render() {
        return (
            <div className="bannerHeader">{this.props.content}</div>
        );
    }
}

export default BannerHeader;