import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';


import Player from './model/Player';
import Login from "./pages/Login";


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: null,
            player: null,
            enemy: null,
            timer: 10,
            // TODO, nepamatuji si všechny potřebné věci :D kdyžtak časem se doplní

        }
    }
    render() {
        const player = this.state.player;

        if (player === null){
            this.setState({player: new Player()});
            return (
                <Redirect to='/game/login'/>)
        }
        return (
            <Switch>
                <Route exact path="/game/login" component={Login}/>
            </Switch>);


    }
}

export default Game;