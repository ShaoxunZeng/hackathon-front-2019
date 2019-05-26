import request from "../utils/request";

export const login=({username="",password=""})=>{
    return request("/user/login", {
        method: "POST",
        body: {
            username,
            password
        }
    });
};

export const register=({username='',password=''})=>{
    return request('/user/register',{
        method:"POST",
        body:{
            username,
            password
        }
    })
};

export const getAllGames=()=>{
    return request('/games',{
        method:"GET"
    })
};

export const getAllRooms=(gameName)=>{
    return request(`/game/${gameName}`,{
        method:"GET"
    })
};

