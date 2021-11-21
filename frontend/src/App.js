import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import MainPage from './components/main/main';
import Chat from './components/chat/chat';

function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("myUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            {
              user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
            </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;