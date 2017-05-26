
import React, { Component } from 'react';
import update from 'react-addons-update';

import TeamDumb from 'dumb/team.jsx';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            TeamDumb(this.state)
        );
    }
}
