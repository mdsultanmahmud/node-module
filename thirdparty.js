const _ = require("underscore")
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
const result = _.pluck(stooges,"name")
// console.log(result)

