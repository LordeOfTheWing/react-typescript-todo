import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FunctionComponent<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
        return (
          <SingleTodo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
