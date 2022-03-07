const initState = [
        {id:1, name:'Learn1', completed:false, priority:'Medium'},
        {id:2, name:'Learn2', completed:true, priority:'High'},
        {id:3, name:'Learn3', completed:false, priority:'Low'}
]

const todoListReducer = (state = initState, action) =>{
    switch(action.type){
        case 'todoList/addTodo':
            return [...state, action.payload] 
        case 'todoList/toggleStatus':
            return state.map(todo=>
                todo.id ===action.payload 
                ? {...todo,completed:true}
                :todo)
        default:
            return state;
    }
}
export default todoListReducer;