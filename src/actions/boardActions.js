export function boardChangeTile(i, newTile){
    return {TYPE: 'CHANGE_TILE', idx: i, tile: newTile};
}