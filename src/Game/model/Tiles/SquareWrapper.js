import React, {Component} from "react";

class SquareWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            square: this.props.square
        }
    }

    render() {
        const {color,square} = this.state;
        return (
            <div className="column no-padding">
                <div className={"square " + color}>
                    <div className="text">
                        {square}
                    </div>
                </div>
            </div>
        )
    }
}

export default SquareWrapper;