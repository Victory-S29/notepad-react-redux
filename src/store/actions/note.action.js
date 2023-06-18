export const CREATE_NOTE_TYPE = "CREATE_NOTE_ACTION"
export const DELETE_NOTE_TYPE = "DELETE_NOTE_ACTION"
export const CHANGE_NOTE_TYPE = "CHANGE_NOTE_ACTION"

const createNoteAction = (note) => {
    return {
        type: CREATE_NOTE_TYPE,
        payload: note,
    }
}

export const deleteNoteAction = (id) => {
    return {
        type: DELETE_NOTE_TYPE,
        payload: id,
    }
}

export const changeNoteAction = (id, updatedNote) => {
    return {
        type: CHANGE_NOTE_TYPE,
        payload: {
            id,
            updatedNote,
        },
    }
}

export default createNoteAction;