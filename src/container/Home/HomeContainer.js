import React, { Suspense } from 'react';
import { Route, Switch,  } from "react-router-dom";
import { connect,  } from "react-redux";
import { bindActionCreators } from 'redux'

const Dashboard = React.lazy(() => import('./components'));
const Home = React.lazy(() => import('./components/Home'));
const NotFound = React.lazy(() => import('../../components/NotFound'));


const AdminContainer = (props) => {
  const auth = true

  return (
    <Suspense fallback={''}>
      <Dashboard>
        <Switch>
          <Route
            exact
            path={`${props.match.path}`}
            render={() => auth ? <Home {...props} /> : ''}
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
  return { actions: bindActionCreators(Object.assign({}), dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
