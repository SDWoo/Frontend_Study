import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    flex: 1; // 자신이 사용할 수 있는 영역 다 사용
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`


function TodoList() {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map(
                todo =>
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                    />
            )}
        </TodoListBlock>
    )
}

export default TodoList;