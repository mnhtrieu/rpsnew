import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {Icon, Button, Input} from 'semantic-ui-react';

class Login extends Component {

    render() {

        return (
            <div className="page-login">
                <div className="ui centered grid container">
                    <div className="five wide column">
                        <div className="ui icon default message">
                            <Icon name="chess pawn"/>
                            <div className="content">
                                <div className="header">
                                    <h1>RPSonline</h1>
                                </div>
                            </div>
                        </div>
                        <div className="ui fluid card">
                            <div className="content">
                                <h3>Enter your nickname</h3>
                                <Input iconPosition='left' placeholder='Nickname' fluid>
                                    <Icon name='user' />
                                    <input />
                                </Input><br />
                                <Button content="Next" icon="play" labelPosition="left" color="primary"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    }

    export default Login;
