import React, {Component} from 'react';

class Paragraph extends Component {
    render() {
        const width = this.props.width;
        return (
            <p className="paragraph" style={{width}}>
                {this.props.content}
            </p>
        );
    }
}

export default Paragraph;