import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Detail extends Component {
    styling = () => {
        return {
            textDecoration: this.props.value.done ? "line-through" : "none",
            padding: '10px',
            background: '#F0F2F2'
        }
    }
    complete = (e) => {
        console.log(this.props);
    }
    render() {
        const { id, title } = this.props.value;
        return (
            <div style={this.styling()}>
                <p>
                    <input type="checkbox" onChange={this.props.complete.bind(this, id)} />{' '}
                    {title}
                    <button style={{}} onClick={this.props.del.bind(this, id)}>Delete</button>
                </p>
            </div>
        )
    }
}

Detail.prototypes = {
    value: PropTypes.object.isRequired
}



export default Detail;