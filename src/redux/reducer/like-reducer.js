const initialState = {
    likedProducts: []
}


const likeReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case "LIKE-PRODUCTS":
            return {
                likedProducts: [ ...state.likedProducts,action.product]
            }
        default:
            return state
    } 
}

export default likeReducer