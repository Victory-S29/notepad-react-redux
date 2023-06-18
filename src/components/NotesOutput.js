import React from 'react';
import { useSelector } from 'react-redux';
import './component.css';
import NoteInfo from './NoteInfo';

const NotesOutput = () => {
    const notes = useSelector((state) => state.notes.notes);

    return (
        <div className='note-body'>
            {notes.map((note) => {
                console.log('note', note)
                if (note.noteType === "text" || note.noteType === "img") {
                    return (
                        <div className='note-block' key={note.id}>
                            <NoteInfo id={note.id} />
                            <p className='note-block--title'>{note.noteTitle}</p>
                            <p className='note-block--text'>{note.noteText}</p>
                            {note.noteImg && <img className='note-block--img' src={note.noteImg} alt="Note" />}
                        </div>
                    )
                } else {
                    return (
                        <div className='note-block' key={note.id}>
                            <NoteInfo id={note.id} />
                            {note.tasks.map((task) => {
                                return (
                                    <div key={task.id} className='note-block-list-line'>
                                        <p className={task.checked === true ? "note-block--true" : "note-block--false"}>*</p>
                                        <p className='note-block--list-text'>{task.noteTask}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default NotesOutput;


