import jwtDecode from "jwt-decode"

const initialState = {
    menuStatus:
      window.localStorage.getItem("menuStatus") !== null
        ? window.localStorage.getItem("menuStatus")
        : "Opened",
    profile: window.localStorage.getItem("TOKEN")? jwtDecode(`${window.localStorage.getItem("TOKEN")}`):{},
    token: window.localStorage.getItem("TOKEN") !== null
    ? window.localStorage.getItem("TOKEN")
    : "",
  };
  
  export const reducers = (state = initialState, { type, payload }:any) => {
    switch (type) {
      case "SET_MENU_STATUS":
        localStorage.setItem("menuStatus", payload)
        return {
          ...state,
          menuStatus: payload,
        };
      case "SET_USER_PROFILE":
      const user = jwtDecode(payload)
      return {
        ...state,
        profile: user,
      };
      case "SET_TOKEN":
      localStorage.setItem("TOKEN", payload)
      return {
        ...state,
        token: payload
      }
      default:
        return state;
    }
  };