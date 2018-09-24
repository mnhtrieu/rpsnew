import React, { Component } from 'react';
import { connect } from 'react-redux';
// tyhle akce si napojujes v connectu
import {
  playerMessageLog,
  playerDeleteMessage,
} from '../actions/playerActions';

class Example extends Component {
  render() {
    const { playerMessageLog, playerDeleteMessage, playerMessage } = this.props;
    window.addEventListener('click', () => {
      playerDeleteMessage();
    });
    return (
      <div>
        <div>
          <input
            type="text"
            value={playerMessage}
            onChange={event => {
              playerMessageLog(event.target.value);
            }}
          />
        </div>
        <div>{playerMessage}</div>
      </div>
    );
  }
}

// v tenhle funkci mapStateToProps si muzes vytahnout stav svoji aplikace, ale musi prijimat argument
const mapStateToProps = state => {
  // vsechno co si tady namapujes se bude v komponente posilat jako props
  // pokud jsi nezapomnel, tak tady volam state.player -> pokud bych predtim poslal jen playerReducer do combineReducers
  // tak musis volat stav player jako state.playerReducer ==> cistejsi kod, vic logicky
  return { playerMessage: state.player.playerMessage };
};

// v connect je prvni argument napojeni State na Props, druhy argument jsou funkce/action/dispatch, ktery ti sam napoji ten subscribe
// ale musis je posilat jako objekt, potom je v komponente muzes volat pres this.props (this.props.playerDeleteMessage)
export default connect(
  mapStateToProps,
  { playerDeleteMessage, playerMessageLog },
)(Example);
