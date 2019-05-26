import request from "../utils/request";

export const login = ({username = "", password = ""}) => {
    return request("/user/login", {
        method: "POST",
        body: {
            username,
            password
        }
    });
};

export const register = (payload) => {
    return request('/user/register', {
        method: "POST",
        body: payload
    })
};

export const getAllGames = () => {
    return request('/games', {
        method: "GET"
    })
};

export const getAllRooms = (gameName) => {
    return request(`/game/${gameName}`, {
        method: "GET"
    })
};

export const leaveRoom = (gameName, rid) => {
  return request(`/game/${gameName}/${rid}/{username}`, {
    method: "DELETE"
  })
};

export const enterRoom = (gameName, rid) => {
  return request(`/game/${gameName}/${rid}/{username}`, {
    method: "POST"
  })
};
