export const SET_ACTIVE_LINK = "SET_ACTIVE_LINK"
export const SET_SCROLL = "SET_SCROLL"

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
