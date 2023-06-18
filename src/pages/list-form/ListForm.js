import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import createNoteAction from '../../store/actions/note.action';

const ListForm = () => {
    const tasks = useSelector((state) => state.tasks.tasks)
    const dispatch = useDispatch();

    const onLinkClick = (e) => {
        if (tasks.length === 0) {
            e.preventDefault();
        }
    }

    const onClickBtn = () => {
        if (tasks.length === 0) {
            alert("You need to add at least one task");
        } else {
            const noteObj = {
                id: Math.floor(Math.random() * 90000),
                tasks,
                noteType: "list"
            }
            dispatch(createNoteAction(noteObj));
        }
    }

    return (
        <Fragment>
            <div className='create-link-placeholder'>
                <Link className='toMain' to='/'> To main </Link>
            </div>
            <div className='create-link-placeholder'>
                <Link to='/add-list-element' className='addTask-link'>Add task</Link>
            </div>
            <div className='listForm-list'>
                <table>
                    {tasks?.map(task => {
                        return (
                            <tbody key={task.id}>
                                <tr>
                                    <th><div className={task.checked === true ? "listForm-task-true" : "listForm-task-false"}></div></th>
                                    <td><p className='listForm-task-title' key={task.id}>{task.noteTask}</p></td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
            <div className='create-link-placeholder'>
                <Link className='form-addBtn list-btn' onClick={onClickBtn} onClickCapture={onLinkClick} to='/'>
                    Add new note
                </Link>
            </div>
        </Fragment>
    );
};

export default ListForm;