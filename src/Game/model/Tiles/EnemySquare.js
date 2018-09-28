import React from "react";
import AbstractSquare from "./AbstractSquare";
import {Image} from "semantic-ui-react"

class EnemySquare extends AbstractSquare {


    renderSquare() {
        return (
            <div className="square-content enemy">
                <Image src="/assets/images/red_front.png" fluid/>
            </div>

        )
    }
}

export default EnemySquare;