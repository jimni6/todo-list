import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
        const [value, setValue] = useState(task.task);

        const handleSubmit = e => {
            e.preventDefault();

            editTodo(value, task.id);

            setValue("")
        }
    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input type='text' 
                className='todoInput'
                value={value}
                placeholder='Mettre à jour la tache' 
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todoButton'>Changer</button>
        </form>
    )
}
