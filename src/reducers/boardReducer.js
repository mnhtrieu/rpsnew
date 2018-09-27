export const initialState = {
    idx: -1,
    newTile: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TILE':{
            return {... state, idx: action.idx, newTile: action.newTile}
        }
        default: {
            return state;
        }
    }
}
