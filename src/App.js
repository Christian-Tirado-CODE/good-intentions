import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchNonProfits from './components/SearchNonProfits/SearchNonProfits';
import ProfilePage from './components/Profile/Profile';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/search-non-profits">
        <SearchNonProfits/>
      </Route> 
      <Route path="/organization/:name" component={ProfilePage}/>     
    </Switch>
    </BrowserRouter>
  );
}

export default App;
