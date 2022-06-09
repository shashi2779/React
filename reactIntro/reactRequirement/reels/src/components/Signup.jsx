import React, { useState } from 'react'
import { auth,db } from '../firebase'; //firebase stire ka db
import { createUserWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util';
//firbasestore data collect- ki kisko kya dikhana h
import {  addDoc,collection } from "firebase/firestore";

function Signup() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [name, setName] = useState("")
  const [loder, setLoder] = useState(false)
  const [error, setError] = useState("")
  const [user, setUser] = useState(null)


  let processSignUp = async () => {
    try {
      setLoder(true)
      let userCred = await createUserWithEmailAndPassword(auth, email, password)
      //  console.log(userCred.user)
      const docRef = await addDoc(collection(db, "usersData"), {
        // "email":email,
        email,
        name,
        reelsIds: [],
        profileImgUrl: "",
        userId: userCred.user.uid
    });
    setUser(userCred.user);
    } catch (err) {
      setError(err.message)
      setTimeout(() => {
        setError("")
      }, 2000)
    }
    setLoder(false)
  }
  return (
    <>
      {
        error != "" ? <h1>Error is {error}</h1> :
          loder == true ? <h1>...Loding</h1> :
          user != null ?
              <>
                <h1>signed up user is {user.uid}</h1>
                
              </>:
            <>
              <input type={'email'} placeholder='enter email' onChange={(e) => setEmail(e.target.value)}></input><br></br>
              <input type={'password'} placeholder='enter password' onChange={(e) => setPassword(e.target.value)}></input><br></br>
              <input type={'text'} placeholder='full name' onChange={(e) => setName(e.target.value)} ></input><br></br>
              <button type='click' onClick={processSignUp}>Signup</button>
            </>
      }

    </>
  )
}

export default Signup