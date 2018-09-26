import React, {Component} from "react";


class Square extends Component {

    constructor(props) {
        super(props);
        var color = "";

        const val = this.props.value;
        if ((val+Math.floor((val/7)%1)) % 2 === 0) color = "even";
        else color = "odd";

        this.state = {
            color: color,
        }
    }

    render() {
        const {color} = this.state;
        return (
            <div className="column no-padding">
                <div className={"square " + color}>
                    <div className="text">
                        square #{this.props.value}
                    </div>
                </div>
            </div>
        )
    }
}

export default Square;