export const addTodo = (data)=>{
    return{
        type:'todoList/addTodo',
        payload:data
    }
} 

export const toggleStatus = (todoId)=>{
    return{
        type:'todoList/toggleStatus',
        payload:todoId
    }
} 

export const searchFilterChange = (text)=>{
    return{
        type:'filters/searchFilterChange',
        payload:text
    }
} 

export const statusFilterChange = (status)=>{
    return{
        type:'filters/statusFilterChange',
        payload:status
    }
} 

export const priorityFilterChange = (priorities)=>{
    return{
        type:'filters/priorityFilterChange',
        payload:priorities
    }
}