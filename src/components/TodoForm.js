import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
        const [value, setValue] = useState("");

        const handleSubmit = e => {
            e.preventDefault();

            addTodo(value);

            setValue("")
        }
    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input type='text' 
                className='todoInput'
                value={value}
                placeholder='Quelle tache souhaitez-vous ajouter?' 
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todoButton'>Ajouter</button>
        </form>
    )
}
