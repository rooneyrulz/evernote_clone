import React from 'react';

// Context
import AuthContext from '../context/AuthContext';
import NoteContext from '../context/NoteContext';
import { createNote } from '../actions/note';

// Styles
import { noteStyles } from '../styles/note.module';

const NewNote = () => {
  const {
    authData: { user },
  } = React.useContext(AuthContext);
  const { dispatch } = React.useContext(NoteContext);

  const [newNote, setNewNote] = React.useState({ text: '' });

  const onHandleChange = (e) =>
    setNewNote({ ...newNote, [e.target.id]: e.target.value });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      text: newNote.text,
      private: false,
      owner: user.id,
    };
    createNote(dispatch, payload);
  };

  return (
    <div className='new__note' style={noteStyles.newNoteContainer}>
      <form style={noteStyles.noteForm} onSubmit={(e) => onHandleSubmit(e)}>
        <input
          id='text'
          type='text'
          style={noteStyles.noteInput}
          onChange={(e) => onHandleChange(e)}
        />
        <button type='submit' style={noteStyles.btnNote}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewNote;
