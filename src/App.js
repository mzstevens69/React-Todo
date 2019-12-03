import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import NavBar from './components/NavBar';



class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817077286,
          completed: false 
        }
      ],
       todo: ''
    };
  }
    addTodo = event => {
      const newTodo = {task: this.state.todo, completed: false, id: Date.now()};
      this.setState({
        todos: [...this.state.todos, newTodo],
        todo: ''
      })
      event.preventDefault();
    }
  // this component is going to take care of state, and any change handlers you need to work with your state
  changeTodo = event => 
    this.setState({
      [event.target.name]: event.target.value
    });

    toggleTodoComplete = id => {
      let todos = this.state.todos.slice();
      todos = todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      this.setState({ todos });
    
    };
    clearCompletedTodos = event => {
      let todos = this.state.todos.filter(todo => !todo.completed);
        this.setState({ todos });
    };
  render() {
    return (
      <div className='todos' >
        <NavBar/>
        <TodoList
        handleToggleComplete={this.toggleTodoComplete}
        todos={this.state.todos}
        />
        <TodoForm
        value={this.state.todo}
        handleTodoChange={this.changeTodo}
        handleAddTodo={this.addTodo}
        handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
