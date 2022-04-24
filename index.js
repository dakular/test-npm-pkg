// CJS (CommonJS)
// const test = require('./test')

// test.hello('Tiger')
// console.log('username =', test.username)

// ESM (ES Modules)
import { hello, username } from "./test.js";

// hello('Tiger')
// console.log('username =', username)
console.log('package duckula-npm-test inited')

export { hello, username }
