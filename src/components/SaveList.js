import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SaveList = () => {
  const isLoggedIn = useSelector((state)=> state.isLoggedIn)
  const dispatchFunc = useDispatch();
  const state = useSelector((state) => state);

  const handleSave = () => {
    const stateJSON = JSON.stringify(state);
    localStorage.setItem('state', stateJSON);
  }

  const handleClear = () => {
    dispatchFunc({type: 'clearAll'});
    localStorage.removeItem('state');
  }

  return (
    <div className='save'>
      {!isLoggedIn && <p>You must be logged in to save the list.</p>}
      {isLoggedIn && (
        <>
          <button onClick={handleSave}>SAVE</button>
          <button onClick={handleClear}>CLEAR</button>
        </>
      )}
    </div>
  )
}

export default SaveList