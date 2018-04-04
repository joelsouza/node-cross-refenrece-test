const A = require('./a')

class B { 
  static bar () {
    console.log('B.bar()')
    A.bar()
  }
}

module.exports = B