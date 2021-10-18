import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'
import AuthContainer from "../../container/auth/AuthContainer";
import HomeContainer from "../../container/Home/HomeContainer";
import NoPageFound from "../NotFound";

export default function CommonRoute(props) {
   const auth = false
 
   return (
      <Router>
         <Switch>
            <Route
               path="/auth"
               render={(props) => {
                  return <AuthContainer {...props} />;
               }}
            />
            <Route
               path="/"
               render={(props) => {
                  return auth ? <HomeContainer {...props} /> : <Redirect to="/auth/login" />;
               }}
            />
            <Route exact path="*" render={() => <NoPageFound />} />
         </Switch>
      </Router>
   );
}
