import React, {Component} from 'react';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import Task from './Components/Task';
import uuid from 'uuid';

class App extends Component {
  state = {
    main: [

    ]
  }
  complete = (id) => {
    this.setState({
      main: this.state.main.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        } return item;
      })
    })
  }
  del = (id) => {
    this.setState({ main: [...this.state.main.filter(item => item.id !== id)] });
  }

  addTask = (title) => {
    const newItem = {
      id: uuid.v4(),
      title,
      done: false
    }
    this.setState({ main: [...this.state.main, newItem] });
  }
  return(){
  return (
    <div className="App">
      <Header />
      <AddTask addTask={this.addTask} />
      <Task value={this.state.main} markDone={this.complete} del={this.del} />
    </div>
  );
}
}

export default App;
