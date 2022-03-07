import { createSelector } from "reselect"

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusFilterSelector,
    prioritiesFilterSelector,
    (todoList , searchText, status, priorities) => {
        return todoList.filter( (todo)=>{
            if(status ==='All'){
                return priorities.length
                    ? todo.name.includes(searchText) && priorities.includes(todo.priorities) 
                    : todo.name.includes(searchText)
            }
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed)  &&
                (priorities.length ? priorities.includes(todo.priorities): true)
            )
    })
})