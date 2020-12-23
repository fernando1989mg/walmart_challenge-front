import React from 'react'
import Home from './screens/Home'
import SearchResult from './screens/SearchResult'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route 
            path="/search" 
            render={(props) => <SearchResult {...props}/>} 
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
