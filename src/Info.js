import React from 'react'
import { Alert } from "shards-react";

export default function Info({ todosQty }) {
    return (
        <div>
            <Alert theme="light">
                <strong>{ todosQty }</strong> left to do
            </Alert>
        </div>
    )
}
 