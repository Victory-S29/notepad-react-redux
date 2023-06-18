import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import createNoteAction from '../store/actions/note.action';
import { Link } from 'react-router-dom';

const ImageForm = () => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const [noteImg, setNoteImg] = useState(null);

    const dispatch = useDispatch();

    const resetData = () => {
        setNoteTitle("");
        setNoteText("");
    }

    const onClickBtn = () => {
        if (noteImg === null) {
            alert("You have required fields");
        } else {
            const noteObj = {
                id: Math.floor(Math.random() * 90000),
                noteTitle,
                noteText,
                noteImg,
                noteType: "img"
            }
            dispatch(createNoteAction(noteObj));
            resetData();
        }
    }

    const onChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNoteImg(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const onLinkClick = (e) => {
        if (noteImg === null) {
            e.preventDefault();
        }
    }

    return (
        <Fragment>
            <div className='form-body'>
                <input placeholder='Note title...' className='form-one-row-input' type='text' value={noteTitle} onChange={e => { setNoteTitle(e.target.value) }} />
                <textarea placeholder='Note text...' className='textForm-text-input' type='text' value={noteText} onChange={e => { setNoteText(e.target.value) }} />
                <input style={{ color: "#fff" }} type="file" accept="image/*" onChange={onChange} />
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

export default ImageForm;