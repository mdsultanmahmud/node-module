const events = require("events")
console.log(events)
const eventEmitter = new events.EventEmitter()

function printHlw(){
    console.log("Hlw, how are you??")
}

const girlFrndNai = () =>{
    console.log("Amr akta girlfrnd lagbe")
}

eventEmitter.on("hlw", printHlw)
eventEmitter.on("gf", girlFrndNai)
// eventEmitter.emit("hlw")
// eventEmitter.emit("gf")


// we can use on function directly 

eventEmitter.on("printsomething", () =>{
    console.log("I want to print something here.")
})

eventEmitter.emit("printsomething")