import React from 'react';
import NoteItem from '../components/NoteItem';

const Notes = () => {
  const notes = [
    { id: '3e0e9eje09', text: 'It is note one' },
    { id: '4984rru29r293', text: 'It is note two' },
    { id: '289euwie98e9', text: 'It is note three' },
    { id: '3ewue8w9e', text: 'It is note four' },
    { id: '3892ewew9e8', text: 'It is note five' },
  ];

  return (
    <div className='notes'>
      <h2>All the notes go on here..</h2>

      {notes.map((note) => (
        <NoteItem item={note} />
      ))}
    </div>
  );
};

export default Notes;
