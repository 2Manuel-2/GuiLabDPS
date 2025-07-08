"use client"
import React, {useState} from 'react'
import Todo from './Todo'
import styles from "../app/page.module.css";

const Form = () => {
    const[todo,setTodo]=useState({})
    const[todos,setTodos]=useState([
        {todo:'todo 1'},
        {todo:'todo 2'},
        {todo:'todo 3'}
    ])
    const handleChange=e=>setTodo({[e.target.name]:e.target.value})
    const handleClick=e=>console.log('click click')
 return (
    <>
    {todos.map((value,index)=>(<Todo todo={value.todo}/>))}

    <form onSubmit={e=>e.preventDefault()}>
        <label>Agregar Tarea</label><br/>
        <input className={styles.form_input} type='text' name='todo' onChange={handleChange}></input>
        <button className={styles.form_button} onClick={handleClick}>Agregar</button>
    </form>
    {
        todos.map((value,index)=>(
            <Todo todo={value.todo}/>))
    }
 </>
 )
}
export default Form

