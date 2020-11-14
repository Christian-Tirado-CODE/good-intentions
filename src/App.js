import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage';
import Nav from './ProfilePage/nav';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/profile">
        <Nav/>
        <ProfilePage/>
      </Route>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
