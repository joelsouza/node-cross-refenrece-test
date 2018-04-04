const b = require('./b')

class A { 
  static foo () {
    b.bar()
    console.log('calling b.bar() from A.foo()')
  }
}

module.exports = A