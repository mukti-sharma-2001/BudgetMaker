
import {ADD_BUDGET} from './constants'
const initialState={
    budgets:[]
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_BUDGET:
            return{
                ...state,
                budgets:[...state.budgets,action.payload]
            }
        default:
            return state
    }
}
export default reducer;