import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RoomProvider } from './contexts/RoomContext'
import Main from './pages/Main'
import Login from './pages/Login'
import Loading from './components/Loading'
import {  useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'



function App() {
  const [user,loading] = useAuthState(auth)

  if(loading){
    return <Loading />
  }
  
  if(!user){
    return <Login />
  }
  return (
    <Router>
        <RoomProvider>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        </RoomProvider>
    </Router>
  );
}

export default App;
