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
        <RoomProvider>
           <Main />
        </RoomProvider>
  );
}

export default App;
