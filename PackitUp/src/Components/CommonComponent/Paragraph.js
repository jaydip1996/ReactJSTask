import React, {Component} from 'react';

class Paragraph extends Component {
    render() {
        return (
            <p className={`paragraph ${this.props.classes}`} style={{width:this.props.width, margin:this.props.margin}}>
                {this.props.content}
            </p>
        );
    }
}

export default Paragraph;