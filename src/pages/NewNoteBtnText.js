import React from 'react';
import { Link } from 'react-router-dom';
import '../style/createNew-form.css';

const NewNoteBtnText = () => {
    return (
        <div className='empty-notes-create'>
            <h1 className='empty-notes-create-title'>Create new Note</h1>
            <ul className='empty-notes-create-list'>
                <li>
                    <Link className='new-note-link' to='/text-form'>Create text note</Link>
                </li>
                <li>
                    <Link className='new-note-link' to='/image-form'>Create image note</Link>
                </li>
                <li>
                    <Link className='new-note-link' to='/list-form'>Create ToDo list</Link>
                </li>
            </ul>
        </div>
    );
};

export default NewNoteBtnText;