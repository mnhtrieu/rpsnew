import React from "react";
import AbstractSquare from "./AbstractSquare";
import {Image} from "semantic-ui-react"

class EnemySquare extends AbstractSquare {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image src="/assets/images/red_front.png" fluid />

        )
    }
}

export default EnemySquare;