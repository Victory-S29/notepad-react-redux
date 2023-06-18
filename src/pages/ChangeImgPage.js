import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { changeNoteAction } from '../store/actions/note.action';

const ChangeImgPage = () => {
    const { id } = useParams();
    const notes = useSelector((state) => state.notes.notes);

    const dispatch = useDispatch();

    let noteWork = notes.find((note) => note.id === Number(id));

    const [noteTitle, setTitle] = useState(noteWork.noteTitle || "");
    const [noteText, setText] = useState(noteWork.noteText || "");
    const [noteImg, setImg] = useState(noteWork.noteImg);

    const onClickBtn = () => {
        if (noteImg === null) {
            alert("You have required fields");
        } else {
            const updatedNote = {
                noteTitle,
                noteText,
                noteImg,
                noteType: 'img',
            };
            dispatch(changeNoteAction(id, updatedNote));
        }
    };

    const onLinkClick = (e) => {
        if (noteImg === null) {
            e.preventDefault();
        }
    }

    return (
        <div className='form-body'>
            <input placeholder='Note title...' className='form-one-row-input' type='text' value={noteTitle} onChange={e => { setTitle(e.target.value) }} />
            <textarea placeholder='Note text...' className='textForm-text-input' type='text' value={noteText} onChange={e => { setText(e.target.value) }} />
            <input style={{ color: "#fff" }} type="file" accept="image/*" onChange={e => { setImg(e.target.files[0]) }} />
            <Link className='form-addBtn' onClick={onClickBtn} onClickCapture={onLinkClick} to='/'>
                Change note
            </Link>
        </div>
    );
};

export default ChangeImgPage;