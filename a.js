const B = require('./b')

class A { 
  static foo () {
    console.log('A.foo()')
    B.bar()
  }

  static bar () {
    console.log('A.bar()')
  }
}

module.exports = A