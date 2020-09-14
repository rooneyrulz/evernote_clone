import React from 'react';

// Styles
import { noteStyles } from '../styles/note.module';

const NewNote = () => {
  return (
    <div className='new__note' style={noteStyles.newNoteContainer}>
      <form style={noteStyles.noteForm}>
        <input type='text' style={noteStyles.noteInput} />
        <button type='submit' style={noteStyles.btnNote}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewNote;
