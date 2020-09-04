import React from 'react'
import './Todo.css';

// Shards Components
import { Card, CardTitle, CardBody, } from "shards-react";
import { FormCheckbox } from "shards-react";

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id);
    } 

    return (
        <div className="todo">
            <Card>
                <CardBody className="CardBody">   
                    <FormCheckbox checked={todo.complete} onChange={handleTodoClick}></FormCheckbox>
                    <CardTitle>{todo.name}</CardTitle>  
                </CardBody>
            </Card>
            
        </div>
    ) 
}
