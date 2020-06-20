import React, {Component} from 'react';

class ParagraphHeader extends Component {
    render() {
        return (
            <h2 className="paragraphHeader"  style={{width:this.props.width, margin: this.props.margin}}>
                {this.props.content}
            </h2>
        );
    }
}

export default ParagraphHeader;