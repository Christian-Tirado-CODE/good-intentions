
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchNonProfits from './components/SearchNonProfits/SearchNonProfits';
import ProfilePage from './components/Profile/Profile';
import HeroSlider from './components/UI/HeroSlider/HeroSlider';
import EventMap from './pages/EventsMap/EventsMap';
import Home from './shared/pages/Home/Home';
import MainNavigation from './shared/components/MainNavigation/MainNavigation';
function App() {
  return (
    
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/> 
      <Route path="/search-non-profits">
        <SearchNonProfits/>
      </Route> 
      <Route path="/organization/:name" component={ProfilePage}/>     
      <Route path="/slider/" component={HeroSlider}/>     
      <Route path="/events-map/" component={EventMap}/>     
    </Switch>
    </BrowserRouter>
  );
}

export default App;
