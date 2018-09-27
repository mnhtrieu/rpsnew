import React from "react";
import AbstractSquare from "./AbstractSquare";
import {Image} from "semantic-ui-react"

class PlayerSquare extends AbstractSquare {

    render() {
        return (
                <Image src="/assets/images/blue_back.png" fluid />

        )
    }
}

export default PlayerSquare;