import {createStore} from "redux"
import mainReducer from "../reducer/main-reducer"


const store = createStore(mainReducer);

export { store }