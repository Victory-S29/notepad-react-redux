import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { changeNoteAction } from '../store/actions/note.action';

const ChangeTextPage = () => {
    const { id } = useParams();
    const notes = useSelector((state) => state.notes.notes);

    const dispatch = useDispatch();

    let noteWork = notes.find((note) => note.id ===  Number(id));

    const [noteTitle, setTitle] = useState(noteWork.noteTitle);
    const [noteText, setText] = useState(noteWork.noteText);

    const onClickBtn = () => {
        if (noteText === "" || noteTitle === "") {
            alert("You have required fields");
        } else {
            const updatedNote = {
                noteTitle,
                noteText,
                noteType: 'text',
            };
            dispatch(changeNoteAction(id, updatedNote));
        }
    };

    const onLinkClick = (e) => {
        if (noteText === "" || noteTitle === "") {
            e.preventDefault();
        }
    }

    return (
        <div className='form-body'>
            <input placeholder='Note title...' className='form-one-row-input' type='text' value={noteTitle}
                onChange={({ target }) => { setTitle(target.value) }}
            />
            <textarea placeholder='Note text...' className='textForm-text-input' type='text' value={noteText}
                onChange={({ target }) => { setText(target.value) }}
            />
            <Link onClick={onClickBtn} onClickCapture={onLinkClick} className='form-addBtn' to='/'>
                Change note
            </Link>
        </div>
    );
};

export default ChangeTextPage;