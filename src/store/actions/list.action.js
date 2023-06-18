export const ADD_LIST_ELEMENT_TYPE = "ADD_LIST_ELEMENT_ACTION"
export const CLEAR_TASKS_LIST_TYPE = "CLEAR_TASKS_LIST_ACTION"

const addTaskAction = (task) => {
    return {
        type: ADD_LIST_ELEMENT_TYPE,
        payload: task,
    }
}

export const clearTasksAction = () => {
    return {
        type: CLEAR_TASKS_LIST_TYPE,
    }
}

export default addTaskAction;