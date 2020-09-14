import React from 'react';

// Context
import NoteContext from '../context/NoteContext';
import { createNote } from '../actions/note';

// Styles
import { noteStyles } from '../styles/note.module';

const NewNote = () => {
  const { everNote, dispatch } = React.useContext(NoteContext);
  const [newNote, setNewNote] = React.useState({ text: '' });

  const onHandleChange = (e) =>
    setNewNote({ ...newNote, [e.target.id]: e.target.value });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    createNote(dispatch, { id: Math.random().toString(), text: newNote.text });
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
