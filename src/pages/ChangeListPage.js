import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { changeNoteAction } from '../store/actions/note.action';

const ChangeListPage = () => {
    const { id } = useParams();
    const notes = useSelector((state) => state.notes.notes);

    const dispatch = useDispatch();

    let noteWork = notes.find((note) => note.id === Number(id));
    const [tasksArray, setTasksArray] = useState(noteWork.tasks);

    const onClickBtn = () => {
        const updatedNote = {
            tasks: tasksArray,
            noteType: 'list',
        };
        dispatch(changeNoteAction(id, updatedNote));
    };

    const onChangeCheckBox = (id) => {
        const updatedTaskArray = tasksArray.map(task => {
            if (id === task.id) {
                const updatedTask = {
                    id: task.id,
                    noteTask: task.noteTask,
                    checked: !task.checked,
                }
                return updatedTask
            }
            return task
        })
        setTasksArray(updatedTaskArray);
    }

    return (
        <div className='form-body'>
            <div className='listForm-list'>
                <table>
                    {tasksArray?.map((task) => {
                        return (
                            <tbody key={task.id}>
                                <tr>
                                    <th><input type='checkbox' checked={task.checked} id={task.id}
                                        onChange={() => onChangeCheckBox(task.id)}></input></th>
                                    <td><p className='listForm-task-title'>{task.noteTask}</p></td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
            <div className='create-link-placeholder'>
                <Link onClick={onClickBtn} className='form-addBtn' to='/'>
                    Change note
                </Link>
            </div>
        </div>
    );
};

export default ChangeListPage;