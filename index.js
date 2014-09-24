
var compare = require('typewiselite')
var search = require('binary-search')

function compareKeys (a, b) {
  return compare(a.key, b.key)
}

module.exports = function (_compare) {
  var ary = [], kv

  _compare = _compare || compare

  function cmp (a, b) {
    return _compare(a.key, b.key)
  }

  return kv = {
    getIndex: function (key) {
      return search(ary, {key: key}, cmp, 0, ary.length - 1)
    },
    get: function (key) {
      var i = this.getIndex(key)
      return i >= 0 ? ary[i].value : undefined
    },
    has: function (key) {
      return this.getIndex(key) >= 0
    },
    //update a key
    set: function (key, value) {
      return kv.add({key: key, value: value})
    },
    add: function (o) {
      var i = search(ary, o, cmp)

      //overwrite a key, or insert a key
      if(i < 0) ary.splice(~i, 0, o)
      else      ary[i] = o
      return i

    },
    toJSON: function () {
      return ary.slice()
    },
    store: ary
  }
}

module.exports.search = search
module.exports.compareKeys = compareKeys
