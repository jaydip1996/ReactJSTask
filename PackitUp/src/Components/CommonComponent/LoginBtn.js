import React, {Component} from 'react';

class LoginBtn extends Component {
    render() {
        return <button className={`loginBtn ${this.props.mt} ${this.props.class}`} style={{width:this.props.width, height:this.props.height}}>Login</button>
    }
}

export default LoginBtn;