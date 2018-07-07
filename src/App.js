import React, { Component } from 'react';
import './App.css';
import './index.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> ATHOBE'S TODOLIST </h1>
        <TodoList/>
        
       
      </div>
    );
  }
}

export default App;
