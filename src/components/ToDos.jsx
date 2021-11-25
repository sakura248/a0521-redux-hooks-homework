import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {changeToDoAction} from '../redux/action/actions'


const ToDos = ({todoArr}) => {

    const dispatch = useDispatch()
  
    const handleSubmit = (e) => {
      e.preventDefault()
    }

  const handleStatus = (status) => {
    // e.preventDefault()
    dispatch(changeToDoAction(status))
    // setStatus('')
  }

//   return (
//       <div className="collection">
//         {
//             todoArr && todoArr.map((todo) => (
//               <div className="collection-item" key={todo.id}>
//                 <span
//                   style={{ textDecoration: todo.isDone ? "line-through" : "none", }}
//                   onClick={() => {}}
//                 >
//                   {todo.content}
//                 </span>
//                 <a
//                   href="#~"
//                   className="secondary-content"
//                   onSubmit={handleSubmit}
//                   onClick={() => {}}
//                 >
//                   <i className="material-icons red-text text-accent-1">delete</i>
//                 </a>
//                 <a
//                   href="#~"
//                   onClick={(e) => handleStatus(todo.id)}
//                   className="secondary-content"
//                 >
//                   <i className={`material-icons ${!todo.isDone ? "blue-text text-lighten-4" : "amber-text text-darken-2"}`}>
//                     check
//                   </i>
//                 </a>
//                 </div>
//             ))
//         }
//       </div>
//   )
// }



// const ToDos = ({todoArr}) => {
//   const [status, setStatus] = useState(false)
//   const dispatch = useDispatch()

//   const handleStatus = (id) => {
//     // console.log(e)
//     dispatch(changeToDoAction(id))
//     // setStatus('')

//   }

  return (
      <>
        {
            todoArr && todoArr.map((todo) => (
                <div className='collection-item' key={todo.id} onClick={() => handleStatus(todo.id)} >
                    <span style={{ textDecoration: todo.isDone ? "line-through": "none" }}>{todo.content}</span>
                    <br />
                </div>
            ))
        }
      </>
  )
}

export default ToDos