import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {changeToDoAction, removeToDoAction} from '../redux/action/actions'


const ToDos = ({todoArr}) => {

    const dispatch = useDispatch()
  
    const handleSubmit = (e) => {
      e.preventDefault()
    }

  const handleStatus = (id) => {
    // e.preventDefault()
    dispatch(changeToDoAction(id))
    // setStatus('')
  }

  const handleDelete = (id) => {
    dispatch(removeToDoAction(id))
  }

  return (
      <div className="collection">
        {
            todoArr && todoArr.map((todo) => (
              <div className="collection-item" key={todo.id}>
                <span
                  style={{ textDecoration: todo.isDone ? "line-through" : "none", }}
                  onClick={() => {}}
                >
                  {todo.content}
                </span>
                <a
                  href="#~"
                  className="secondary-content"
                  onSubmit={handleSubmit}
                  onClick={() => handleDelete(todo.id)}
                >
                  <i className="material-icons red-text text-accent-1">delete</i>
                </a>
                <a
                  href="#~"
                  onClick={() => handleStatus(todo.id)}
                  className="secondary-content"
                >
                  <i className={`material-icons ${!todo.isDone ? "blue-text text-lighten-4" : "amber-text text-darken-2"}`}>
                    check
                  </i>
                </a>
                </div>
            ))
        }
      </div>
  )
}


  // return (
  //     <>
  //       {
  //           todoArr && todoArr.map((todo) => (
  //               <div className='collection-item' key={todo.id} onClick={() => handleStatus(todo.id)} >
  //                   <span style={{ textDecoration: todo.isDone ? "line-through": "none" }}>{todo.content}</span>
  //                   <br />
  //               </div>
  //           ))
  //       }
  //     </>
  // )
// }

export default ToDos