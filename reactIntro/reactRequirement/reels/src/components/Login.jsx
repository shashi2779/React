import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
// import { async } from '@firebase/util';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [loder, setLoder] = useState(false)
  const [error, setError] = useState("")
  // const [mainLoder,setMainLoder] = useState(true)

  let trackEmail = (e) => {
    setEmail(e.target.value)
  }

  let trackPassword = (e) => {
    setPassword(e.target.value)
  }

  let userDetrailSubmit = async () => {
    // alert(email + " " + password)
    try {
      setLoder(true)
      let userCred = await signInWithEmailAndPassword(auth, email, password)
      //  console.log(userCred.user)
      setUser(userCred.user)
    } catch (err) {
      setError(err.message)
      setTimeout(() => {
        setError("")
      }, 2000)
    }
    setLoder(false)
  }

  const signout = async () => {
    await signOut(auth)
    setUser(null)
  }



  return (
    <>
      {
       
        error != "" ? <h1>Error is {error}</h1> :
          loder == true ? <h1>...Loding</h1> :
            user != null ?
              <>
                <h1>user is {user.uid}</h1>
                <button onClick={signout}>signout</button>
              </>
              :
              <>
                <input value={email} type={'email'} placeholder='enter email' onChange={trackEmail}></input><br></br>
                <input value={password} type={'password'} placeholder='enter password' onChange={trackPassword}></input><br></br>
                <button type='click' onClick={userDetrailSubmit}>Login</button>
              </>
      }

    </>
  )
}

export default Login