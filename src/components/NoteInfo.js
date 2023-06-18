import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteAction } from '../store/actions/note.action';
import { Link } from 'react-router-dom';

const NoteInfo = ({ id }) => {
    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();
    let currenNote = notes.find((note) => note.id === Number(id));

    const onClickBtn = () => {
        dispatch(deleteNoteAction(id));
    };

    return (
        <div className='block-info'>
            <button onClick={onClickBtn} className='delete-btn'>X</button>
            {currenNote.noteType === 'text' && (<Link to={`changeText/${id}`} className='change-btn'>Change</Link>)}
            {currenNote.noteType === 'img' && (<Link to={`changeImg/${id}`} className='change-btn'>Change</Link>)}
            {currenNote.noteType === 'list' && (<Link to={`changeList/${id}`} className='change-btn'>Change</Link>)}
        </div>
    );
};
 
export default NoteInfo;