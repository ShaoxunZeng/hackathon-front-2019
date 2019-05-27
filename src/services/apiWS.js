const SERVER_LOC = "192.168.162.194:9001";

export const getRoomInfo = (gId, rId) => {
  return new WebSocket(`ws://${SERVER_LOC}/${gId}/${rId}`);
};
