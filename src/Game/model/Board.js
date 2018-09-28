import React, {Component} from "react";
import Square from "./Tiles/Square"
import PlayerSquare from "./Tiles/PlayerSquare"
import EnemySquare from "./Tiles/EnemySquare"


class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tiles: Array(42).fill(null),
        }
        this.initBoard();
        this.constructPlayers();
        this.constructEnemies();
    }

    initBoard = () => {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                let color = "";
                let idx = i * 7 + j;
                if ((idx + Math.floor((idx / 7) % 1)) % 2 === 0) color = "even";
                else color = "odd";
                this.state.tiles[idx] = <Square key={idx}  id={idx}/>;
            }
        }
    }

    constructEnemies = () => {
        const tiles = this.state.tiles;
        for(let i = 0; i < 14; i++){
            let color = "";
            if ((i + Math.floor((i / 7) % 1)) % 2 === 0) color = "even";
            else color = "odd";
            tiles[i] = <EnemySquare key={i}  id={i}/>
        }
    }

    constructPlayers = () => {
        const tiles = this.state.tiles;
        for(let i = 28; i < 42; i++){
            tiles[i] = <PlayerSquare key={i} id={i}/>
        }
    }


    render() {
        const tiles = this.state.tiles;
        return (
            <div className="ui seven column grid">
                {
                    tiles.map(function (object, i) {
                        return object;
                    })
                }</div>
        );
    }
}

export default Board;