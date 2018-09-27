import React, {Component} from "react";
import "./rps.css"

import Player from "./Player";
import Board from "./Board"
import Info from "./Info"


import Chat from "./Chat"

class Game extends Component {


    constructor(props) {
        super(props);
        this.state = {
            player: new Player(),
            enemy: null,
            timer: 10,
            // TODO, nepamatuji si všechny potřebné věci :D kdyžtak časem se doplní
        };
    }



    render() {
        const {tiles} = this.state;
        return (
            <div className="ui container">
                <h1>RPS Online</h1>
                <div className="ui grid mt20">
                    <div className="sixteen wide mobile sixteen wide tablet nine wide computer column">
                        <Board />
                    </div>
                    <div className="seven wide column computer only no-padding">
                        <div className="side-wrapper">
                            <Info/>
                            <Chat/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Game;