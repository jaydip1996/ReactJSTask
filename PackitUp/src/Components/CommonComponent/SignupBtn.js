import React, {Component} from 'react';

class SignupBtn extends Component {
    render() {
        return (
            <button className={`signUpBtn ${this.props.mt} ${this.props.class}`} style={{width:this.props.width, height:this.props.height}}>
                Signup
            </button>
        );
    }
}

export default SignupBtn;