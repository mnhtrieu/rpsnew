import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Player from './model/Player';
import Game from "./model/Game";

import Login from "./pages/Login";
import Menu from "./pages/Menu";


import {playerChangeUsername} from "../actions/playerActions";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};
    }
    render() {
        const nickname = this.props.nickname;
        /*if (player.getName() === null) {
            player.setName("");
            return (<Redirect to='/play/login'/>)
        }*/
        return (
            <div>
                <Switch>
                    <Route exact path="/play/login" render={()=> <Login username={nickname} />}/>
                    <Route exact path="/play/menu" render={()=> <Menu username={nickname} />}/>
                    <Route exact path="/play/game" render={()=> <Game username={nickname} />}/>
                </Switch>
            </div>);
    }
}

const mapStateToProps = state => {
    return {nickname: state.player.content};
};

export default connect(
    mapStateToProps,
    {playerChangeUsername},
)(Main);

