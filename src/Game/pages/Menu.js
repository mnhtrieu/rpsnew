import React, {Component} from "react";
import {Transition} from "semantic-ui-react";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: false}
    }
    render() {
        const {visible} = this.state;
        return (
            <div>
                <Transition visible={visible} animation="fly right">
                    <div className="page-login">
                        <div className="ui centered grid container">
                            <div className="five wide column">
                                <div className="ui fluid card">
                                    <h2 className="card-header dark-color-bg white-color">RPS online</h2>
                                    <div className="content primary-color-bg">
                                        <h3>Welcome, aaa</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
                {!visible && this.handleLoad()}
            </div>
        )
    }

    handleLoad = () => {
        this.setState({visible: !this.state.visible})
    };

}

export default Menu;