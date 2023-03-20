import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const LogIn = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn)
  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({type: 'logIn'})
  }
  const logOut = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      dispatchFunc({type: 'logOut'})
    }
  }
  return (
    <div>
      {isLoggedIn ? 
      (<button onClick={logOut} className="logout">Log Out</button>) : 
      (<form onSubmit={submit} >
          <label htmlFor="email">Email</label>
          <input id="email" name="email"/>
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  )
}

export default LogIn