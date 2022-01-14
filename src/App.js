import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album/Album';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import NotFound from './pages/NotFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
