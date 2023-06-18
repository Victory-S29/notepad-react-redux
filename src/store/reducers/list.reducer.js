import { ADD_LIST_ELEMENT_TYPE, CLEAR_TASKS_LIST_TYPE } from "../actions/list.action";

const initialState = {
    tasks: []
}
 
 
const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_ELEMENT_TYPE: {
            const newId = state.tasks.length;
            const newTask = {
                id: newId,
                ...action.payload,
            }
            return {
                tasks: [...state.tasks, newTask]
            };
 
        } case CLEAR_TASKS_LIST_TYPE: {
            return {
                tasks: []
            };
        }
        default: {
            return initialState;
        }
    }
}

export default TaskReducer;