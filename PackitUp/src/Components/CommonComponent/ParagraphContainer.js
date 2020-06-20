import React, {Component} from 'react';
import ParagraphHeader from "./ParagraphHeader";
import Paragraph from "./Paragraph";

class ParagraphContainer extends Component {
    render() {
        const marginTop = this.props.marginTop;
        const backgroundColor = this.props.backgroundColor;
        const borderRadius = this.props.borderRadius;
        const width = this.props.width;
        const padding =this.props.padding;

        return (
            <div className="paragraphContainer justify-content-center" style={{marginTop, backgroundColor, borderRadius, width, padding}}>
                <ParagraphHeader content={this.props.paragraphHeader} width={this.props.cmnWidth} margin={this.props.margin}/>
                <Paragraph content={this.props.pargraph} width={this.props.cmnWidth} margin={this.props.margin}/>
            </div>
        );
    }
}

export default ParagraphContainer;