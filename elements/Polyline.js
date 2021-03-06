import React, {Component, PropTypes} from 'react';
import Path from './Path';
import {pathProps} from '../lib/props';
import extractPolyPoints from '../lib/extract/extractPolyPoints';

export default class extends Component{
    static displayName = 'Polyline';
    static propTypes = {
        ...pathProps,
        points: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
    };

    static defaultProps = {
        points: ''
    };

    setNativeProps = (...args) => {
        this.root.getNativeElement().setNativeProps(...args);
    };

    render() {
        let points = this.props.points;
        if (Array.isArray(points)) {
            points = points.join(',');
        }

        return <Path
            ref={ele => {this.root = ele;}}
            {...this.props}
            d={`M${extractPolyPoints(points)}`}
        />;
    }
}
