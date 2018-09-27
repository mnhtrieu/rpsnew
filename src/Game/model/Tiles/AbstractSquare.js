import React, {Component} from "react";

class AbstractSquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
        }
    }

    render() {
        return (
            <div className="column no-padding">
                This is Abstract Square, please do not use this!
            </div>
        )
    }
}

export default AbstractSquare;