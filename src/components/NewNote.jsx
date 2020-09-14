import React from 'react';

const NewNote = () => {
  return (
    <div className='new__note'>
      <form>
        <input type='text' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default NewNote;
