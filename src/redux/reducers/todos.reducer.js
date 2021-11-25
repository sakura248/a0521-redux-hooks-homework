import { v4 as uuidv4 } from 'uuid'
import { NEW_TO_DO, DONE_TO_DO, REMOVE_TO_DO } from '../action/actions'

const initState = {
    toDoList: [
        { id: uuidv4(), content: "Buy Bread", isDone: false },
        { id: uuidv4(), content: "Buy Milk", isDone: true },
        { id: uuidv4(), content: "Buy Milk", isDone: false },
        { id: uuidv4(), content: "Buy Milk", isDone: false },
        { id: uuidv4(), content: "Buy water", isDone: false },
        { id: uuidv4(), content: "Buy Milk", isDone: false },
    ]
}

const todosReducer = (state = initState, action) => {

    switch (action.type) {
        case NEW_TO_DO:
            action.payload.id = uuidv4()
            action.payload.isDone = false

            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            }
        
        case DONE_TO_DO:
            // list style
            return {
                ...state,
                toDoList: state.toDoList.map((todo) => {
                        if (todo.id !== action.payload) return todo;
                        return {
                            ...todo,
                            isDone: true,
                        };
                        }),
                };

        case REMOVE_TO_DO:
            return {
                ...state,
                toDoList: state.toDoList.filter((todo) => 
                    todo.id !== action.payload
                ),
            }

        default:
            return state;
    }
}

export default todosReducer