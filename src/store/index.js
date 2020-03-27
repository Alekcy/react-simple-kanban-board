import { createStore } from "redux";
import reducer from './board/reducer';

export const store = createStore(reducer);
