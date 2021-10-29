import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthContainer from "../../container/auth/AuthContainer";
import HomeContainer from "../../container/Home/HomeContainer";
import NoPageFound from "../NotFound";

export default function CommonRoute(props) {

   return (
      <Router>
         <Switch>
            <Route
               path="/auth"
               render={(props) => (<AuthContainer {...props} />)}
            />
            <Route
               path="/"
               render={(props) => {
                  return <HomeContainer {...props} />;
               }}
            />
            <Route exact path="*" render={() => <NoPageFound />} />
         </Switch>
      </Router>
   );
}
