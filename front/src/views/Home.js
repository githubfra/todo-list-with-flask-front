import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/Context";

const Home = () => {
    const {store, actions} = useContext(Context)
    const [ todoss, setTodoss ] = useState({title:'',body:'',done:false})
    const [listo, setListo] = useState(false)

    useEffect(() => {
        actions.getTodos()
    },[listo]);

    const onchange = (e) => {
        setTodoss({...todoss, title:e.target.value})
    }

    const onsubmit = (e) => {
        console.log('todoss', todoss)
        actions.createTodos(todoss,e, setListo, listo)
    }

     console.log('store.todos', store.todos)

    return(
        <>
        <h1>todo list with flask</h1>
        <form onSubmit={(e) => onsubmit(e)}>
        <input type="text" onChange={ (e) => {onchange(e)}}></input>
        <button type="submit">enviar</button>
        </form>
        <ul>
         {
              store.todos?.map((item)=>{
                  return(
                      <li key={item.id}> {item.title} </li>
                  )
              })
        }
        </ul>
        </>
    )
}

export default Home;