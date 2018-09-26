import React, {Component} from "react";

import Board from "./Board"


class Game extends Component {

    render() {
        return (
            <div className="ui container">
                <h1>RPS Online</h1>
                <div className="ui grid mt20">
                    <div className="sixteen wide mobile sixteen wide tablet nine wide computer column col-nopad">
                        <Board/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Game;