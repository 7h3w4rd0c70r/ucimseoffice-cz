
import React, { Component } from 'react';

const Icons = require.context('assets/icons', true);

export default class Icon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: null
        };

        try {
            this.state.icon = Icons('./' + props.name + '.svg');
        } catch (Ex) {
            console.log('Icon ' + props.name + ' not found');
        }
    }

    render() {
        const Icon = this.state.icon.default;
        let width = '1.5rem', height = '1.5rem', color = 'black';
        if (typeof this.props.size == 'number') {
            width  = String(this.props.size + 'px');
            height = String(this.props.size + 'px');
        } else if (typeof this.props.size == 'string') {
            switch (this.props.size) {
                case 'mini':    width = '.4rem';  height = '.4rem';         break;
                case 'tiny':    width = '.5rem';  height = '.5rem';         break;
                case 'small':   width = '.75rem'; height = '.75rem';        break;
                case 'large':   width = '1rem';   height = '1rem';          break;
                case 'big':     width = '2rem';   height = '2rem';          break;
                case 'huge':    width = '4rem';   height = '4rem';          break;
                case 'massive': width = '8rem';   height = '8rem';          break;
                default: width = this.props.size; height = this.props.size; break;
            }
        } else if (typeof this.props.size == 'object') {
            if (typeof this.props.size.width == 'number')
                width = String(this.props.size.width + 'px');
            else if (!this.props.size.width)
                width = '1.5rem';
            else
                width = this.props.size.width;
            
            if (typeof this.props.size.height == 'number')
                height = String(this.props.size.height + 'px');
            else if (!this.props.size.height)
                height = '1.5rem';
            else
                height = this.props.size.height;
        }

        if (typeof this.props.color == 'string') {
            color = this.props.color;
            //if (/^(\.)/.test())
        }

        if (this.state.icon)
            return <Icon fill={color} width={width} height={height} viewBox='18 18 40.00 40.00' />;
        return <span/>;
    }
}
