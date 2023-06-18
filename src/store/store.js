import { combineReducers, createStore } from "redux"
import NoteReducer from "./reducers/note.reducer";
import TaskReducer from "./reducers/list.reducer";

const reducers = {
    notes: NoteReducer,
    tasks: TaskReducer,
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default store;