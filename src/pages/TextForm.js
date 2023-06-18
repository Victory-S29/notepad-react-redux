import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import createNoteAction from '../store/actions/note.action';
import '../style/forms-style.css';

const TextForm = () => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");

    const dispatch = useDispatch();

    const resetData = () => {
        setNoteTitle("");
        setNoteText("");
    }

    const onClickBtn = () => {
        if (noteText === "" || noteTitle === "") {
            alert("You have required fields");
        } else {
            const noteObj = {
                id: Math.floor(Math.random() * 90000),
                noteTitle,
                noteText,
                noteType: "text",
            }
            dispatch(createNoteAction(noteObj));
            resetData();
        }
    }

    const onLinkClick = (e) => {
        if (noteText === "" || noteTitle === "") {
            e.preventDefault();
        }
    }

    return (
        <Fragment>
            <div className='form-body'>
                <input placeholder='Note title...' className='form-one-row-input' type='text' value={noteTitle} onChange={e => { setNoteTitle(e.target.value) }}></input>
                <textarea placeholder='Note text...' className='textForm-text-input' type='text' value={noteText} onChange={e => { setNoteText(e.target.value) }}></textarea>
                <Link className='form-addBtn' onClick={onClickBtn} onClickCapture={onLinkClick} to='/'>
                    Add new note
                </Link>
            </div>
            <div className='create-link-placeholder'>
                <Link className='toMain' to='/'> To main </Link>
            </div>
        </Fragment>
    );
};

export default TextForm;