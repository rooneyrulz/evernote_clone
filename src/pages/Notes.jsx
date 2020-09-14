import React from 'react';

import NoteItem from '../components/NoteItem';
import NoteContext from '../context/NoteContext';

const Notes = () => {
  const { notes } = React.useContext(NoteContext);
  console.group(notes);
  return (
    <div className='notes'>
      <h2>All the notes go on here..</h2>

      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </div>
  );
};

export default Notes;
