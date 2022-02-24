const initState = {
    filters:{
        search:'',
        status:'All'
    },
    todoList:[
        {id:1, name:'Learn1', completed:false, priority:'Medium'},
        {id:2, name:'Learn2', completed:false, priority:'High'},
        {id:3, name:'Learn3', completed:false, priority:'Low'}
    ]
}
const rootReducer = (state = initState, action) =>{
    switch(action.type){
        case 'todoList/addTodo':
            return{
                ...state,
                todoList:[
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state;
    }
}
export default rootReducer