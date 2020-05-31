const defaultState = {message : {},stt : 0};
const appReducer = (state = defaultState, action : {[type : string] : any}) => {
	switch(action.type){
        case "CALL_USER_SUCCESS":
            return {...state}
        case "CALL_USER":   
            // this.getCart()
            console.log("redux")
            let new_state = {...state}
            new_state.stt++;
            return {...new_state}
        default:
			return state;
	}
}
export default appReducer;