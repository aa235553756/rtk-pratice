import { useCallback, useRef, useState } from 'react'
import './App.css'
import { logIn, logOut } from './feature/user'
import { useSelector, useDispatch } from 'react-redux'
import { chageColor } from './feature/color'

function App() {
  const dispatch = useDispatch(); //函式
  const inputRef = useRef<HTMLInputElement>(null)

  const color = useSelector(({ color }: any) => {
    return color.value
  })


  return (
    <div className="App" style={{ color: color }}>
      <Profile dispatch={dispatch} logIn={logIn} logOut={logOut} />
      <br />
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          const color = inputRef.current?.value
          dispatch(chageColor(color))
        }}
      >更換</button>
    </div>
  )
}

export default App

function Profile({ dispatch, logIn, logOut }: any) {
  const user = useSelector((state: any) => {
    // console.log(state);
    return state.user.value
  })
  return (<><h1>Profile Page</h1>
    <p>Name:{user.name}</p>
    <p>Age:{user.age}</p>
    <p>Email:{user.email}</p>
    <button onClick={() => {
      dispatch(logIn({
        name: 'siora',
        age: 23,
        email: '123@gmail.com'
      }));
    }}>登入</button>
    <button onClick={() => {
      dispatch(logOut());
    }}>登出</button></>);
}
