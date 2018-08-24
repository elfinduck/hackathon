var roomService = require('./room.js');

class UserService {
  constructor() {
    this.users = {};
  }

  handle(msg,socket){
		switch(msg.action){
			case "LOGIN":
				break;
			case "CREATE_ROOM":
				var room = roomService.create(msg.user);
				socket.send(JSON.stringify(room));
				break;
			case "ENTER_ROOM":
				roomService.enter(msg.user,msg.roomId);
				break;
		}
	}
	

};

class User {
  constructor() {
  }
}

module.exports = new UserService();
