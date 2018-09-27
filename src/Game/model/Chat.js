import React, {Component} from "react";

class Info extends Component {

    render() {
        return (
            <div className="chat">
                <h2>Chat</h2>
                <div className="msg-container">
                    <ul id="msg-container-content">
                    </ul>
                </div>
                <form id="msgForm">
                    <div className="send-message">
                        <div className="ui fluid action input">
                            <input autoComplete="off" type="text" id="msg" placeholder="Zpráva..."/>
                            <button className="ui button inline">Poslat</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}


export default Info;