var uuid = require('node-uuid');

class RoomService {
  constructor() {
    this.rooms = {};
  }

  create(user) {
    var room = new Room();
    this.rooms[room.roomId] = room;
    this.enter(user,room.roomId);
    return room;
  }
  
  enter(user,roomId) {
  }

  leave(user) {
  }
};


class Room{
  constructor() {
    this.players = [];
	  this.roomId = uuid.v1();
  }
}

module.exports = new RoomService();