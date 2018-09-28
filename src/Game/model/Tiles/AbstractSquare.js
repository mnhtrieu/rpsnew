import React, {Component} from "react";

class AbstractSquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
        }
    }

    getColor(){
        let color = "";
        const i = this.state.id;
        if ((i + Math.floor((i / 7) % 1)) % 2 === 0) color = "even";
        else color = "odd";
        return color;
    }


    renderSquare(){
        return (<span>This is Abstract Square, please do not use this!</span>);
    }

    render() {
        return (
            <div className="column no-padding">
                <div className={"square " + this.getColor()}>
                    {this.renderSquare()}
                </div>
            </div>
        )
    }
}

export default AbstractSquare;