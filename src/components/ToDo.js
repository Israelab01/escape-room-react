import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

function ToDo({toDos, removeToDo, updateToDo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateToDo(edit.id, value);
        setEdit({
            id: null, value: ''
        })
    }

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />
    }

    return toDos.map((toDo, index) => (
        <div className='toDo-row' key={index}>
            <div key={toDo.id}>
                {toDo.text}
            </div>

        </div>
    ));
}


export default ToDo;
