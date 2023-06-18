import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import NotesOutput from '../components/NotesOutput';
import { Link } from 'react-router-dom';

const Main = () => {
    const notes = useSelector((state) => state.notes.notes)
    return (
        <Fragment>
            {notes?.length > 0 ? (
                <Fragment>
                    <NotesOutput />
                    <div className='create-link-placeholder'>
                        <Link className='create-link' to='/createNew-form'>Add note</Link>
                    </div>
                </Fragment>) :
                (
                    <div className='create-link-placeholder'>
                        <Link className='create-link' to='/createNew-form'>Create first note</Link>
                    </div>
                )

            }
        </Fragment>
    );
};

export default Main;