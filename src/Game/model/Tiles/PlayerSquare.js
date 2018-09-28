import React from "react";
import AbstractSquare from "./AbstractSquare";
import {Image} from "semantic-ui-react"

class PlayerSquare extends AbstractSquare {


    renderSquare() {
        return (
            <div className="square-content">
                <Image src="/assets/images/blue_back.png" fluid/>
                <Image src="/assets/images/weap/rock.png" fluid className="paper"/>
            </div>
        );
    }
}

export default PlayerSquare;