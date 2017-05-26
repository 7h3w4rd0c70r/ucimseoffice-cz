
import React, { Component } from 'react';
import update from 'react-addons-update';

import MosDumb from 'dumb/mos.jsx';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            MosDumb(this.state)
        );
    }
}
