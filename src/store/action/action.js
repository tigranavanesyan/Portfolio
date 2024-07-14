export const SET_ACTIVE_LINK = "SET_ACTIVE_LINK"
export const SET_SCROLL = "SET_SCROLL"
export const SET_INPUT_VALUE = "SET_INPUT_VALUE"
export const CLEAR_INPUT_VALUE = "CLEAR_INPUT_VALUE"

export function setActiveLink(link){
    return{
        type:SET_ACTIVE_LINK,
        payload:{link}
    }
}
export function setScroll(top,showBtn){
    return{
        type:SET_SCROLL,
        payload:{top,showBtn}
    }
}

export function setInputValue(element){
    return{
        type:SET_INPUT_VALUE,
        payload:{element}
    }
}

export function clearInputValue(){
    return{
        type:CLEAR_INPUT_VALUE
    }
}
