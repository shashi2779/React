import React from 'react';
import Feed from './components/Feed'
import Login from './components/Login'
import Profile from './components/Profile'
import Signup from './components/Signup'
import PageNotFound from './components/PageNotFound'
import { Switch, Route } from 'react-router-dom'
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Switch>

          <Route path={'/login'}>
            <Login></Login>
          </Route>

          <Route path={'/signup'}>
            <Signup></Signup>
          </Route>

          <Route path={'/feed'}>
            <Feed></Feed>
          </Route>


          <Route path={'/profile'}>
            <Profile></Profile>
          </Route>


          <Route>
            <PageNotFound></PageNotFound>
          </Route>


        </Switch>
      </AuthContextProvider>
    </>



  );
}

export default App;
