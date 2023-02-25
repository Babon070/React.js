const initialState  = {
   user: null
}

const mainReducer = (state=initialState, action) =>{

    //get data

    switch (action.type) {
        case "CREATE_USER":
            return {
                user: action.user
            }
        default:
            return state
    }
}

export default mainReducer