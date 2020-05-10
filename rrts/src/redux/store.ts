import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { todoReducer, Todo } from './todos'

export interface StoreState {
  todos: Todo[]
}

const reducers = combineReducers<StoreState>({ todos: todoReducer })

const store = createStore(reducers, applyMiddleware(thunk))

export { store }
