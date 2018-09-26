import React, {Component} from "react";
import Square from "./Square"

class Board extends Component {

    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        let html = [];
        for (let i = 0; i < 6; i++) {
            let children = [];
            for (let j = 0; j < 7; j++) {
                children.push(this.renderSquare(j + i * 7));
            }
            html.push(<div className="ui equal width grid">{children}</div>);
        }

        return html;

    }
}

export default Board;