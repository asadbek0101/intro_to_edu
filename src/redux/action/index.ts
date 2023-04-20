
export const set_menu_status = (menuStatus: any)=>{
    return{
        type: "SET_MENU_STATUS",
        payload: menuStatus
    }
}

export const set_user_profile = (token: any) => {
    return {
        type: "SET_USER_PROFILE",
        payload: token
    }
}

export const set_token = (token: any) => {
    return {
        type: "SET_TOKEN",
        payload: token
    }
}