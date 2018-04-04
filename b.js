const A = require('./a')

class B { 
  static bar () {
    A.bar()
    console.log('calling a.foo() from B.bar()')
  }
}

module.exports = B