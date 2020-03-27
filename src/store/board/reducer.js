import { SET_BOARD } from './actionTypes';

const initialState = {
  board: {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: [
          {
            id: 1,
            title: 'Add card',
            description: 'Add capability to add a card in a column'
          },
        ]
      },
      {
        id: 2,
        title: 'Doing',
        cards: [
          {
            id: 2,
            title: 'Drag-n-drop support',
            description: 'Move a card between the columns'
          },
        ]
      }
    ]
  },
};

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case SET_BOARD:
            return {
                board: action.payload
            };
        default:
            return state;
    }
};
