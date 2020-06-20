import React, {Component,Fragment} from 'react';

class TeamMemberCard extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-4 col-sm-12">
                    <img className="img-fluid avatarImgStyle" src={this.props.avatartImg} alt={"JakubImg"} />
                    <h3 className="teamMemberName">{this.props.name}</h3>
                    <p className="designation">{this.props.designation}</p>
                </div>
            </Fragment>
        );
    }
}

export default TeamMemberCard;