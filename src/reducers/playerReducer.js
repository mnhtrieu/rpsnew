// export const initialState = {
//   playerMessage: '',
// };

//exportuju tuto funkci a kombinuju s ostatnimi reducery v indexu
export default function(
  state = {
    playerMessage: '',
  },
  action,
) {
  //v tom switchi nemusis psat ty case do bloku, ale ja jsem na ne zvykli a prijde mi to prehlednejsi
  //+ mi to prijde jako min error prone code
  switch (action.type) {
    case 'PLAYER_LOG': {
      return { ...state, playerMessage: action.payload };
    }
    case 'PLAYER_DELETE_MESSAGE': {
      return { ...state, playerMessage: '' };
    }
    // pro pripad, ze nematchne ani jeden action.type, tak musis davat porad default
    default: {
      return state;
    }
  }
}
