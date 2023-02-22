const initialState  = {
    email: "",
    password: ""
}

const mainReducer = (state=initialState, action) =>{

    console.log(action);
    //get data

    switch (action.type) {
        case "CREATE_EMAIL":
            return {
                email: action.email,
            }
        default:
            return state
    }
}

export default mainReducer