import { LOGGEDIN,LOGGEDOUT,UserName,Password } from "./Actions";
const UserReducer = (state={isLogged : false,UserName:"",Password:""},action) => {

switch(action.type) {
case LOGGEDIN :
return {...state, isLogged : state.isLogged = true 
 
}
 

case LOGGEDOUT  :
    return {...state, isLogged : state.isLogged = false}
case UserName : 
return {...state,UserName:action.value}

case Password : 
return {...state,Password:state.Password}

    default : 
return state


}
}

export default UserReducer;