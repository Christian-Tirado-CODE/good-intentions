
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchNonProfits from './components/SearchNonProfits/SearchNonProfits';
import ProfilePage from './components/Profile/Profile';
import HeroSlider from './components/UI/HeroSlider/HeroSlider';
import UserProfile from './pages/UserProfile/UserProfile';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/search-non-profits">
        <SearchNonProfits/>
      </Route> 
      <Route path="/organization/:name" component={ProfilePage}/>     
      <Route path="/user-profile" component={UserProfile}/>     
      <Route path="/slider/" component={HeroSlider}/>     
    </Switch>
    </BrowserRouter>
  );
}

export default App;
