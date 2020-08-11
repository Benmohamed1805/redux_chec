const CountReducer=(state=0,action)=>{
    if(action.type==="COUNT"){
        return action.payload
    }else if (action.type==='INCREMENT'){
        return state+1
    
    }else if(action.type==="DECREMENT"){
        return state-1
    
    }else{   
    return state
}
}
export default CountReducer
