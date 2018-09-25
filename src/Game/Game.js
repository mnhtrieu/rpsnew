import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Player from './model/Player';
import Login from "./pages/Login";
import Menu from "./pages/Menu";


import {playerChangeUsername} from "../actions/playerActions";


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: null,
            player: new Player(),
            enemy: null,
            timer: 10,
            // TODO, nepamatuji si všechny potřebné věci :D kdyžtak časem se doplní

        };
    }

    render() {
        const nickname = this.props.nickname;
        const player = this.state.player;

        if (player.getName() === null) {
            player.setName("");
            return (<Redirect to='/game/login'/>)
        }

        player.setName(nickname);
        return (
            <div>
                <Switch>
                    <Route exact path="/game/login" component={Login}/>
                    <Route exact path="/game/menu" component={Menu} />
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
)(Game);

