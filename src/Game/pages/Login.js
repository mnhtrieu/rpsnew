import React, {Component} from 'react';
import {connect} from "react-redux";
import LoginForm from "../../forms/LoginForm";
import {Transition} from "semantic-ui-react";
import {Redirect} from "react-router-dom";
import {playerChangeUsername} from "../../actions/playerActions";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {visible: true, redirect: false,username: this.props.username};
    }


    toggleVisibility = () => this.setState({visible: !this.state.visible});

    onCompleteTransition = () => {
        this.setState({redirect: true});
    }

    renderRedirect = () => {
        if(this.state.redirect)
            return <Redirect to='/play/menu'/>;
    }

    submit = values => {
        this.toggleVisibility();
        this.props.playerChangeUsername(values.username);
    }

    render() {
        const {visible,username} = this.state;
        return (
            <div>
            <Transition visible={visible} animation="fly left"
                        onComplete={() => (this.onCompleteTransition())}>
                <div className="page-login">
                    <div className="ui centered grid container">
                        <LoginForm onSubmit={this.submit} initialValues={{username: username}} />
                    </div>
                </div>

            </Transition>
                {this.renderRedirect()}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {username: state.player.content};
};

export default connect(
    mapStateToProps,
    {playerChangeUsername},
)(Login);
