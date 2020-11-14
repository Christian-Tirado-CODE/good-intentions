import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchNonProfits from './components/SearchNonProfits/SearchNonProfits';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/search-non-profits">
        <SearchNonProfits/>
      </Route>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
