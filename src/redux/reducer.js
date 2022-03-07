import {combineReducers } from 'redux';
import filtersReducer from '../components/FilterSlice';
import todoListReducer from '../components/TodoSlice';

const rootReducer = combineReducers({
    filters:filtersReducer,
    todoList: todoListReducer
})
export default rootReducer