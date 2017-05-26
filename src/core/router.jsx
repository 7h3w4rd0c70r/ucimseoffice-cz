
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import _layoutSmart from 'smart/_layout.jsx';

export default (
    <Router>
        <Switch>
            <Route path='/' component={_layoutSmart} />
        </Switch>
    </Router>
);
