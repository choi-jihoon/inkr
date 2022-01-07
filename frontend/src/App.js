import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import MainView from "./components/MainView";
import ArtistPortfolio from "./components/ArtistPortfolio";
import MyPortfolio from "./components/MyPortfolio";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <MainView />
          </Route>
          <Route path='/artists/:artistId'>
            <ArtistPortfolio />
          </Route>
          <Route path='/my-portfolio'>
            <MyPortfolio />
          </Route>
          <Route>
            Page Not Found.
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
