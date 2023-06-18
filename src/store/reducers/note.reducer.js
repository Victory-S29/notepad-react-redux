import { CHANGE_NOTE_TYPE, CREATE_NOTE_TYPE, DELETE_NOTE_TYPE } from "../actions/note.action";

const storedNotes = JSON.parse(localStorage.getItem("notes"));

const initialState = {
    notes: storedNotes || [],
}

const NoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTE_TYPE: {
            const newId = state.notes.length;
            const { noteImg } = action.payload;
            const newNote = {
                id: newId,
                ...action.payload,
                noteImg: noteImg ? noteImg : null,
            }
            
            const updatedNotes = [...state.notes, newNote];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return {
                notes: [...state.notes, newNote],
            };
        }
        case DELETE_NOTE_TYPE: {
            const updatedNotes = state.notes.filter((note) => note.id !== action.payload);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return {
                notes: updatedNotes,
            };
        }
        case CHANGE_NOTE_TYPE: {
            const { id, updatedNote } = action.payload;
            const updatedNotes = state.notes.map((note) => {
                if (Number(note.id) === Number(id)) {
                    return {
                        ...note,
                        ...updatedNote
                    };
                }
                return note;
            });
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return {
                notes: updatedNotes,
            };
        }
        default: {
            return state;
        }
    }
}

export default NoteReducer;