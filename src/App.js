import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Firmas from './components/SearchNonProfits/Firmas/Firmas';
import Sidebar from './ProfilePage/Sidebar';
import Nav from './ProfilePage/nav';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/profile">
        <Sidebar/>
        <Nav/>
        <Firmas/>
      </Route>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
