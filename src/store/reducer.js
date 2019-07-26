
var initialState = {
     initValue: 23,
}
export default (state=initialState,action) => {
     var newState = JSON.parse(JSON.stringify(state))
     if(action.type === 'add_good' && action.index ===0){
        console.log('newState',newState);
        newState.initValue = newState.initValue+1
        return newState
     }
     if(action.type === 'dele_good' && action.index ===0){
        newState.initValue = newState.initValue-1
        return newState
    }
    return state
}