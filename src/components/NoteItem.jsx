import React from 'react';

// Context
import NoteContext from '../context/NoteContext';
import { updateNote, removeNote } from '../actions/note';

// Styles
import { noteStyles } from '../styles/note.module';

const NoteItem = ({ note }) => {
  const { dispatch } = React.useContext(NoteContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [newNote, setNewNote] = React.useState({});

  const onHandleEdit = (e) => setIsEdit(true);

  const onHandleUpdate = (id) => updateNote(dispatch, id, newNote);

  const onHandleDelete = (id) => removeNote(dispatch, id);

  const onHandleChange = (e) =>
    setNewNote({ ...newNote, [e.target.id]: e.target.value });

  React.useEffect(() => {
    setNewNote({ ...newNote, ...note });
  }, []);

  return (
    <div style={noteStyles.noteItem}>
      <div style={noteStyles.noteItemLeft}>
        {isEdit ? (
          <input
            id='text'
            type='text'
            autoFocus
            value={newNote.text}
            onChange={(e) => onHandleChange(e)}
            style={noteStyles.noteEditInput}
          />
        ) : (
          <p>{note.text}</p>
        )}
      </div>
      <div style={noteStyles.noteItemRight}>
        {isEdit ? (
          <button onClick={(e) => onHandleUpdate(note.id)}>Update</button>
        ) : (
          <button onClick={(e) => onHandleEdit(e)}>Edit</button>
        )}

        <button onClick={(e) => onHandleDelete(note.id)}>Remove</button>
      </div>
    </div>
  );
};

export default NoteItem;
