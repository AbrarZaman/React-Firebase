import React from 'react';
import './App.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,} from "firebase/auth";
import { auth } from './firebase/init';

function App() {
  const [user,setUser] = React.useState({});
  const [loading,setLoading] = React.useState(true);
  React.useEffect(() =>{
    onAuthStateChanged(auth, (user) =>{
      setLoading(false);
      console.log(user);
      if (user){
        setUser(user)
      }
    })
  }, [])
  function register() {
    createUserWithEmailAndPassword(auth, 'abid200@gmail.com', 'test123')
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, 'abid200@gmail.com', 'test123')
      .then(({user}) => {
        console.log(user);
        setUser(user)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth)
    setUser({})

  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'Loading.....' :user.email}
    </div>
  );
}

export default App;
