import React from 'react';
import Button from '@material-ui/core/Button';

const TodoForm = props => {
    return (
        <form>
            <input
                type='text' 
                onChange={props.handleTodoChange}
                name='todo'
                value={props.value}
                placeholder='add todo here'
                margin='normal'
                />
            <Button 
            onClick={props.handleAddTodo}
            size='normal'
            color='primary'
            round
            >Add Todo</Button> 
            <Button 
            onClick={props.handleClearTodos}
            size='small'
            color='primary'
            >                
            Clear</Button>              

        </form>
    )
}       

export default TodoForm;