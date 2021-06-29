import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RoomProvider } from './contexts/RoomContext'
import Main from './pages/Main'

function App() {
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
