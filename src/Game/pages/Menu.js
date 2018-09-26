import React, {Component} from "react";
import {Transition, Button} from "semantic-ui-react";
import {Redirect, Link} from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: false}
    }
    render() {
        const {visible} = this.state;
        const {player} = this.props.game;
        return (
            <div>
                <Transition visible={visible} animation="fly right">
                    <div className="page-login">
                        <div className="ui centered grid container">
                            <div className="five wide column">
                                <div className="ui fluid card">
                                    <h2 className="card-header dark-color-bg white-color">RPS online</h2>
                                    <div className="content primary-color-bg">
                                        <h3>Welcome, {player.getName()}</h3>
                                        <Button fluid>Host Game</Button><br />
                                        <Button fluid>Join Game</Button><br />
                                        <Link className="fluid ui button default" to="/game/login">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        )
    }

    componentDidMount(){
        this.setState({visible: !this.state.visible});
    }

    back = () => {
        console.log("aa");
        return (<Redirect to='/game/login'/>);
    }


}

export default Menu;