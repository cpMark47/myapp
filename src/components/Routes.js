import React, { Component } from 'react';
import{ Router, Stack, Scene } from 'react-native-router-flux';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

class Routes extends Component<{}> {
    render() {
        return(
          <Router>
            <Stack key="root" hideNavBar={true}>
              <Scene key="login" component={Login} title="Login" />
              <Scene key="signup" component={Signup} title="Register" initial={true} />
            </Stack>
          </Router>
        );
    }
}

export default Routes;
