import {CLEAR_INPUT_VALUE, SET_ACTIVE_LINK, SET_INPUT_VALUE, SET_SCROLL} from "../action/action";

const initialState = {
    activeLink:'/',
    scroll:0,
    showToTopBtn:false,
    formContacts:{
        from_name: '',
        from_email: '',
        message: ''
    }
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
        case SET_INPUT_VALUE : {
            return {
                ...state,
                formContacts:{
                    ...state.formContacts,
                    [action.payload.element.target.name]:action.payload.element.target.value
                }
            }
        }
        case CLEAR_INPUT_VALUE : {
            return {
                ...state,
                formContacts: initialState.formContacts
            }
        }

        default:{
            return state
        }
    }

}