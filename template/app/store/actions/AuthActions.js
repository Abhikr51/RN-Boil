export const SET_LOGIN = "SET_LOGIN"
export const SET_LOGOUT = "SET_LOGOUT"



export const setLogin = () =>{


    return (dispatch)=>{
        //your code for login

        dispatch({
            type : SET_LOGIN,
            payload : {} ,//fill object with your user object
        })
    }
}

export const setLogout = () =>{


    return (dispatch)=>{
        //your code for logout

        dispatch({
            type : SET_LOGOUT,
        })
    }
}