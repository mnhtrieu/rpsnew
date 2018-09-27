import React from "react";
import AbstractSquare from "./AbstractSquare";

class Square extends AbstractSquare {

    constructor(props) {
        super(props);
    }

    render() {
        const {color} = this.state;
        return (
            <div className="column no-padding">
                <div className={"square " + color}>
                    <div className="text">
                    </div>
                </div>
            </div>
        )
    }
}

export default Square;