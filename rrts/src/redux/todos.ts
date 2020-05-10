import { Dispatch } from 'redux'
import axios from 'axios'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

enum actionTypes {
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  DELETE_TODO = 'DELETE_TODO',
}

interface FetchTodosAction {
  type: actionTypes.FETCH_TODOS_SUCCESS
  todos: Todo[]
}

interface DeleteTodoAction {
  type: actionTypes.DELETE_TODO
  id: number
}

type Action = FetchTodosAction | DeleteTodoAction

const url = 'https://jsonplaceholder.typicode.com/todos'

const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)

    dispatch<FetchTodosAction>({
      type: actionTypes.FETCH_TODOS_SUCCESS,
      todos: response.data,
    })
  }
}

const deleteTodo = (id: number) => {
  return {
    type: actionTypes.DELETE_TODO,
    id,
  }
}

const todoReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_SUCCESS:
      return action.todos

    case actionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id)

    default:
      return state
  }
}

export { todoReducer, fetchTodos, deleteTodo }
