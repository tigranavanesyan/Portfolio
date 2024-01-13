import { SET_ACTIVE_LINK, SET_SCROLL} from "../action/action";

const initialState = {
    activeLink:'/',
    scroll:0,
    showToTopBtn:false
}

export default function  reducer(state=initialState,action){
    switch (action.type){
        case SET_ACTIVE_LINK:{
            return {
                ...state,
                activeLink:action.payload.link
            }
        }
        case SET_SCROLL:{
            return {
                ...state,
                scroll:action.payload.top,
                showToTopBtn:action.payload.showBtn
            }
        }

        default:{
            return state
        }
    }

}