export const initialState = {
    content: '',
};

//exportuju tuto funkci a kombinuju s ostatnimi reducery v indexu

export default function (state = initialState, action) {
    switch (action.type) {
        case 'PLAYER_LOG': {
            console.log('action:',action);
            return {...state, content: action.payload};
        }
        case 'PLAYER_DELETE_MESSAGE': {
            return {...state, content: ''};
        }
        case 'PLAYER_USERNAME':{
            return {...state, content: action.payload};
        }
        default: {
            return state;
        }
    }
}
