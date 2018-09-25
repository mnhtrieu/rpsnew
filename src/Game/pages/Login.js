import React, {Component} from 'react';
import {connect} from "react-redux";
import LoginForm from "../../forms/LoginForm";
import {Transition} from "semantic-ui-react";
import {Redirect} from "react-router-dom";
import {playerChangeUsername} from "../../actions/playerActions";

class Login extends Component {

    state = {visible: true, redirect: false};

    toggleVisibility = () => this.setState({visible: !this.state.visible});

    onCompleteTransition = () => {
        this.setState({redirect: true});
    }

    renderRedirect = () => {
        if(this.state.redirect)
            return <Redirect to='/game/menu'/>;
    }

    submit = values => {
        this.toggleVisibility();
        this.props.playerChangeUsername(values.username);
    }

    render() {
        const {visible} = this.state;
        return (
            <div>
            <Transition visible={visible} animation="fly left"
                        onComplete={() => (this.onCompleteTransition())}>
                <div className="page-login">
                    <div className="ui centered grid container">
                        <LoginForm onSubmit={this.submit}/>
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
