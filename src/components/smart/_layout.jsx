
import React, { Component } from 'react';
import update from 'react-addons-update';

import _layoutDumb from 'dumb/_layout.jsx';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            _layoutDumb(this.state)
        );
    }
}
