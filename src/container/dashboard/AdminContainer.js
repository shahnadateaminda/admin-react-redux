import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect,useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import * as  UserService from '../../services/user';

const Dashboard = React.lazy(() => import('../dashboard/components'));
const DashboardPage = React.lazy(() => import('../dashboard/components/dashboardPage'));

const NotFound = React.lazy(() => import('../../components/NotFound'));


const AdminContainer = (props) => {
  const auth = useSelector(state => state.auth.authenticated)
  return (
   <Suspense fallback={''}>
    <Dashboard>
      <Switch>
        <Route
          exact
          path={`${props.match.path}`}
          render={() => auth?<DashboardPage {...props} />:''}
        />
        
        
        <Route
          exact
          path={`${props.match.path}/*`}
          render={() => <NotFound {...props} />} />
        

      </Switch>
      </Dashboard>
      </Suspense>
  )
}

function mapStateToProps(state) {

  return {
    userauth: state?.auth,
    users: state?.users

  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Object.assign({}, UserService), dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
