// console.log("Un %s y un %s", "perrito", "gatito")

// console.info("Hello World")
// console.warn("Hello Error")

// console.assert(42 == "42")
// console.assert(42 === "42")

// console.trace("hello")

const util = require("util")
const debuglog = util.debuglog("foo")

debuglog("hello from foo")