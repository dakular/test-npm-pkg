const username = 'duckula'
function hello(name){
  console.log(`hello ${name}`)
}

// CJS (CommonJS)
// exports.hello = hello
// exports.username = username

// ESM (ES Modules)
export { hello, username }
