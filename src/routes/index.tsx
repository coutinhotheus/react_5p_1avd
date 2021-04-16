import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/signin';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashborard';
import Professores from '../pages/Professores'

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/professores" component={Professores} isPrivate />

    </Switch>
)

export default Routes;