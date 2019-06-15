import React, { Component } from 'react';
import Detail from './Detail';
import PropTypes from 'prop-types';

class Task extends Component {

    render() {
        return this.props.value.map((list) => (
            <Detail value={list} key={list.id} complete={this.props.complete} del={this.props.del} />
        ));


    }
}

Task.prototypes = {
    value: PropTypes.array.isRequired
}

export default Task;