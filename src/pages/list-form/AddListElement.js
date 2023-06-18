import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import addTaskAction from '../../store/actions/list.action';

const AddListElement = () => {
    const [noteTask, setNoteTask] = useState("");
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    const resetData = () => {
        setNoteTask("");
    }

    const onClickBtn = () => {
        if (noteTask === '') {
            alert("You have required fields");
        } else {
            const taskObj = {
                id: Math.floor(Math.random() * 90000),
                noteTask,
                checked,
            }
            dispatch(addTaskAction(taskObj));
            resetData();
        }
    }

    const onLinkClick = (e) => {
        if (noteTask === '') {
            e.preventDefault();
        }
    }

    return (
        <div className='form-body'>
            <div className='list-form'>
                <input type='checkbox' className='check-list-element'
                    onChange={() => { setChecked(!checked); }}
                />
                <input className='form-one-row-input' placeholder='Task...' type='text' value={noteTask}
                    onChange={e => { setNoteTask(e.target.value) }}
                />
            </div>
            <Link className='form-addBtn' onClick={onClickBtn} onClickCapture={onLinkClick} to='/list-form'>
                Add new task
            </Link>
        </div>
    );
};

export default AddListElement;