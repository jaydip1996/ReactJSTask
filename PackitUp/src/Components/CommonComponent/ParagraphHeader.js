import React, {Component} from 'react';

class ParagraphHeader extends Component {
    render() {
        return (
            <h2 className="paragraphHeader"  style={{width:this.props.width}}>
                {this.props.content}
            </h2>
        );
    }
}

export default ParagraphHeader;