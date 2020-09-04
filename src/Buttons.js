import React from 'react'
import { FormInput } from "shards-react";
import { Button, ButtonGroup } from "shards-react";

import './Buttons.css'

export default function Buttons({ todoNameRef, handleAddTodo, handleClearTodos }) {
    return (
        <div className="buttons">
            <FormInput innerRef={todoNameRef} type="text" placeholder="Add a to do"/>
            <ButtonGroup> 
                <Button onClick={handleAddTodo}>Add To do</Button>
                <Button onClick={handleClearTodos}>Clear Completed</Button>
            </ButtonGroup>
        </div>
    )
}
