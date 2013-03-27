var events = require("events");
var stream = new events.EventEmitter();

function ooooo(data) {
    console.log('Received data: "' + data + '"');
}

function xxxxx(data) {
    console.log('Received data: "' + data + '"');
}

stream.on("data", xxxxx);
stream.on("data", ooooo);

stream.emit("data", "It works!");

stream.removeAllListeners("data");
//stream.removeListener("data", xxxxx);
//stream.removeListener("data", ooooo);

stream.emit("data", "It works!2");