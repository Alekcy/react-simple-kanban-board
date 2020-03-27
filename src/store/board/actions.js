import { SET_BOARD } from './actionTypes';

export function setBoard(newBoard) {
    return {
        type: SET_BOARD,
        payload: newBoard
    }
}
