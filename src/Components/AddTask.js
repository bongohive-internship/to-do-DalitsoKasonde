import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        title: ''
    }

    onAdd = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTask(this.state.title);
        this.setState({ title: '' });

    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ }} >
                <input type="text" name="title" placeholder="Add a Task" style={{ }}
                    value={this.state.title} onChange={this.onAdd} />
                <input type="submit" value="Add"  />

            </form>

        )
    }
}
export default AddTask;